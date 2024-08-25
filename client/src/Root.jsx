import { Outlet } from 'react-router-dom';
import Navbar from './widgets/Navbar/Navbar';

export default function Root({ user, setUser, productsInCart }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} productsInCart={productsInCart}/>
      <div style={{ marginTop: '70px' }}>
        <Outlet />
      </div>
    </>
  );
}
