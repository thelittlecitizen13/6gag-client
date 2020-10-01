import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import './index.css';
import App from './App';
import NavBar from './components/Navigation/NavBar'
import Title from './components/Defaults/Title'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <NavBar />
    <Title />
      <Router>
        <div className="App">
        <Routes/>
        </div>
    </Router>
  </div>,
  document.getElementById('root')
);