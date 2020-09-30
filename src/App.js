import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/Routes';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes/>
        </div>
    </Router>
    
  );
}

export default App;
