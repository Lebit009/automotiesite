import React, { useState, useEffect } from "react";
import serviceBanner from "../assets/img/service.png";
import "../css/Services.css";
import Title from "./Title";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Selected service
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [serviceType, setServiceType] = useState("phone");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [bookings, setBookings] = useState([]);

  const services = [
    { id: 1, name: "Consultation" },
    { id: 2, name: "Career" },
    { id: 3, name: "Service Request" },
    { id: 4, name: "Test Drive" },
  ];

  // Load bookings from localStorage
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  // Save bookings to localStorage
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert("Please select a service first!");
      return;
    }

    const newBooking = {
      id: Date.now(),
      serviceName: services.find((s) => s.id === selectedOption).name,
      date,
      time,
      serviceType,
      email,
      feedback,
    };

    setBookings([...bookings, newBooking]);

    // Reset form
    setDate("");
    setTime("");
    setServiceType("phone");
    setEmail("");
    setFeedback("");
  };

  const selectedService = services.find((s) => s.id === selectedOption);

  return (
    <>
      <div>
        <img src={serviceBanner} alt="Service Banner" className="service-banner" />
      </div>

      <Title
        title="Services"
        subtitle={<span>We offer a variety of automotive services</span>}
      />

      {/* Layout 1: Service Cards */}
      <div className="service-grid">
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedOption(item.id)}
            className={`service-card ${selectedOption === item.id ? "active" : ""}`}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      
    </>
  );  
};

  const Consultation =()=>{
   <div className="services-container">
          <h2>Book Service: {selectedService.name}</h2>
          <form onSubmit={handleSubmit} className="service-form">
            <div>
              <label>Date: </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Time: </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Service Type: </label>
              <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                <option value="phone">Phone Service</option>
                <option value="test-drive">Test Drive</option>
              </select>
            </div>

            <div>
              <label>Email: </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </form>
        </div>


      {/* Saved Bookings */}
      <h2>Saved Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((b) => (
            <li key={b.id}>
              <strong>{b.serviceName}</strong> on {b.date} at {b.time} <br />
              Type: {b.serviceType} <br />
              Email: {b.email} <br />
            </li>
          ))}
        </ul>
      )}
  }

export default Services;
