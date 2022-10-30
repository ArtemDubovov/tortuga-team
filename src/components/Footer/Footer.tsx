import React from 'react';

import './Footer.css';

import logo from './../../assets/icons/tortugaLogo.svg';
import { Link } from 'react-router-dom';
import NavList from './../NavList';

const Footer: React.FC = () => {

  const links = [
    {name: 'Поездки', link: '/Travels'},
    {name: 'Посиделки', link: '/Gatherings'},
    {name: 'Рецепты', link: '/Recipes'},
    {name: 'О нас', link: '/About'},
    {name: 'Мои друзья', link: '/MyFriends'},
    {name: 'Избранное', link: '/Favorites'},
    {name: 'Личный кабинет', link: '/Admin'},
  ]

  return (
    <footer className='footer'>
      <div className='container footer-wrapper'>
        <Link className='header-logo' to='/Home'>
          <img src={logo} alt='logo'></img>
        </Link>
        <NavList links={links}/>
        <p>tortuga-team 2022 ©</p>
      </div>
    </footer>
  );
};

export default Footer;
