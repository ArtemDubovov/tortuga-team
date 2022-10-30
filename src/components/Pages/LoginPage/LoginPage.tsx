import React from 'react';

import InputCustom from '../../UI/InputCustom/InputCustom';
import ButtonCustom from '../../UI/Buttons/ButtonCustom';

import LogoImage from './../../../assets/icons/tortugaLogo.svg';
import './LoginPage.css';
import { Link, NavLink } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className='login-page'>
      <div className='login-page--wrapper'>
        <h1 className='login-page__header'>
          <img src={LogoImage} alt="Logo" />
        </h1>
        <form>
          <InputCustom type="email" classes='input-login' placeholder='e-mail' isRequired={true} title='test'/>
          <InputCustom type="password" classes='input-login' placeholder='пароль' isRequired={true} />
          <InputCustom type="text" classes='input-login' placeholder='кодовое слово' isRequired={true} />
          <Link className='button-custom' to='/Home'>войти</Link>
          {/* Тест для роутинга на главную страницу */}
          {/* <ButtonCustom classes='button-custom'>
            войти
          </ButtonCustom> */}
          
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
