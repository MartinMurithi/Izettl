import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="logo-img-parent">
        <img src="/assets/logo.png" alt="Izettl Logo" className="img-logo" />
      </div>

      <menu>
        <li className="menu-item">Home</li>
        <li className="menu-item">About Us</li>
        <li className="menu-item">Our Products</li>
        <li className="menu-item">Our Impact</li>
      </menu>
    </nav>
  );
}

export default NavBar;
