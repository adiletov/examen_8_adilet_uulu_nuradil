import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        return (
           <header className="header">
               <p>Quetos control</p>
               <div className="link">
                   <NavLink className="nav-link" to="/quotes">Quotes</NavLink>
                   <NavLink className="nav-link" to="/add">Submit new quotes</NavLink>
               </div>
           </header>
        );
    }
}

export default Header;