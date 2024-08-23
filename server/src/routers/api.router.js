const router = require('express').Router();
const cartRouter = require('./cart.api.router');
const productsRouter = require('./products.api.router');
const authRouter = require('./auth.router');
const tokenRouter = require('./token.router');

router.use('/products', productsRouter);
router.use('/auth', authRouter);
router.use('/cart', cartRouter);
router.use('/tokens', tokenRouter);

module.exports = router;
