import React from 'react';
import { Routes, Route } from 'react-router'
import './App.css';

import LoginPage from '../Pages/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
