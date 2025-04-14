import { Outlet } from 'react-router-dom';
import Navbar from './widgets/Navbar/Navbar';

export default function Root({ user, setUser, productsInCart, setProductsInCart }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
      <div style={{ marginTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
}
