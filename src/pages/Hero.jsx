import "../css/Hero.css";
import Title from "./Title";
import "../css/Parallax.css";
import serviceworker from "../assets/img/service.png";

const analytics = [
  {
    title: "98% Customer Satisfaction",
    desc: "Our clients consistently rate us highly for service quality and reliability.",
    value: "98%",
    label: "Satisfaction",
  },
  {
    title: "24hr Average Response Time",
    desc: "We respond to inquiries and service requests within 24 hours on average.",
    value: "24hr",
    label: "Response",
  },
  {
    title: "10,000+ Parts Delivered",
    desc: "We have successfully delivered over 10,000 parts to satisfied customers.",
    value: "10,000+",
    label: "Parts",
  },
  {
    title: "4.9/5 Service Rating",
    desc: "Our service is rated 4.9 out of 5 across major review platforms.",
    value: "4.9/5",
    label: "Rating",
  },
];


const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Automotive Hub</h1>
          <p>Your one-stop destination for quality car parts and services.</p>
          <button className="hero-btn"><a href="/products">Explore Products</a></button>
        </div>
      </section>
      <section className="experience-section">
        <div className="experience-header">
          <div className="experience-scale">
            <h2>Experience That Grows With Scale</h2>
          </div>
          <div className="experience-description">
            <p>
              Our expertise expands as your needs grow. We deliver reliable
              solutions for every stage of your automotive journey.
            </p>
          </div>
        </div>
        <div className="experience-icons-row">
          <div className="experience-icon-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048313.png"
              alt="Maintenance"
              className="experience-icon"
            />
            <h3>Expert Maintenance</h3>
            <p>
              Keep your vehicle running smoothly with our professional
              maintenance services.
            </p>
          </div>
          <div className="experience-icon-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048316.png"
              alt="Diagnostics"
              className="experience-icon"
            />
            <h3>Advanced Diagnostics</h3>
            <p>
              State-of-the-art diagnostics to quickly identify and resolve
              issues.
            </p>
          </div>
          <div className="experience-icon-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048320.png"
              alt="Customization"
              className="experience-icon"
            />
            <h3>Custom Solutions</h3>
            <p>
              Personalize your car with our wide range of customization options.
            </p>
          </div>
        </div>
      </section>
      <section className="px-section">
        <div className="px-viewport">
          <div className="px-layer">
            <div className={`px-bg`}>
              <img src={serviceworker} alt="Service Worker" />
            </div>
          </div>
          <div className="px-content">
            <h1>Servicing and Maintenance</h1>
            <p>Feel the performance before and after servicing.</p>
          </div>
        </div>
      </section>
      <section className="why-prefer-section">
        <Title
          title="Why Prefer Us?"
          subtitle={<p>Your satisfaction is our priority.</p>}
        />
        <div className="why-prefer-cards">
          {analytics.map((card, idx) => (
            <div className="why-prefer-card" key={idx}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="analytics-value">{card.value}</span>
              <span className="analytics-label">{card.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
