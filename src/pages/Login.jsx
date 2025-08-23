import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) =>
      (u.email === identifier || u.username === identifier)
    );
    if (!user) {
      setMessage("User does not exist.");
      return;
    }
    if (user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setMessage("");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/");
         window.location.reload();
      }, 2000);
    } else {
      setMessage("Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          className="login-input"
          placeholder="Enter Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="login-actions">
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
        <div className="signup-link">
          Don't have an account? <NavLink to="/signup">Sign up</NavLink>
        </div>
      </form>
      {message && <p className="login-message">{message}</p>}
      {showModal && (
        <div className="login-modal">
          <div className="login-modal-content">
            <h3>Login Successful!</h3>
            <p>Welcome back! You are now logged in.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
