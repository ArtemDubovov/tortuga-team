import React from 'react';
import Header from '../../components/Header';

import './AdminPage.css';

const AdminPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Личный кабинет</h1>
        <p>На этой странице отображается личный кабинет
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
