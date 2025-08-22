import React, { useState, useEffect } from "react";
import "../css/Cart.css";

// Example: get cart from localStorage or as prop
const getInitialCart = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

const Cart = () => {
  const [cart, setCart] = useState(getInitialCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () =>
    cart
      .reduce(
        (sum, item) =>
          sum + parseFloat(item.price.replace("$", "")) * (item.quantity || 1),
        0
      )
      .toFixed(2);

  return (
    <div className="cart-layout">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="quantity">Qty: {item.quantity || 1}</p>
              <button
                className="remove-cart"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <span>Total: ${getTotal()}</span>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;