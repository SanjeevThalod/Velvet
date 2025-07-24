import React from 'react'
import "../Styles/AboutUs.css"
import im1 from "../assets/AboutUs/im1.png";
import im3 from "../assets/AboutUs/im3.png";
import im4 from "../assets/AboutUs/im4.png"
import { GoDotFill } from "react-icons/go";

export default function AboutUs() {
  return (
    <div className='aboutus-container'>
      <div className="sec-1">
        <div className="sec-1-texts">
          <div className='sec-1-left'>
            <p className='bold-text'>Beyond</p>
            <p className='left-p'>Experience better with VELVET</p>
          </div>
          <div className='sec-1-right'>
            <p className='right-p'>Velvet bridges the gap in luxury airport transportation</p>
            <p className='right-p'> with a seamless digital experience</p>
            <p className='right-p'> and an exclusive fleet of BMWs, Mercedes & more.</p>
            <p className="bold-text">The Ride</p>
          </div>
        </div>

        {/* ⬇️ Keep this block here – just below the text */}
        <div className="sec-1-img">
          <img src={im1} alt="Rolls-Royce" />
        </div>
      </div>

      <div className="sec-2">
        <div className='sec-2-left'>
          <img src={im3} alt="phone" />
        </div>
        <div className="sec-2-right">
          <div className="logo">
            <h1 className='gradient-text'>VELVET</h1>
            <span>EXPERIENCE</span>
          </div>
          <p>Get exclusive access to special discounts with our mobile app. Download now and experience luxury on the go. Get exclusive access to special discounts with our mobile app. Download now and experience luxury on the go.</p>
        </div>
      </div>

      <div className="sec-3">
        <div className='velvet-name'>Velvet Experience <GoDotFill/> Velvet Experience <GoDotFill/> Velvet Experience</div>
        <div className='bentley-container'>

          <img src={im4} alt="bentley" className='bentley'/>
        </div>
      </div>

      <div className="sec-4">
        <div className="logo">
            <h1 className='gradient-text' style={{"fontSize":"3rem"}}>VELVET</h1>
            <span style={{"fontSize":"1.2rem"}}>EXPERIENCE</span>
          </div>
          <div className='f-list'>
            <p>Blogs</p>
            <p>Contact</p>
            <p>Terms</p>
            <p>Help and Support</p>
            <p>Privacy Policy</p>
          </div>
      </div>
    </div>

  )
}
