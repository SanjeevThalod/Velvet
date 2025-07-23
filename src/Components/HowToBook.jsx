import React, { useEffect, useState } from 'react';
import '../Styles/howToBook.css';
import on1 from "../assets/HowToBook/on1.png";
import on2 from "../assets/HowToBook/on2.png";
import of1 from "../assets/HowToBook/of1.png";

function HowToBook() {

  const [mode, setMode] = useState('online');

  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMode(prev => (prev === 'online' ? 'offline' : 'online'));
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="how-to-book">
      <h2>How to Book</h2>
      <div className="gold-underline" />

      <div className="toggle-buttons">
        <button
          className={mode === 'online' ? 'active' : ''}
          onClick={() => setMode('online')}
        >
          Online
        </button>
        <button
          className={mode === 'offline' ? 'active' : ''}
          onClick={() => setMode('offline')}
        >
          Offline
        </button>
      </div>

      {mode === 'online' && (
        <div className="booking-content">
          <div className="step step-left">
            <span>
              <h3><span>01.</span> Choose Pickup & Destination</h3>
              <p>Select your airport and drop-off.</p>
            </span>
            <img src={on1} alt="Online booking step" />
          </div>

          <div className="step step-right">
            <img src={on2} alt="Pick Up your Car" />
            <span>
              <h3><span>02.</span> Choose from our curated luxury fleet.</h3>
              <p>Pick Your Car</p>
            </span>

          </div>
          <p className="footer-note">Chauffeur meets you. You ride in comfort!</p>
        </div>
      )}

      {mode === 'offline' && (
        <div className="booking-offline">
          <div className='booking-cont'>
            <div>Prefer Booking in Person? Your Concierge Awaits.</div>
            <img src={of1} alt="" />
            <h2>Book from our Kiosks</h2>
            <p>Velvet kiosks are placed right where your journey begins — at select airport terminals.</p>
            <p>
              Walk up and let our concierge handle the rest.</p>
            <p>Book your chauffeured ride on the spot. No apps. No waiting. Just signature Velvet service.</p>
          </div>
        </div>
      )}

    </section>
  );
}

export default HowToBook;
