import React from "react";
import { NavLink } from 'react-router-dom'
import {
  BrowserRouter as Router
} from "react-router-dom";
import './style.css'


const Navbar = () => {
  return (
    <Router>
      <nav>
        <NavLink exact to='/'>Nature Click Game</NavLink>
      </nav>
    </Router>
  )
}

export default Navbar;
