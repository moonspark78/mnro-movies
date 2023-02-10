import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { MoviesType } from'./models/MoviesTypes'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  
  return (

  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ='/details'>Details</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    </div>
  </Router>
  

  );
}

export default App;
