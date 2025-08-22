import React, { useState } from "react";
import serviceBanner from "../assets/img/service.png";
import "../css/Services.css";
import Title from "./Title";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const services = [
    { id: 1, name: "Consultation" },
    { id: 2, name: "Career" },
    { id: 3, name: "Service Request" },
    { id: 4, name: "Test Drive" },
  ];

  return (
    <>
      <div>
        <img src={serviceBanner} alt="Service Banner" className="service-banner" />
      </div>

      <Title
        title="Our Services"
        subtitle={<span>Discover our comprehensive automotive solutions</span>}
      />

      <div className="service-grid">
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedOption(item.id)}
            className={`service-card ${selectedOption === item.id ? "active" : ""}`}
            tabIndex={0}
            role="button"
            aria-pressed={selectedOption === item.id}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {selectedOption && (
        <div className="service-details">
          {selectedOption === 1 && (
            <div>
              <h4>Consultation</h4>
              <p>Connect with our automotive experts for personalized advice and solutions.</p>
              <form className="service-form">
                <label>
                  Name
                  <input type="text" placeholder="Your Name" required />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="Your Email" required />
                </label>
                <label>
                  Message
                  <textarea placeholder="Your Message" required></textarea>
                </label>
                <button type="submit">Book Consultation</button>
              </form>
            </div>
          )}
          {selectedOption === 2 && (
            <div>
              <h4>Career</h4>
              <p>Join our team and grow your career in the automotive industry.</p>
              <form className="service-form">
                <label>
                  Name
                  <input type="text" placeholder="Your Name" required />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="Your Email" required />
                </label>
                <label>
                  Cover Letter
                  <textarea placeholder="Tell us about yourself" required></textarea>
                </label>
                <button type="submit">Apply Now</button>
              </form>
            </div>
          )}
          {selectedOption === 3 && (
            <div>
              <h4>Service Request</h4>
              <p>Request maintenance or repair services for your vehicle.</p>
              <form className="service-form">
                <label>
                  Name
                  <input type="text" placeholder="Your Name" required />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="Your Email" required />
                </label>
                <label>
                  Vehicle Details
                  <input type="text" placeholder="Make & Model" required />
                </label>
                <label>
                  Service Needed
                  <textarea placeholder="Describe the service required" required></textarea>
                </label>
                <button type="submit">Request Service</button>
              </form>
            </div>
          )}
          {selectedOption === 4 && (
            <div>
              <h4>Test Drive</h4>
              <p>Experience your preferred car with a scheduled test drive.</p>
              <form className="service-form">
                <label>
                  Name
                  <input type="text" placeholder="Your Name" required />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="Your Email" required />
                </label>
                <label>
                  Preferred Car Model
                  <input type="text" placeholder="Car Model" required />
                </label>
                <label>
                  Preferred Date
                  <input type="date" required />
                </label>
                <label>
                  Preferred Time
                  <input type="time" required />
                </label>
                <button type="submit">Schedule Test Drive</button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Services;
