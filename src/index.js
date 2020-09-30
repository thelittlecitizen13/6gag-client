import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/Routes';
import './index.css';
import App from './App';
import BackButton from './components/Buttons/BackButton';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <BackButton className="backButton"></BackButton>
      <Router>
        <div className="App">
        <Routes/>
        </div>
    </Router>
  </div>,
  document.getElementById('root')
);