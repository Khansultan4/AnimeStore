import { useState, useEffect } from 'react';
import Form from '../../components/Form/Form';
import List from '../../components/List/List';
import styles from './HomePage.module.css';
import axiosInstance from '../../axiosInstance';

export default function HomePage({ user, productsInCart, setProductsInCart }) {
  const [entries, setEntries] = useState([]);
console.log('4444',productsInCart);

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/products`)
      .then((res) => {
        setEntries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Form user={user} setEntries={setEntries} />
      <List user={user} data={entries} setEntries={setEntries} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
    </div>
  );
}
