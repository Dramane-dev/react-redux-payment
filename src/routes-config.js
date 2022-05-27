import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/home';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

const RoutesConfig = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' exact element={<Home />} />
     <Route path='/Products' element={<Products />} />
     <Route path='/ShoppingCart' element={<ShoppingCart />} />
    </Routes>
  </BrowserRouter>
);
export default RoutesConfig;
