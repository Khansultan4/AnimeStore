// import { useState, useEffect } from 'react';
import styles from './CartCard.module.css';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box, 
  Image
} from '@chakra-ui/react';
import axiosInstance from '../../axiosInstance';

export default function CartCard({ productInCart, setProductsInCart, user }) {  
// console.log('wdwdwdw',productInCart.id);

      

const deleteHandler = async (e) => {
  e.preventDefault();
  const res = await axiosInstance.delete(
    `${import.meta.env.VITE_API}/cart/${productInCart.id}`
  );    

  if (res.status === 200) {
    setProductsInCart((prev) => prev.filter((el) => el.id !== productInCart.id));
  }
};




  return (
    
    
    <Box bg='#313133' marginLeft={20} marginBottom={20}>
    <Card bg='#313133' width={350} height={500} maxW='sm'>
      <CardBody >
      <Heading size='md'>{productInCart.Product.name}</Heading>
      <Text >
          {`Цена: ${productInCart.Product.price} рублей`} 
          </Text>
        <div className={styles.wrapper}>
        <Image
          src={`${productInCart.Product.image}`}
          borderRadius='lg'
        />
        </div>
        <Stack mt='6' spacing='3'>          
          <Text>          
          {`${productInCart.Product.description}`} 
          </Text>
          
          
          <Text color='blue.600' fontSize='2xl'>        
          </Text>          
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>      
          <Link >
          <Button variant='solid' colorScheme='blue'>
            Оплатить 
          </Button>
          </Link>
            <Button onClick={deleteHandler} variant='ghost' colorScheme='blue'>
            Удалить из корзины
            </Button> 
        </ButtonGroup>
      </CardFooter>
    </Card>  
      </Box>
    
   
  );
}
