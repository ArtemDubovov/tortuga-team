import React from 'react';

import './Footer.css';

import logo from './../../assets/icons/tortugaLogo.svg';
import NavList from './../NavList';

const Footer: React.FC = () => {

  const links = [
    {name: 'Поездки', link: ''},
    {name: 'Посиделки', link: ''},
    {name: 'Рецепты', link: ''},
    {name: 'О нас', link: ''},
    {name: 'Мои друзья', link: ''},
    {name: 'Избранное', link: ''},
    {name: 'Личный кабинет', link: ''},
  ]

  return (
    <footer className='footer'>
      <div className='container footer-wrapper'>
        <img src={logo} alt='logo' />
        <NavList links={links}/>
        <p>tortuga-team 2022 ©</p>
      </div>
    </footer>
  );
};

export default Footer;
