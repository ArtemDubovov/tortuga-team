import React from 'react';
import { Routes, Route } from 'react-router'
import './App.css';

import LoginPage from '../../pages/LoginPage/LoginPage';
import HomePage from './../../pages/HomePage/HomePage';
import TravelPage from '../../pages/TravelPage';
import GatheringsPage from '../../pages/GatheringsPage';
import RecipesPage from '../../pages/RecipesPage';
import AboutPage from '../../pages/AboutPage';
import MyFriends from '../../pages/MyFriends';
import FavoritesPage from '../../pages/FavoritesPage';
import AdminPage from '../../pages/AdminPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/Travels' element={<TravelPage />}/>
        <Route path='/Gatherings' element={<GatheringsPage />}/>
        <Route path='/Recipes' element={<RecipesPage />}/>
        <Route path='/About' element={<AboutPage />}/>
        <Route path='/MyFriends' element={<MyFriends />}/>
        <Route path='/Favorites' element={<FavoritesPage />}/>
        <Route path='/Admin' element={<AdminPage />}/>
      </Routes>
    </div>
  );
}

export default App;
