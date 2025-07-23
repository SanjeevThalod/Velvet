import React, { useEffect, useState } from "react";
import "../Styles/FleetShowcase.css";
// Image imports
import img2 from "../assets/Fleet/im2.png";
import img1 from "../assets/Fleet/im1.png";
import img3 from "../assets/Fleet/im3.png";
import img4 from "../assets/Fleet/im4.png";
import img5 from "../assets/Fleet/im5.png";
import img6 from "../assets/Fleet/im6.png";
import img7 from "../assets/Fleet/im7.png";
import img8 from "../assets/Fleet/im8.png";

// Video imports
import vd2 from "../assets/Fleet/vd2.mp4";
import vd1 from "../assets/Fleet/vd1.mp4";
import vd3 from "../assets/Fleet/vd3.mp4";
import vd4 from "../assets/Fleet/vd4.mp4";
import vd5 from "../assets/Fleet/vd5.mp4";
import vd6 from "../assets/Fleet/vd6.mp4";
import vd7 from "../assets/Fleet/vd7.mp4";
import vd8 from "../assets/Fleet/vd8.mp4";

const cars = [
  {
    name: "Rolls Royce Ghost",
    image: img1,
    video: vd1,
    tagline: "Ultra Luxury",
    description: "Whisper-quiet cabin, starlit ceiling, handcrafted elegance.",
  },
  {
    name: "Bentley Continental Gt",
    image: img2,
    video: vd2,
    tagline: "Ultra Luxury",
    description: "Diamond-knurled cabin, handcrafted leather, panoramic sunroof.",
  },
  {
    name: "Mercedes V220D",
    image: img3,
    video: vd3,
    tagline: "CORPORATE",
    description: "Business lounge seats, privacy partition, ambient lighting.",
  },
  {
    name: "Toyota Vellfire",
    image: img4,
    video: vd4,
    tagline: "CORPORATE",
    description: "Captain chairs with recline, twin sunroof, ottoman leg rest.",
  },
  {
    name: "BMW Series 2",
    image: img5,
    video: vd5,
    tagline: "SEDAN CLASS",
    description: "Driver-focused cockpit, leatherette interiors, digital cluster.",
  },
  {
    name: "Mercedes A Class",
    image: img6,
    video: vd6,
    tagline: "SEDAN CLASS",
    description: "Panoramic roof, Burmester sound, dual-screen dashboard.",
  },
  {
    name: "BMW X1",
    image: img7,
    video: vd7,
    tagline: "SUV",
    description: "Spacious cabin, adaptive suspension, Harman Kardon audio.",
  },
  {
    name: "Mercedes GLA",
    image: img8,
    video: vd8,
    tagline: "SUV",
    description: "Dynamic drive mode, MBUX infotainment, plush Artico seats.",
  },
];

const FleetShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const visibleCars = 3;
  const totalCars = cars.length;
  let centerCar = cars[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCars);
    }, 7000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (index) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex + 1) % totalCars) return "right";
    if (index === (currentIndex - 1 + totalCars) % totalCars) return "left";
    return "hidden";
  };

  return (
    <div className="fleet-carousel">
      <div className="fleet-text">OUR Fleet</div>
      {/* Top Text Section */}
      <div className="carousel-info-text">
        <h2 className="car-tagline">{centerCar.name}</h2>
        <h4 className="car-name">{centerCar.tagline}</h4>
        <p className="car-description">{centerCar.description}</p>
      </div>

      {/* Carousel */}
      <div className="fleet-carousel-wrapper">
        {cars.map((car, index) => {
          const isCenter = index === currentIndex;
          const slideClass = getSlideClass(index);

          return (
            <div
              key={index}
              className={`car-slide ${slideClass}`}
              onMouseEnter={() => isCenter && setHovered(true)}
              onMouseLeave={() => isCenter && setHovered(false)}
            >
              {isCenter && hovered ? (
                <video
                  src={car.video}
                  autoPlay
                  muted
                  loop
                  className="car-image"
                />
              ) : (
                <img src={car.image} alt={car.name} className="car-image" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FleetShowcase;
