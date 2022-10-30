import React from 'react';

import './TravelPage.css';

import Header from '../../components/Header';

const TravelPage = () => {
  return (
    <div className='travel-page'>
      <Header />
      <div className="container">
        <h1>Поездки</h1>
        <p>На этой странице собраны все наши поездки за город, их можно отфильтровать, 
          воспользовавшись фильтром ниже
        </p>
      </div>
    </div>
  );
};

export default TravelPage;
