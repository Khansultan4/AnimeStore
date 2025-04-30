import styles from "./MainCard.module.css";
import { useState, useEffect } from 'react';
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Image,
  Link,
  Box
} from "@chakra-ui/react";
import axiosInstance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

export default function MainCard({ entry, setEntries, user, setProductsInCart, productsInCart }) {
const navigate = useNavigate();
const [inCart, setInCart] = useState(false);

const userId = entry?.userId;
const productId = entry?.id;

  const addHandler = async (e) => {
    e.preventDefault();
      const res = await axiosInstance.post(`${import.meta.env.VITE_API}/cart`, {userId, productId});
      

    if (res.status === 200) {
      axiosInstance
      .get(`${import.meta.env.VITE_API}/cart/`)
      .then((res) => {
        setProductsInCart(res.data);
  
      })
      .catch((err) => console.error(err));
      setInCart((prev) => (!prev)); 
    }
  };

  const deleteHandler = async () => {
    const res = await axiosInstance.delete(
      `${import.meta.env.VITE_API}/products/${entry.id}`
    );
    if (res.status === 200) {
      setEntries((prev) => prev.filter((el) => el.id !== entry.id));
    }
  };
  

  console.log(entry.userId === user.id)
// console.log('1234',productsInCart[1].productId);
console.log(entry.id);


  return (
    <div className={styles.wrapper}>
      <Card bgColor="#313133" width={350} height="100%" className={styles.container} maxW="sm" overflow='hidden'>
        <CardBody className={styles.body} width={350}>
          <Stack mt='6' spacing='3' width='300px' overflow='hidden'>

              <Heading size="md">{entry?.name}</Heading>
            <Image 
            maxWidth='300px'
            height='60%'
            src={entry?.image} 
 />

              <Text >{entry?.description}</Text>


              <Text size="lg">{entry?.price}{' руб.'}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
  {user.username ? (
    <div>
      <ButtonGroup spacing="2">
        {productsInCart?.some((el) => el.productId === entry.id) ? (
          <Button onClick={() => navigate('/cart')} variant='outline' colorScheme='green'>
            Товар в корзине
          </Button>
        ) : (
          <Button 
            onClick={addHandler}
            variant="solid" colorScheme="gray">
            Добавить в корзину
          </Button>
        )}
        {entry.userId === user.id && (
          <Popover placement="top" className={styles.popover}>
            <PopoverTrigger>
              <Button colorScheme="gray">
                Удалить
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                Вы действительно хотите удалить товар?
              </PopoverHeader>
              <PopoverBody>
                <Button
                  onClick={deleteHandler}
                  colorScheme="gray"
                >
                  Удалить
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </ButtonGroup>
    </div>
  ) : (
    <h3></h3>
  )}
</CardFooter>
      </Card>
    </div>
  );
}
