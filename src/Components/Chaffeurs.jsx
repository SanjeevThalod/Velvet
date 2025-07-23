import React from "react";
import "../Styles/chauffeurs.css";
import image from "../assets/Chaffeurs/im.png";
import video from "../assets/Chaffeurs/video.mp4";
import { FaCheckCircle, FaMagic  } from "react-icons/fa";
import {RiShirtLine} from "react-icons/ri"

export default function Chauffeurs() {
  return (
    <div className="chauffeurs">
      <video
        className="chauffeurs-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="chauffeurs-overlay">
        <div className="chauffeurs-title">Our Chauffeurs</div>

        <div className="chauffeurs-cards">
          <div className="chauffeur-card left-card">
            <RiShirtLine className="chauffeur-icon" />
            <h3>Professional Host</h3>
            <p>Tailored suits and gloves — always polished, always professional.</p>
          </div>

          <div className="chauffeur-card mid-card">
            <FaCheckCircle className="chauffeur-icon" />
            <h3>Trained & Vetted</h3>
            <p>Screened, certified, and trained in luxury hospitality.</p>
          </div>

          <div className="chauffeur-card right-card">
            <FaMagic  className="chauffeur-icon" />
            <h3>VELVET Concierge</h3>
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
