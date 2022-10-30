import React from 'react';
import Header from '../../components/Header';

import './FavoritesPage.css';

const FavoritesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Избранное</h1>
        <p>На этой странице собраны все избранные записи
        </p>
      </div>
    </div>
  );
};

export default FavoritesPage;
