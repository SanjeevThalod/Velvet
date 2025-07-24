import React from 'react';
import '../Styles/hero.css';
import video from "../assets/Videos/landing.mp4";

function Hero() {
  return (
    <div className="hero-section">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        {/* You can add more overlay content here */}
      </div>
    </div>
  );
}

export default Hero;
