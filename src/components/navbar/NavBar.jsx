import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./NavBar.css";
import MobileNav from "./MobileNav";

function NavBar() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  return (
    <nav>
      <div className="logo-img-parent">
        <NavLink to={"/"}>
          <img src="/assets/logo.png" alt="Izettl Logo" className="img-logo" />
        </NavLink>
      </div>

      <menu>
        <li className="menu-item">
          <NavLink to={"/"} className={"link-item"}>
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to={"/about-us"} className={"link-item"}>
            About Us
          </NavLink>
        </li>
        <li className="menu-item">
          <Link to={"/#products"} className={"link-item"}>
            Our Products
          </Link>
        </li>
        <li className="menu-item">
          <Link to={"/#contact-us"} className={"link-item"}>
            Contact Us
          </Link>
        </li>
      </menu>

       {isMobileMenuVisible ? (
          <div className="xIcon" onClick={() => setIsMobileMenuVisible(false)}>
            <MdOutlineClose />
          </div>
        ) : (
          <FaBars
            className="barsIcon"
            onClick={() => setIsMobileMenuVisible(true)}
          />
        )}
      {isMobileMenuVisible && <MobileNav />}
    </nav>
  );
}

export default NavBar;
