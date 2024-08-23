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
  Image
} from "@chakra-ui/react";
import axiosInstance from "../../axiosInstance";

export default function MainCard({ entry, setEntries, user, setProductsInCart }) {
  console.log('RRRRRRRRuser', entry?.userId);
  const [inCart, setInCart] = useState(false);

const userId = entry?.userId;
const productId = entry?.id;

  const addHandler = async (e) => {
    e.preventDefault();
      const res = await axiosInstance.post(`${import.meta.env.VITE_API}/cart`, {userId, productId});
      console.log('22222', res);

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

  return (
    <div className={styles.wrapper}>
      <Card bgColor="#313133" className={styles.container} maxW="sm">
        <CardBody className={styles.body}>
          <Stack mt="3" spacing="3">
            <Heading size="md">{entry?.name}</Heading>
            <Text>{entry?.description}</Text>
            <Text size="lg">{entry?.price}{' руб.'}</Text>
            <Image src={entry?.image} />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
          {inCart === false ? (
            <Button 
            onClick={addHandler}
            variant="solid" colorScheme="blue">
              Добавить в корзину
            </Button>
            ) : 
            null
          }
          {inCart === true ? (
          <Button 
           variant='outline' colorScheme='green'>
            Товар в корзине
            </Button> 
            ) : 
            null
          }
            {entry.userId === user.id && (
            <Popover placement="top" className={styles.popover}>
              <PopoverTrigger>
                  <Button variant="ghost" colorScheme="blue">
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
                    variant="ghost"
                    colorScheme="blue"
                  >
                    Удалить
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
