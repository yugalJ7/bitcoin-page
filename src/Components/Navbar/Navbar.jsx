import React, { useState } from "react";
//Problem - Using <a> tag whole page refresh when we navigate to one page to another
//Solution- Navlink -> used for internal linking in react
import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import "./navbar.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_logo">
          <img src="/logo.png" alt="koinX-logo" />
          <span>&#8482;</span>
        </div>
        <div className="menu-icon" onClick={handleShowNav}>
          <Hamburger className="hamburger-icon" />
        </div>

        <div className={`navbar_elements ${showNav && "active"}`}>
          <ul>
            <li>
              <NavLink href="/">Crypto Taxes</NavLink>
            </li>
            <li>
              <NavLink href="/">Free Tools</NavLink>
            </li>
            <li>
              <NavLink href="/">Resource Centre</NavLink>
            </li>
            <div className="navbar-element__button">
              <button>Get Started</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
