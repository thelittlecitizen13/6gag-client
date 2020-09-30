import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import './index.css';
import App from './App';
import NavBar from './components/Navigation/NavBar'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    {/* <BackButton className="backButton"></BackButton> */}
    <NavBar />
      <Router>
        <div className="App">
        <Routes/>
        </div>
    </Router>
  </div>,
  document.getElementById('root')
);