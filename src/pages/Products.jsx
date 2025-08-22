import React, { useState } from "react";
import "../css/Product.css";
import logo1 from "../assets/img/logo.png";
import brakePadsImg from "../assets/img/brake-pads.png";
import oilFilterImg from "../assets/img/oil-filter.png";
import sparkPlugImg from "../assets/img/spark-plug.png";
import carBatteryImg from "../assets/img/car-battery.png";
import airFilterImg from "../assets/img/air-filter.png";
import headlightBulbImg from "../assets/img/headlightbulb.png";
import windshieldWipersImg from "../assets/img/windshield-wipers.png";
import radiatorImg from "../assets/img/radiator.png";

const products = [
  {
    id: 1,
    name: "Brake Pad Set for Holden Colorado Isuzu D-Max Mu-X LDV T60 ",
    price: "$49.99",
    image: brakePadsImg,
    rating: 4.7,
    category: "Brakes",
  },
  {
    id: 2,
    name: "Oil Filter for Toyota Corolla Camry Hilux Prado Yaris RAV4 Ref Z386",
    price: "$12.99",
    image: oilFilterImg,
    rating: 4.5,
    category: "Oil Filters",
  },
  {
    id: 3,
    name: "Spark Plug for Mazda 3 6 CX-5 CX-9 BT-50 Ref BKR6E-11",
    price: "$8.99",
    image: sparkPlugImg,
    rating: 4.6,
    category: "Spark Plugs",
  },
  {
    id: 4,
    name: "Car Battery for Ford Ranger Mazda BT-50 Toyota Hilux Ref NS70L",
    price: "$119.99",
    image: carBatteryImg,
    rating: 4.8,
    category: "Batteries",
  },
  {
    id: 5,
    name: "Air Filter for Hyundai i30 Tucson Santa Fe Elantra Ref A1644",
    price: "$15.99",
    image: airFilterImg,
    rating: 4.4,
    category: "Air Filters",
  },
  {
    id: 6,
    name: "Headlight Bulb for Volkswagen Golf Polo Passat Tiguan",
    price: "$24.99",
    image: headlightBulbImg,
    rating: 4.3,
    category: "Headlights",
  },
  {
    id: 7,
    name: 'Windshield Wipers for Subaru Forester Outback XV"',
    price: "$19.99",
    image: windshieldWipersImg,
    rating: 4.2,
    category: "Wipers",
  },
  {
    id: 8,
    name: "Radiator for Nissan Navara D40 Pathfinder R51 Ref 21460-EB70A",
    price: "$89.99",
    image: radiatorImg,
    rating: 4.6,
    category: "Radiators",
  }
];

const tabLabels = [
  "Brakes",
  "Oil Filters",
  "Spark Plugs",
  "Batteries",
  "Air Filters",
  "Headlights",
  "Wipers",
  "Radiators"
];
const Products = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredProducts = search
    ? products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : selected
      ? products.filter((p) => p.category === selected)
      : products;
  return (
    <div className="products-layout">
      {/* Layout 1 SEarch and tabs*/}
      <div className="products-sidebar">
        <h2>Find Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelected(null);
          }}
          className="search-bar"
        />
        <div className="tabs">
          {tabLabels.map((label) => (
            <button
              key={label}
              className={`tab-btn ${selected === label ? "active" : ""}`}
              onClick={() => {
                setSelected(label);
                setSearch("");
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
