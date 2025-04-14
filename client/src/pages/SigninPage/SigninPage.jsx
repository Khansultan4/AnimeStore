import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './SigninPage.module.css';

export default function SigninPage({ setUser, setProductsInCart}) {
  return (
    <div className={styles.wrapper}>
      <AuthForm title='Войти' type='signin' setUser={setUser} setProductsInCart={setProductsInCart}/>
    </div>
  );
}
