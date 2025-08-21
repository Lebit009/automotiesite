

import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../css/ProductSe.css';
import { AiOutlineSearch } from 'react-icons/ai';


const ProductSe = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };
  return (
    <div className='productse-container'>
      <div className="productse-banner">
        <img src={logo} alt="Banner" className="productse-banner-logo" />
        <h2 className="productse-banner-title">Our Featured Products</h2>
        <p className="productse-banner-subtitle">
          Explore the latest and best in automotive technology
        </p>
      </div>
      <form className="productse-searchbar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="productse-content">
        <div className="productse-item">
          <img src={logo} alt="Product 1" className="productse-item-image" />
          <h3 className="productse-item-title">High Performance Engine</h3>
          <p className="productse-item-description">
            Upgrade your vehicle's performance with our top-rated engine parts.
          </p>
        </div>
        <div className="productse-item">
          <img src={logo} alt="Product 2" className="productse-item-image" />
          <h3 className="productse-item-title">Advanced Suspension System</h3>
          <p className="productse-item-description">
            Experience a smoother ride with our advanced suspension systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductSe