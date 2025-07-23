import React from 'react';
import '../Styles/classApart.css';
import { FaCrown, FaClock, FaShieldAlt } from 'react-icons/fa';

function ClassApart() {
  const features = [
    {
      icon: <FaCrown />,
      title: "Luxury Customization",
      description: "Personalized experiences for HNIs and VIPs"
    },
    {
      icon: <FaClock />,
      title: "24/7 Availability",
      description: "Personalized experiences for HNIs and VIPs"
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Focus",
      description: "SOS tech, real-time tracking, background-verified drivers"
    }
  ];

  return (
    <section className="class-apart">
      <h2>Your next <span style={{"fontWeight":"bold"}}>CAB</span> ride, wrapped in <span className='gradient-text'>LUXURY</span>
      </h2>
      <div className="underline" />
      <div className="features-container">
        {features.map((feature, index) => (
          <div className={`feature-card corner`} key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClassApart;
