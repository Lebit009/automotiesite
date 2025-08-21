import React, { useContext } from "react";
import { ThemeContext } from "./pages/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Hero";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}-theme`}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
