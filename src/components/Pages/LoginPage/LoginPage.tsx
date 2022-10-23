import React from 'react';

import InputCustom from '../../UI/InputCustom/InputCustom';
import ButtonCustom from '../../UI/ButtonCustom/ButtonCustom';

import LogoImage from './../../../assets/icons/tortugaLogo.svg';
import './LoginPage.css';

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
          <ButtonCustom classes='button-login'>войти</ButtonCustom>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
