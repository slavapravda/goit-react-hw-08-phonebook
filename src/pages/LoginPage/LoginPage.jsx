import LoginForm from 'components/LoginForm/LoginForm';

import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.form}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
