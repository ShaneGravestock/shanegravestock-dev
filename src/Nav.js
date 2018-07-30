import React, { Component } from 'react';
import './Nav.css';
import {Route, Link} from 'react-router-dom'
import {Gallery} from './Gallery';
import Showreel from './pages/showreel';
import Profile from './pages/profile.js';
import Contact from './pages/contact.js';
import Thanks from './pages/thanks.js';

class Nav extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="navigation">
                    <h1><Link to="/">Shane Gravestock</Link></h1>
                    <ul className="menu-items">
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/showreel">Showreel</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <ul className="social">
                        <li><a className="instagram" aria-label="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shanegravestock/"></a></li>
                        <li><a className="linkedin" aria-label="linkedin" target="_blank" rel="noopener noreferrer" href="https://twitter.com/ShaneGravestock"></a></li>
                        <li><a className="twitter" aria-label="twitter" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shanegravestock/"></a></li>
                    </ul>
                    
                </div>
                <Route exact path="/" component={Gallery}/>
                <Route path="/showreel" component={Showreel}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/thanks" component={Thanks}/>
            </div>
        );
    }
}

export default Nav;