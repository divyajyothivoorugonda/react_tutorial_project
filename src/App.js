import './App.css';
import React from 'react';
import Homepage from './modules/containers/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './modules/containers/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopProducts from './modules/containers/ShopProducts';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<ShopProducts/>}/>
        </Routes>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
