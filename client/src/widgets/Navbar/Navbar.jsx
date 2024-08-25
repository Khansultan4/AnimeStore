import axiosInstance, { setAccessToken } from '../../axiosInstance';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Stack } from "@chakra-ui/react";
export default function Navbar({ user, setUser, productsInCart }) {
  const navigate = useNavigate();
console.log(productsInCart);

  const logoutHandler = async () => {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API}/auth/logout`
    );
    if (response.status === 200) {
      setUser({});
      setAccessToken('');
      navigate('/');
    }
  };

  return (
    <div className={styles.wrapper}>
      <img onClick={() => navigate('/')}
            className={styles.logo}
            src="../../../public/tanjiro.svg"
          ></img>
      <div className={styles.left}>
        <Link to='/'>На главную</Link>
      </div>
      <div className={styles.right}>
        {user?.username ? (
          <>
          <div className={styles.cart}>
      <Link to='/cart'>
      <img className={styles.cartlogo}
            src="../../../public/cart.svg"
          ></img>
          </Link>
          <span>{`Товаров: ${productsInCart?.length}`}</span>
          </div>
          <Stack mt="-1" >
            <Avatar name={user?.username} />
          </Stack >
            <Link to='/' >{user.username}</Link>
            <Link onClick={logoutHandler}>Выйти</Link>
          </>
        ) : (
          <>
            <Link to='/signin'>Войти</Link>
            <Stack mt="-1" >
            <Avatar name={user?.username} />
          </Stack>
            <Link to='/signup'>Регистрация</Link>
          </>
        )}
      </div>
    </div>
  );
}
