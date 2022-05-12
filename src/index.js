import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import Team from './pages/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/team' element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

