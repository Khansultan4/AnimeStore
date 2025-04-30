import { useState } from 'react';
import styles from './AuthForm.module.css';
import { Input, Button } from '@chakra-ui/react';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ title, type = 'signin', setUser, setProductsInCart }) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API}/auth/${type}`,
        inputs
      );
      const cart = await axiosInstance.get(
        `${import.meta.env.VITE_API}/cart`,
      );
      setUser(response.data.user);
      setAccessToken(response.data.accessToken);
      setProductsInCart(cart.data);

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <h3 className={styles.head}>{title}</h3>
      <div className={styles.inputs}>
        {type === 'signin' && (
          <>
            <Input
              onChange={changeHandler}
              borderColor='#ffffff'
              type='email'
              name='email'
              value={inputs?.email}
              placeholder='Эл.почта'
            />
            <Input
              onChange={changeHandler}
              borderColor='#ffffff'
              type='password'
              name='password'
              value={inputs?.password}
              placeholder='Пароль'
            />
          </>
        )}
        {type === 'signup' && (
          <>
            <Input
              onChange={changeHandler}
              borderColor='#ffffff'
              name='username'
              value={inputs?.username}
              placeholder='Имя пользователя'
            />
            <Input
              onChange={changeHandler}
              borderColor='#ffffff'
              type='email'
              name='email'
              value={inputs?.email}
              placeholder='Эл.почта'
            />
            <Input
              onChange={changeHandler}
              borderColor='#ffffff'
              type='password'
              name='password'
              value={inputs?.password}
              placeholder='Пароль'
            />
          </>
        )}
      </div>
      <div className={styles.btns}>
        {type === 'signin' && (
          <Button type='submit' colorScheme='gray'>
            Вход
          </Button>
        )}
        {type === 'signup' && (
          <Button type='submit' colorScheme='gray'>
            Регистрация
          </Button>
        )}
      </div>
    </form>
  );
}
