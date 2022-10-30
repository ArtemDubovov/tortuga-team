import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import './assets/fonts/fonts.css';
import App from './components/App/App';
import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
);

