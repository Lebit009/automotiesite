import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const validateUsername = (name) => {
    const regex = /^[a-zA-Z0-9_]{3,15}$/;
    return regex.test(name);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateUsername(username)) {
      setMessage("Username must be 3-15 characters, letters/numbers/underscores only.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      setMessage("User already exists with this email.");
      return;
    }
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Sign Up</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          className="register-input"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="register-input"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="register-input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="register-actions">
          <button type="submit" className="register-btn">
            Sign Up
          </button>
        </div>
        <div className="login-link">
         Already have an account? <NavLink to="/login">Login</NavLink>
        </div>
      </form>
      {message && <p className="register-message">{message}</p>}
      {showModal && (
        <div className="register-modal">
          <div className="register-modal-content">
            <h3>Registration Successful!</h3>
            <p>Your account has been created. Redirecting to login...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
