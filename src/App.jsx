
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Hero";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import "./css/App.css";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import CartContextProvider from "./pages/CartContext";

const App = () => {

  return (
    <CartContextProvider>
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About  />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
    </CartContextProvider>
  );
};

export default App;
