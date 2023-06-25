import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Orders } from './components/Orders';
import { Favorites } from './components/Favorites';
import { Wallet } from './components/Wallet';
import { Help } from './components/Help';
import { Promotions } from './components/Promotions';
import { Invite } from './components/Invite';
import { Home } from './components/Home';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className='max-w-7xl m-auto'>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/Help" element={<Help/>}/>
          <Route path="/promotions" element={<Promotions/>}/>
          <Route path="/invitefriends" element={<Invite/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
