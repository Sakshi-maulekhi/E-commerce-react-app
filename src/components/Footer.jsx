import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        
        <div className="footer-section brand">
          <h3 className="footer-logo">Ecommerce App</h3>
          <p>&copy; {new Date().getFullYear()} Ecommerce App. All rights reserved.</p>
        </div>

       
        <nav className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
