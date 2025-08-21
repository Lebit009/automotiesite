import "../css/HomePage.css";
import logo from "../assets/img/logo.png";
import Title from "./Title";


const services = [
  "Car Maintenance",
  "Diagnostics",
  "Customization",
  "Installation",
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Automotive Hub</h1>
          <p>Your one-stop destination for quality car parts and services.</p>
          <button className="hero-btn">Explore Products</button>
        </div>
      </section>

      {/* Services Section
      <section className="services">
        <h2>Our Services</h2>
        <div className="card-container">
          {services.map((service, index) => (
            <div className="card" key={index}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* About Section 
      <section className="about">
        <h2>About Us</h2>
        <p>
          Automotive Hub is committed to providing top-quality automotive
          products and expert services. We combine experience, technology, and
          passion to keep your vehicles running smoothly.
        </p>
      </section>

      {/* Footer 
      <footer>
        <p>&copy; 2025 Automotive Hub. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
