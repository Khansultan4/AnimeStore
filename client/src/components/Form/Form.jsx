import { useState } from 'react';
import styles from './Form.module.css';
import { Input, Button } from '@chakra-ui/react';
import axiosInstance from '../../axiosInstance';

const { VITE_API } = import.meta.env;

export default function Form({ setEntries, user }) {
  const [inputs, setInputs] = useState({ name: '', description: '' });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post(`${VITE_API}/products`, inputs);
    if (res.status === 200) {
      setEntries((prev) => [...prev, res.data]);
      setInputs({ name: '', image:'', description: '', price:'' });
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <h3 className={styles.head}>Добавь свой товар:</h3>
      
      <div className={styles.inputs} >
        <Input
          onChange={changeHandler}
          borderColor='#ffffff'
          name='name'
          value={inputs.name}
          placeholder='Название'
        />
        <Input
         onChange={changeHandler}
         borderColor='#ffffff'
         name='image'
         value={inputs.image}
         placeholder='Изображение'
        /> 
        <Input
          onChange={changeHandler}
          borderColor='#ffffff'
          name='description'
          value={inputs.description}
          placeholder='Описание'
        />
        <Input
          onChange={changeHandler}
          borderColor='#ffffff'
          name='price'
          value={inputs.price}
          placeholder='Стоимость'
        /> 
      </div>
      {user.username ? (
      <div className={styles.btns}>
        <Button type='submit' colorScheme='gray'>
          Создать
        </Button>
      </div>
      ) : (
        <h3 className={styles.down}>Авторизуйтесь для добавления товара</h3>
      )}
    </form>
  );
}
