import React from 'react';
import './Header.css';
import logoImage from './../../assets/icons/tortugaLogo.svg';
import SearchPanel from '../UI/SearchPanel';
import ButtonInter from '../UI/Buttons/ButtonInter';
import { ButtonStatus } from '../UI/Buttons/ButtonInter/ButtonInter';

const Header: React.FC = () => {
  return (
    <div className='container'>
      <header className='header'>
        <a className='header-logo' href='/Home'>
          <img src={logoImage} alt='logo'></img>
        </a>
        <SearchPanel placeholder='рецепт, место, ключевое слово, грибы, лес, озеро'/>
        <ButtonInter status={ButtonStatus.Light} Content=''/>
        <ButtonInter status={ButtonStatus.Dark} Content='Избранное'/>
        <ButtonInter status={ButtonStatus.Light} Content='Личный кабинет'/>
      </header>
    </div>
  );
};

export default Header;
