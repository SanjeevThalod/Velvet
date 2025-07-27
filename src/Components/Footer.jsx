import React from "react";
import "../Styles/footer.css";
import phoneImage from "../assets/footer-left.png";
import carImage from "../assets/footer-right.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-cta">
        <div className="footer-circle left-img">
          <img src={phoneImage} alt="App" />
        </div>

        <div className="footer-text">
          <h2>
            <span className="gold">Ready to Ride</span> Velvet?
          </h2>
          <p>
            Experience airport <span className="gold">transfers</span>
            <br />
            like never before.
          </p>
        </div>

        <div className="footer-circle right-img">
          <img src={carImage} alt="Car" />
        </div>
      </div>

      <div className="footer-menu">
        <div className="footer-logo">VELVET <span>EXPERIENCE</span></div>
        <div className="footer-links">
          <span>Blog</span>
          <span>Contact</span>
          <span>Terms</span>
          <span>Privacy Policy</span>
          <span>Care@velvetexperience.com</span>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 VELVET | All rights reserved
      </div>
    </div>
  );
}
