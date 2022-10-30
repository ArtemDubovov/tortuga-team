import React from 'react';

import './RecipesPage.css';

import Header from '../../components/Header';

const RecipesPage = () => {
  return (
    <div className='travel-page'>
      <Header />
      <div className="container">
        <h1>Рецепты</h1>
        <p>На этой странице собраны все наши поездки рецепты</p>
      </div>
    </div>
  );
};

export default RecipesPage;
