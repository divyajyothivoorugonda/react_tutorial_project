import './App.css';
import React from 'react';
import Homepage from './modules/containers/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './modules/containers/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopProducts from './modules/containers/ShopProducts';
import Carts from './modules/components/Cart';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<ShopProducts/>}/>
          <Route path="/carts" element={<Carts/>}/>
        </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
