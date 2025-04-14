import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './SignupPage.module.css';

export default function SignupPage({ setUser, setProductsInCart }) {
  return (
    <div className={styles.wrapper}>
      <AuthForm title='Зарегистрироваться' type='signup' setUser={setUser} setProductsInCart={setProductsInCart}/>
    </div>
  );
}
