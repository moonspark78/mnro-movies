import React from 'react';
import './App.css';
import { Categories } from './components/Categories';
import { Home } from './pages/Home';

function App() {
  const title = 'Genre'

  return (
    <div className="App">
      <Home/>
      <Categories title='Categories'/>
    </div>
  );
}

export default App;
