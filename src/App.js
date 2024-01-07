import './App.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CryptoConverter from './components/CryptoConverter';
import Headers from './components/Headers';
import Home from './components/Home.js';


const App = () => (
  <div>
    <Headers/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crypto-converter" element={<CryptoConverter />} />
    </Routes>
  </div>
);

export default App;
