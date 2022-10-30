import React from 'react';

import './MyFriends.css';

import Header from '../../components/Header';

const MyFriends = () => {
  return (
    <div className='travel-page'>
      <Header />
      <div className="container">
        <h1>Мои друзья</h1>
        <p>На этой странице все ваши друзья</p>
      </div>
    </div>
  );
};

export default MyFriends;
