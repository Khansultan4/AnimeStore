const router = require('express').Router();
const { where } = require('sequelize');
const { Cart, Product } = require('../../db/models');
const { verifyAccessToken } = require('../../middlewares/verifyToken');
const { verifyRefreshToken } = require('../../middlewares/verifyToken');

router

  .get('/',verifyRefreshToken, async (req, res) => {
    const { user } = res.locals;
    console.log('1232',user);
    
    try {
      const productsInCart = await Cart.findAll({include: {model: Product},where:{ userId: user.id}});
      console.log("1111111", productsInCart);
      res.json(productsInCart.sort((a, b) => a.id - b.id));
      
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }    
  })
  
  .post('/', verifyAccessToken, async (req, res) => {
    const { productId } = req.body;  
    const { user } = res.locals;
    console.log(user);
    
          
    try {
      const entry = await Cart.create({        
        userId: user.id,
        productId,
      });
      res.json(entry);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .delete('/:id', verifyAccessToken, async (req, res) => {
    const { id } = req.params;
    const { user } = res.locals;
    console.log(user);
    
    try {
      const task = await Cart.findOne({ where: { id } });
      if (task.userId === user.id) {
        task.destroy();
        res.sendStatus(200);
      } else {
        res.status(400).json({ message: 'У вас нет прав на удаление товара' });
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });

module.exports = router;