import React, {FC, useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login: FC = () => {
  // @ts-ignore
    const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setIsAuth(true)
  }

  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин"/>
        <MyInput type="password" placeholder="Введите пароль"/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
