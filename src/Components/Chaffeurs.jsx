import React from "react";
import "../Styles/chauffeurs.css";
import image from "../assets/Chaffeurs/im.png";
import { FaShirt, FaToolbox } from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa"

export default function Chauffeurs() {
  return (
    <div className="chauffeurs">
      <img src={image} alt="Chauffeur background" className="chauffeurs-bg" />
      <div className="chauffeurs-overlay">
        <div className="chauffeurs-title">Our Chauffeurs</div>

        <div className="chauffeurs-cards">
          <div className="chauffeur-card left-card">
            <FaShirt className="chauffeur-icon" />
            <h3>Elite Grooming & Attire</h3>
            <p>Tailored suits and gloves — always polished, always professional.</p>
          </div>

          <div className="chauffeur-card mid-card">
            <FaCheckCircle className="chauffeur-icon" />
            <h3>Trained & Vetted</h3>
            <p>Screened, certified, and trained in luxury hospitality.</p>
          </div>

          <div className="chauffeur-card right-card">
            <FaToolbox className="chauffeur-icon" />
            <h3>Discreet Concierge Service</h3>
            <p>More than drivers — they anticipate and enhance your journey.</p>
          </div>
        </div>

        <p className="chauffeurs-footer">
          Professionally Trained. Personally Committed.
        </p>
      </div>
    </div>
  );
}
