import React from 'react';
import { Routes, Route } from 'react-router'
import './App.css';

import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/Home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
