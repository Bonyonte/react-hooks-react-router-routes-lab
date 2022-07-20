import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <nav className="navbar" >
    <NavLink to='/movies'>Movies Page</NavLink>
    <NavLink to='/directors'>Directors Page</NavLink>
    <NavLink to='/actors'>Actors Page</NavLink>
    <NavLink to='/home'>Home Page</NavLink>
  </nav>;
}

export default NavBar;
