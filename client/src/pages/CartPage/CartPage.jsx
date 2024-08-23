import { useState, useEffect } from 'react';
// import Form from '../../components/Form/Form';
import styles from './CartPage.module.css';
import axiosInstance from '../../axiosInstance';
import { Heading } from '@chakra-ui/react';
import ListCart from '../../components/List/ListCart';
export default function CartPage({ user, productsInCart, setProductsInCart }) {


  useEffect(() => {
   
    axiosInstance
    .get(`${import.meta.env.VITE_API}/cart`)
    .then((res) => {
      setProductsInCart(res.data);
      console.log('33333', res.data);
      
    })
    .catch((err) => console.error(err));
}, []);

return (

  <>
<div className={styles.wrapper}>  
<Heading as='h3' size='xl'>
Корзина
</Heading> <br/><br/>
    <ListCart productsInCart={productsInCart} setProductsInCart={setProductsInCart} user={user}/>      
  </div>
</>
);
}
