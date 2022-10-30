import React from 'react';
import Header from '../../components/Header';

import './GatheringsPage.css';

const GatheringsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Посиделки</h1>
        <p>На этой странице собраны все наши посиделки
        </p>
      </div>
    </div>
  );
};

export default GatheringsPage;
