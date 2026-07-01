import React, { useState } from 'react'
import './App.css';

import './css/Cover.css'
import './css/Invitation.css'
import './css/Calendar.css'
import './css/Gallery.css'
import './css/Location.css'
import './css/Footer.css'
import './css/SurveyModal.css'
import './css/Submit.css'
import './css/LoveLetters.css'
import './css/Events.css'
import './css/Family.css'

import Cover from './pages/Cover.js'
import Invitation from './pages/Invitation.js';
import Family from './pages/Family.js';
import Calendar from './pages/Calendar.js';
import Location from './pages/Location.js';
import Events from './pages/Events.js';
import LoveLetters from './pages/LoveLetters.js';
// import ImgGallery from './pages/ImgGallery.js';
import Footer from './components/Footer.js';
import SurveyModal from './components/SurveyModal.js';
import Envelope from './components/Envelope.js';

// Stable global particles to avoid jumps on component re-render
const globalParticles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 10 + Math.random() * 12, // 10px to 22px
  delay: `${Math.random() * 12}s`,
  duration: `${14 + Math.random() * 10}s`, // slow, elegant fall (14s to 24s)
  type: i % 2 === 0 ? 'petal' : 'sparkle',
  sway: Math.random() * 50 - 25,
}));

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false); // Keep modal closed initially
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);
  
    // Function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // eslint-disable-next-line no-unused-vars
    const openModal = () => {
      setIsModalOpen(true);
    }

    const handleEnvelopeOpen = () => {
      if (isEnvelopeOpen) return;
      setIsEnvelopeOpen(true);
      // After opening animation completes, remove envelope from DOM
      setTimeout(() => {
        setShowEnvelope(false);
      }, 2500);
    };

  return (
    <div className="App">
      {showEnvelope && (
        <div className={`envelope-wrapper ${isEnvelopeOpen ? 'opening' : ''}`}>
          <Envelope onOpen={handleEnvelopeOpen} />
        </div>
      )}
      
      {/* Global falling rose petals and gold dust celebration particles */}
      {!showEnvelope && (
        <div className="global-particles">
          {globalParticles.map((p) => (
            <div
              key={p.id}
              className={`global-particle ${p.type}`}
              style={{
                left: p.left,
                width: p.type === 'petal' ? `${p.size}px` : '4px',
                height: p.type === 'petal' ? `${p.size * 0.9}px` : '4px',
                animationDelay: p.delay,
                animationDuration: p.duration,
                '--sway-x': `${p.sway}px`,
              }}
            >
              {p.type === 'petal' ? '🌸' : ''}
            </div>
          ))}
        </div>
      )}

      {isModalOpen && <SurveyModal closeModal={closeModal} />}
      <Cover startAnimation={isEnvelopeOpen}/>
      <Invitation />
      <Family />
      <Calendar />
      {/* <ImgGallery /> */}
      <Location />
      <Events />
      {/* <Submit openModal={openModal}/> */}
      <LoveLetters />
      <Footer />
    </div>
  );
}

export default App;
