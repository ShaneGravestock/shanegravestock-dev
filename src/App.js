import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav  from './Nav.js';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
        <Nav/>
       </Router>

       <footer className="footer-social">
       <p>
          Shane Gravestock 2018 &#x00a9;
        </p>
        <ul className="social">
            <li><a className="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shanegravestock/"></a></li>
            <li><a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShaneGravestock"></a></li>
            <li><a className="twitter" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shanegravestock/"></a></li>
        </ul>
       </footer>
      </div>
    );
  }
}

export default App;
