import React from 'react';
// import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { HeadLineCards } from './components/HeadLineCards';
import { Food } from './components/Food';

function App() {
  return (
    <div className='max-w-7xl m-auto'>
      <NavBar/>
      <Hero/>
      <HeadLineCards/>
      <Food/>
    </div>
  );
}

export default App;
