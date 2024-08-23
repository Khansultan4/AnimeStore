import { useState, useEffect } from 'react';
import CartCard from '../Card/CartCard';
import styles from './ListCart.module.css';
import { SimpleGrid } from '@chakra-ui/react';
import axiosInstance from '../../axiosInstance';

export default function ListCart({ productsInCart, setProductsInCart, user }) {

  return (
    <div className={styles.wrapper}>
      <SimpleGrid columns={3} spacingX='40px' spacingY='2px'>
      {productsInCart.length
        ? productsInCart?.map((el) => <CartCard key={el.id} productInCart={ el } setProductsInCart={setProductsInCart} user={user}/>)
        : null}
      </SimpleGrid>
    </div>
  );
}