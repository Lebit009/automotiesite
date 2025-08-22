import React, { useState } from "react";
import serviceBanner from "../assets/img/service.png";
import "../css/Services.css";
import Title from "./Title";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [requests, setRequests] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const services = [
    { id: 1, name: "Consultation" },
    { id: 2, name: "Career" },
    { id: 3, name: "Service Request" },
    { id: 4, name: "Test Drive" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true); // mark as pending
  };

  const renderForm = () => {
    switch (selectedOption) {
      case 1:
        return (
          <form className="service-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email || loggedInUser?.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                readOnly={!!loggedInUser}
              />
            </label>
            <label>
              Message
              <textarea placeholder="Your Message" required></textarea>
            </label>
            <button type="submit">Book Consultation</button>
          </form>
        );
      case 2:
        return (
          <form className="service-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email || loggedInUser?.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                readOnly={!!loggedInUser}
              />
            </label>
            <label>
              Cover Letter
              <textarea placeholder="Tell us about yourself" required></textarea>
            </label>
            <button type="submit">Apply Now</button>
          </form>
        );
      case 3:
        return (
          <form className="service-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email || loggedInUser?.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                readOnly={!!loggedInUser}
              />
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
        );
      case 4:
        return (
          <form className="service-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your Name" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email || loggedInUser?.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                readOnly={!!loggedInUser}
              />
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="services-container">
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
            onClick={() => {
              setSelectedOption(item.id);
              setPending(false); // reset pending when switching
            }}
            className={`service-card ${selectedOption === item.id ? "active" : ""}`}
            tabIndex={0}
            role="button"
            aria-pressed={selectedOption === item.id}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Details show BELOW cards */}
      {selectedOption && (
        <div className="service-details">
          <h4>{services.find((s) => s.id === selectedOption).name}</h4>
          {pending ? (
            <p className="pending-text">Your request is pending. We will contact you soon.</p>
          ) : (
            renderForm()
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
