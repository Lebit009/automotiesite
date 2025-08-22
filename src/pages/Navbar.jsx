import logo from "../assets/img/logo.png";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        {/* <h1>Automotive</h1> */}
      </div>
      <div className="navbar-link-container">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-actions">
        <NavLink
          to="/cart"
          className="navbar-cart"
        >
          <span className="cart-icon">
            <GiShoppingCart className="cart" />
          </span>
        </NavLink>
        <NavLink to="/login" className="navbar-btn">
          Login
        </NavLink>
        <NavLink to="/signup" className="navbar-btn signup">
          Sign Up
        </NavLink>
      </div>
     
    </div>
  );
}
