import React from "react";
import { NavLink } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to='/'>Nature Click Game</NavLink>
    </nav>
  )
}

export default Navbar;
