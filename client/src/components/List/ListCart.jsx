import { useState, useEffect } from 'react';
import CartCard from '../Card/CartCard';
import styles from './ListCart.module.css';
import { SimpleGrid } from '@chakra-ui/react';
import axiosInstance from '../../axiosInstance';

export default function ListCart({ productsInCart, setProductsInCart, user }) {
console.log('1116y5y55123',productsInCart[2]?.userId);
console.log('122',user.id);



  return (

    <div className={styles.wrapper}>
      {/* {productsInCart?.map((el) => 
    {el.userId !== user.id ? ( */}
      {productsInCart[2]?.userId === user.id && (
      <SimpleGrid columns={3} spacingX='40px' spacingY='2px'>
      {productsInCart.length
        ? productsInCart?.map((el) => 
         <CartCard key={el.id} productInCart={ el } setProductsInCart={setProductsInCart} user={user}/>)
        : null}
      </SimpleGrid>
      )}
      {/* // ): null}
      // )} */}
    </div>

  );
}