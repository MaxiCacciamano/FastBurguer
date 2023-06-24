import React from 'react';
// import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className='max-w-7xl m-auto'>
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;
