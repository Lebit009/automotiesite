import React from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import logo from "../assets/img/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
        <h1>Automotive</h1>
      </div>
      <div className="navbar-link-container">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <MdOutlineLightMode className="light-mode-icon" alt="Light Mode" />
      <MdDarkMode className="dark-mode-icon" />
      <button className="menu-btn">
        <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />
      </button>
    </div>
  );
}