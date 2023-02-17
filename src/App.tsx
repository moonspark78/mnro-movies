import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Details from './pages/Details';

function App() {

  return (

    <Router>
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
    </div>
  </Router>

  );
}

export default App;
