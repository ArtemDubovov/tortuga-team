import React from 'react';
import Header from '../../components/Header';

import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>О нас</h1>
        <p>Страница о нас</p>
      </div>
    </div>
  );
};

export default AboutPage;
