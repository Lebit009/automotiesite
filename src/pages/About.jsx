
import React, { useState, useEffect } from "react";
import "../css/About.css";
import car1 from "../assets/img/car1.png";
import car2 from "../assets/img/car2.png";
import car3 from "../assets/img/car3.png";
import car4 from "../assets/img/car4.png";
import car5 from "../assets/img/car5.png";

const hubFeatures = [
  {
    title: "Latest Models",
    desc: "Explore the newest cars, bikes, and EVs with detailed specs and reviews.",
    img: car1
  },
  {
    title: "Service & Maintenance",
    desc: "Book appointments, track service history, and get expert tips for your vehicle.",
    img: car2
  },
  {
    title: "Community Forum",
    desc: "Join discussions, share experiences, and connect with fellow automotive enthusiasts.",
    img: car3
  },
  {
    title: "Accessories & Parts",
    desc: "Browse and shop for genuine accessories, tires, and spare parts.",
    img: car4
  },
  {
    title: "Events & News",
    desc: "Stay updated with automotive news, launches, and upcoming events.",
    img: car5
  }
];


const About = () => {
  const [current, setCurrent] = useState(0);
  const total = hubFeatures.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);


  // Responsive: 1 card (mobile), 2 (tablet), 3 (desktop)
  const getNumCards = () => {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const [numCards, setNumCards] = useState(getNumCards());

  useEffect(() => {
    const handleResize = () => setNumCards(getNumCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    return Array.from({ length: numCards }, (_, offset) => hubFeatures[(current + offset) % total]);
  };

  return (
    <div className="about-hub-container">
      <h2 className="about-hub-title">Automotive Hub</h2>
      <p className="about-hub-desc">Your one-stop destination for everything automotive. Discover, connect, and experience the future of mobility.</p>
      <div className="about-hub-carousel multi">
        {getVisibleCards().map((feature, idx) => (
          <div className="about-hub-card carousel-card" key={idx}>
            <img src={feature.img} alt={feature.title} className="about-hub-img" />
            <div className="about-hub-card-content">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {hubFeatures.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? " active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
