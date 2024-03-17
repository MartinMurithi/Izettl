import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="logo-img-parent">
        <NavLink to={'/'}><img src="/assets/logo.png" alt="Izettl Logo" className="img-logo" /></NavLink>
        
      </div>

      <menu>
        <li className="menu-item">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to={'/about-us'}>About Us</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to={'/client-profile'}>Client Profile</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to={'/contacts'}>Contact Us</NavLink>
        </li>
      </menu>
    </nav>
  );
}

export default NavBar;
