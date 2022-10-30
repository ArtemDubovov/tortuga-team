import React from 'react';
import './Header.css';
import logoImage from './../../assets/icons/tortugaLogo.svg';
import SearchPanel from '../UI/SearchPanel';
import ButtonInter from '../UI/Buttons/ButtonInter';
import { ButtonStatus } from '../UI/Buttons/ButtonInter/ButtonInter';
import NavList from './../NavList';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const links = [
    {name: 'Поездки', link: '/Travels'},
    {name: 'Посиделки', link: '/Gatherings'},
    {name: 'Рецепты', link: '/Recipes'},
    {name: 'О нас', link: '/About'},
    {name: 'Мои друзья', link: '/MyFriends'},
  ]
  return (
    <div className='container'>
      <header className='header'>
        <Link className='header-logo' to='/Home'>
          <img src={logoImage} alt='logo'></img>
        </Link>
        <SearchPanel placeholder='рецепт, место, ключевое слово, грибы, лес, озеро'/>
        <ButtonInter status={ButtonStatus.Light} Content=''/>
        <ButtonInter status={ButtonStatus.Dark} Content='Избранное'/>
        <ButtonInter status={ButtonStatus.Light} Content='Личный кабинет'/>
      </header>
      <NavList links={links}/>
    </div>
  );
};

export default Header;
