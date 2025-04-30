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

export default function CartCard({ productInCart, setProductsInCart, user, resetInCartState }) {  

  const deleteHandler = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.delete(
      `${import.meta.env.VITE_API}/cart/${productInCart.id}`
    );    

    if (res.status === 200) {
      setProductsInCart((prev) => prev.filter((el) => el.id !== productInCart.id));
      resetInCartState(productInCart.id); 
    }
  };

  return (
    <Box bg='#313133' marginLeft={20} marginBottom={20}>
      <Card bg='#313133' width={350} maxW='sm' display="flex" flexDirection="column" height="100%">
        <CardBody flex="1">
          <Heading size='md'>{productInCart.Product.name}</Heading>
          <Text>
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
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>      
            <Link>
              <Button variant='solid' colorScheme='gray'>
                Оплатить 
              </Button>
            </Link>
            <Button onClick={deleteHandler} colorScheme='gray' color='black'>
              Удалить из корзины
            </Button> 
          </ButtonGroup>
        </CardFooter>
      </Card>  
    </Box>
  );
}
