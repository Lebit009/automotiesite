import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout =() =>{
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-links">
        <ul>
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
        </ul>
      </div>

      <div className="navbar-actions">
        <NavLink to="/cart" className="navbar-cart">
          <GiShoppingCart className="cart" />
        </NavLink>
        { loggedInUser ? (
          <>
            <span className="navbar-user">{loggedInUser.username ? loggedInUser.username : loggedInUser.email}</span>
            <button className="navbar-btn logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="navbar-btn">Login</NavLink>
            <NavLink to="/signup" className="navbar-btn signup">Sign Up</NavLink>
          </>
        )}

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
          <li><NavLink to="/cart" onClick={closeMenu}>Cart</NavLink></li>
          {loggedInUser ? (
            <>
              <li><span className="navbar-user">{loggedInUser.username ? loggedInUser.username : loggedInUser.email}</span></li>
              <li><button className="navbar-btn logout" onClick={() => { handleLogout(); closeMenu(); }}>Logout</button></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>
              <li><NavLink to="/signup" onClick={closeMenu}>Sign Up</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
