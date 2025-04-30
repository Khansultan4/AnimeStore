import axiosInstance, { setAccessToken } from '../../axiosInstance';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Stack, Box } from '@chakra-ui/react';
export default function Navbar({
  user,
  setUser,
  productsInCart,
  setProductsInCart,
}) {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API}/auth/logout`
    );
    if (response.status === 200) {
      setUser({});
      setAccessToken('');
      setProductsInCart([]);
      navigate('/');
    }
  };

  return (
    <div className={styles.wrapper}>
      <img
        onClick={() => navigate('/')}
        className={styles.logo}
        src="../../../public/tanjiro.svg"
      ></img>
      <div className={styles.left}>
        <Button onClick={() => navigate('/')} bg="gray" color="black">
          На главную
        </Button>
      </div>
      <div className={styles.right}>
        {user?.username ? (
          <>
            <div className={styles.cart}>
              <Link to="/cart">
                <img
                  className={styles.cartlogo}
                  src="../../../public/cart.svg"
                ></img>
              </Link>
              <span>{`Товаров: ${productsInCart?.length}`}</span>
            </div>


              <Stack mt="-1" display='inline-block'>
                <Avatar name={user?.username} />
              </Stack>

              <Box marginY="auto">
                <Link to="/">{user.username}</Link>
              </Box>


            <Button bg="gray" color="black" onClick={logoutHandler}>
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Button bg="gray" color="black" onClick={() => navigate('/signin')}>
              Войти
            </Button>

            <Stack mt="-1">
              <Avatar name={user?.username} />
            </Stack>

            <Button bg="gray" color="black" onClick={() => navigate('/signup')}>
              Регистрация
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
