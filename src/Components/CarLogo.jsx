import React from 'react';
import im1 from "../assets/carLogo/im1.png";
import im2 from "../assets/carLogo/im2.png";
import im3 from "../assets/carLogo/im3.png";
import im4 from "../assets/carLogo/im4.png";
import "../Styles/carLogo.css";

function CarLogo() {
  const logos = [im1, im2, im3, im4, im1, im2, im3, im4];

  return (
    <div className="car-logo-container">
      <div className="car-logo-track">
        {/* Repeat logos twice for infinite loop illusion */}
        {[...logos, ...logos].map((img, i) => (
          <img src={img} alt={`logo-${i}`} key={i} className="car-logo" />
        ))}
      </div>
    </div>
  );
}

export default CarLogo;
