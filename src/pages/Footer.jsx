import "../css/Footer.css";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <>
       <footer className="company-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Automotive Hub Logo" />
            <span>Automotive Hub</span>
          </div>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            {/* <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a> */}
          </div>
          <div className="footer-contact">
            <span>Email: info@automotivehub.com</span>
            <span>Phone: +61 0415651631</span>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Automotive Hub. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer