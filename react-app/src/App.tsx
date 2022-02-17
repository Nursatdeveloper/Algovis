import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/shared/Header';
import Documentation from './pages/Documentation';
import Home from './pages/Home';
import Search from './pages/Search';
import Sort from './pages/Sort';


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/documentation" element={<Documentation/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
