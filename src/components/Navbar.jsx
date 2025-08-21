import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "../assets/img/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../css/Navbar.css";
import React, { useState } from "react";

const Navbar = ({ theme, setTheme }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
        <h1>Automotive</h1>
      </div>
      <div className={`navbar-link-container${menuOpen ? " open" : ""}`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      {theme === "dark" ? (
        <MdOutlineLightMode
          onClick={toggleTheme}
          className="light-mode-icon"
          alt="Light Mode"
        />
      ) : (
        <MdDarkMode className="dark-mode-icon" onClick={toggleTheme} />
      )}
      <button className="menu-btn" onClick={() => setIsOpen(!menuOpen)}>
        {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>
    </div>
  );
};

export default Navbar;
