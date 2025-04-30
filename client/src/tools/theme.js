import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgImage: '../../../public/back5.png',
        color: '#f8f9fb',
        bgPosition: 'center',
        bgSize: 'cover',
        bgAttachment: 'fixed',
      },
      a: {
        color: '#f8f9fb',
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        color: '#f8f9fb',
      },
      h2: {
        color: '#f8f9fb',
      },
      p: {
        color: '#f8f9fb',
      },
    },

  },
  components: {
    Button: {
      variants: {
        surface: {
          bg: 'gray',
          color: 'white',
          _hover: { bg: 'green.300' },
        },
      },
    },
  },
});

export default theme;
