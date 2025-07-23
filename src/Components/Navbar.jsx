import React from 'react'
import "../Styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <h1 className='gradient-text'>VELVET</h1>
          <span>EXPERIENCE</span>
        </div>
        <div className="nav-links">
          <a href="#about">About Us</a>
          <button className="book-btn">Book Ride</button>
        </div>
      </div>
    </div>
  )
}
