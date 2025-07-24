import React from 'react'
import "../Styles/navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link style={{"textDecoration":"none"}} to="/">

          <div className="logo">
            <h1 className='gradient-text'>VELVET</h1>
            <span>EXPERIENCE</span>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/aboutUs">About Us</Link>
          <button className="book-btn">Book Ride</button>
        </div>
      </div>
    </div >
  )
}
