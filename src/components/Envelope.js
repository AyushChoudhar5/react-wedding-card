import React, { useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";

function Envelope({ onOpen }) {
  const [confetti, setConfetti] = useState([]);
  const [hasOpened, setHasOpened] = useState(false);

  // Generate random particles for floating background elements
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'star' : 'petal',
    left: `${Math.random() * 100}%`,
    bottom: `-${20 + Math.random() * 40}px`,
    size: `${0.4 + Math.random() * 0.9}em`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 6}s`,
  }));

  const handleOpenClick = () => {
    if (hasOpened) return;
    setHasOpened(true);

    // Burst a shower of colorful celebratory confetti
    const colors = ['#ff1744', '#ff9100', '#ffea00', '#00e676', '#2979ff', '#d500f9', '#00e5ff', '#ff3d00'];
    const shapes = ['circle', 'square', 'strip'];
    const newConfetti = Array.from({ length: 75 }, (_, i) => {
      // Shooting angle: mostly upward (from 35 degrees to 145 degrees)
      const angle = (Math.random() * 110 + 35) * (Math.PI / 180);
      // Exploding velocity
      const velocity = 10 + Math.random() * 14;
      return {
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        left: '50%',
        top: '55%',
        x: Math.cos(angle) * velocity * 18, // Horizontal translation distance
        y: -Math.sin(angle) * velocity * 18, // Vertical translation distance
        rotate: Math.random() * 720 - 360, // Spin rotation
        size: 8 + Math.random() * 10,
        delay: Math.random() * 0.15, // Staggered explosion
      };
    });
    setConfetti(newConfetti);

    // Call the parent open handler
    onOpen();
  };

  return (
    <div className="envelope-container" onClick={handleOpenClick}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Great+Vibes&family=Montserrat:wght@300;400;700&display=swap');

        /* ===== ENVELOPE WRAPPER ===== */
        .envelope-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: radial-gradient(circle at center, #fef9f7 0%, #f7eae5 45%, #edd2cb 80%, #dfbfb7 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          cursor: pointer;
          overflow: hidden;
          box-shadow: inset 0 0 120px rgba(110, 70, 65, 0.2);
        }

        .envelope-wrapper.opening {
          animation: fadeOutEnvelope 2.5s ease-in-out forwards;
        }

        @keyframes fadeOutEnvelope {
          0% { opacity: 1; transform: scale(1); filter: blur(0px); }
          68% { opacity: 1; transform: scale(1); filter: blur(0px); }
          84% { opacity: 1; filter: blur(2px); }
          100% { opacity: 0; transform: scale(1.08); filter: blur(8px); pointer-events: none; }
        }

        /* ===== CONTAINER (3D SETUP) ===== */
        .envelope-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          perspective: 1200px;
          user-select: none;
          position: relative;
          width: 100%;
          height: 100%;
          justify-content: center;
        }

        /* ===== ENVELOPE ===== */
        .envelope {
          position: relative;
          width: 290px;
          height: 200px;
          transform-style: preserve-3d;
          transition: transform 0.15s cubic-bezier(0.25, 0.61, 0.355, 1);
          filter: drop-shadow(0 25px 45px rgba(100, 65, 60, 0.32));
        }

        /* Common SVG properties */
        .envelope__svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Back pocket with luxury gold lattice inner lining */
        .envelope__back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #c5867b url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 0l10 10-10 10L0 10z" fill="%23d4af37" fill-opacity="0.12"/></svg>') repeat;
          border-radius: 4px 4px 10px 10px;
          box-shadow: inset 0 0 25px rgba(0,0,0,0.18);
          z-index: 1;
        }

        /* Front body overlapping cover flaps */
        .envelope__front {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          pointer-events: none;
        }

        /* Top flap with 3D rotation */
        .envelope__top-flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 125px;
          z-index: 4;
          transform-origin: top center;
          transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), z-index 0.1s 0.25s;
        }

        .opening .envelope__top-flap {
          transform: rotateX(180deg);
          z-index: 1;
        }

        /* Inner lining on top flap underside when flipped open */
        .envelope__top-flap::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10 0l10 10-10 10L0 10z" fill="%23d4af37" fill-opacity="0.08"/></svg>') repeat;
          pointer-events: none;
          z-index: 4;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .opening .envelope__top-flap::after {
          opacity: 1;
        }

        /* ===== LUXURY LETTER CARD ===== */
        .envelope__letter {
          position: absolute;
          bottom: 5px;
          left: 15px;
          width: 260px;
          height: 185px;
          background: #ffffff;
          border-radius: 6px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
          z-index: 2;
          transition: transform 0.85s 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.15);
          transform-origin: bottom center;
        }

        .opening .envelope__letter {
          transform: translateY(-125px) scale(1.06);
        }

        .envelope__letter-border {
          margin: 6px;
          height: calc(100% - 32px);
          border: 1px solid #d4af37;
          padding: 10px 8px;
          outline: 2px solid #d4af37;
          outline-offset: -5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #faf8f5;
          box-shadow: inset 0 0 30px rgba(212, 175, 55, 0.09);
          position: relative;
        }

        /* Letter Inner Corner Decoration Lines */
        .envelope__letter-border::before {
          content: '';
          position: absolute;
          top: 5px; left: 5px; right: 5px; bottom: 5px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          pointer-events: none;
        }

        .card-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: #d4af37;
          border-style: solid;
          pointer-events: none;
        }
        .corner-tl { top: 6px; left: 6px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 6px; right: 6px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 6px; left: 6px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 6px; right: 6px; border-width: 0 2px 2px 0; }

        .envelope__letter-heart {
          margin-bottom: 2px;
          filter: drop-shadow(0 2px 5px rgba(214, 69, 69, 0.3));
        }

        .pulse-slow {
          animation: heartbeat 1.5s infinite ease-in-out;
        }

        .envelope__letter-title {
          font-family: 'Cinzel', serif;
          font-size: 0.72em;
          font-weight: 700;
          letter-spacing: 2px;
          color: #c5a059;
          text-transform: uppercase;
        }

        .envelope__letter-names {
          font-family: 'Great Vibes', cursive;
          font-size: 2.2em;
          color: #611818;
          margin: -2px 0 0px 0;
          text-shadow: 1px 1px 0px rgba(255,255,255,0.8);
        }

        .envelope__letter-divider {
          width: 60px;
          height: 1px;
          background: radial-gradient(circle, #d4af37 0%, transparent 100%);
          margin: 4px 0 6px 0;
        }

        .envelope__letter-date {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75em;
          font-weight: 500;
          letter-spacing: 1px;
          color: #444;
          text-transform: uppercase;
        }

        .envelope__letter-time {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7em;
          font-weight: 400;
          color: #777;
          margin-top: 1px;
        }

        /* ===== BURGUNDY WAX SEAL (SPLITTING CONCEPT) ===== */
        .envelope__wax-seal {
          position: absolute;
          top: 115px;
          left: 145px;
          transform: translate(-50%, -50%);
          z-index: 5;
          width: 44px;
          height: 44px;
          pointer-events: none;
        }

        /* Left Half of Wax Seal */
        .wax-seal__stamp-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 35% 35%, #ad1c24 0%, #730a0f 70%, #4a0306 100%);
          border-radius: 51% 49% 52% 48% / 48% 53% 47% 52%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #5a0508;
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        /* Right Half of Wax Seal */
        .wax-seal__stamp-right {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 35% 35%, #ad1c24 0%, #730a0f 70%, #4a0306 100%);
          border-radius: 51% 49% 52% 48% / 48% 53% 47% 52%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #5a0508;
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .wax-seal__stamp-left::before,
        .wax-seal__stamp-right::before {
          content: '';
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 0, 0, 0.15);
        }

        .wax-seal__heart {
          color: #e09f3e;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6));
          z-index: 1;
        }

        /* Action: Crack & Split open */
        .opening .wax-seal__stamp-left {
          transform: translateX(-35px) rotate(-35deg);
          opacity: 0;
        }

        .opening .wax-seal__stamp-right {
          transform: translateX(35px) rotate(35deg);
          opacity: 0;
        }

        /* ===== INSTRUCTION TEXT ===== */
        .envelope__instruction {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .instruction-text {
          font-family: 'Cinzel', serif;
          font-size: 0.85em;
          font-weight: 500;
          color: #8c6c58;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .instruction-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95em;
          font-weight: 700;
          color: #850c12;
          letter-spacing: 3px;
          text-transform: uppercase;
          animation: glowText 2s infinite ease-in-out;
        }

        @keyframes glowText {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }

        /* ===== LUXURY BACKGROUND PARTICLES ===== */
        .envelope__particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }

        .floating-particle {
          position: absolute;
          animation: floatRise linear infinite;
          opacity: 0;
        }

        .floating-particle.heart {
          color: rgba(214, 69, 69, 0.18);
        }

        .floating-particle.star {
          color: rgba(212, 175, 55, 0.22);
        }

        .floating-particle.petal {
          opacity: 0;
          filter: blur(0.5px);
        }

        @keyframes floatRise {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg) translateX(40px);
            opacity: 0;
          }
        }

        /* ===== CONFETTI PARTY SHOWERS ===== */
        .confetti-piece {
          position: absolute;
          pointer-events: none;
          z-index: 100000;
          animation: confettiExplode 2s cubic-bezier(0.1, 0.8, 0.25, 1) forwards;
        }

        @keyframes confettiExplode {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 1;
          }
          35% {
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--x), var(--y), 0) rotate(var(--rot)) translateY(180px);
            opacity: 0;
          }
        }

        .confetti-piece.circle {
          border-radius: 50%;
        }
        .confetti-piece.square {
          border-radius: 0;
        }
        .confetti-piece.strip {
          border-radius: 1px;
        }
      `}} />

      {/* Confetti party showers blast elements */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className={`confetti-piece ${c.shape}`}
          style={{
            left: c.left,
            top: c.top,
            backgroundColor: c.color,
            width: `${c.size}px`,
            height: c.shape === 'strip' ? `${c.size * 2.2}px` : `${c.size}px`,
            animationDelay: `${c.delay}s`,
            '--x': `${c.x}px`,
            '--y': `${c.y}px`,
            '--rot': `${c.rotate}deg`,
          }}
        />
      ))}

      {/* Main Envelope Element */}
      <div className="envelope">
        {/* Envelope Back / Inner Pocket Lining */}
        <div className="envelope__back"></div>

        {/* The Wedding Letter Card with Filigree Corners */}
        <div className="envelope__letter">
          <div className="envelope__letter-border">
            <span className="card-corner corner-tl"></span>
            <span className="card-corner corner-tr"></span>
            <span className="card-corner corner-bl"></span>
            <span className="card-corner corner-br"></span>
            <div className="envelope__letter-heart">
              <GoHeartFill size="1.8em" color="rgb(214, 69, 69)" className="pulse-slow" />
            </div>
            <div className="envelope__letter-title">Wedding Invitation</div>
            <div className="envelope__letter-names">Yogesh &amp; Dipali</div>
            <div className="envelope__letter-divider"></div>
            <div className="envelope__letter-date">July 7, 2026</div>
            <div className="envelope__letter-time">Alephata</div>
          </div>
        </div>

        {/* Envelope Top Flap */}
        <div className="envelope__top-flap">
          <svg viewBox="0 0 280 120" className="envelope__svg">
            <polygon points="0,0 140,110 280,0" fill="#d29184" stroke="#d4af37" strokeWidth="2" />
          </svg>
        </div>

        {/* Envelope Front Body Flaps */}
        <div className="envelope__front">
          <svg viewBox="0 0 280 190" className="envelope__svg">
            {/* Left Flap */}
            <polygon points="0,0 140,95 0,190" fill="#daa194" stroke="#e6b5ab" strokeWidth="1" />
            {/* Right Flap */}
            <polygon points="280,0 140,95 280,190" fill="#daa194" stroke="#e6b5ab" strokeWidth="1" />
            {/* Bottom Flap */}
            <polygon points="0,190 140,90 280,190" fill="#e2aba0" stroke="#d4af37" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Wax Seal Concept (Splits apart) */}
        <div className="envelope__wax-seal">
          <div className="wax-seal__stamp-left">
            <GoHeartFill className="wax-seal__heart" size="1.2em" />
          </div>
          <div className="wax-seal__stamp-right">
            <GoHeartFill className="wax-seal__heart" size="1.2em" />
          </div>
        </div>

      </div>

      <div className="envelope__instruction">
        <span className="instruction-text">You are cordially invited</span>
        <span className="instruction-sub">Tap to Open Envelope</span>
      </div>

      {/* Luxury Background Particles */}
      <div className="envelope__particles">
        {particles.map((p) => {
          const style = {
            left: p.left,
            bottom: p.bottom,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          };
          if (p.type === 'heart') {
            return <GoHeartFill key={p.id} className="floating-particle heart" style={style} />;
          } else if (p.type === 'star') {
            return <BsStarFill key={p.id} className="floating-particle star" style={style} />;
          } else {
            return <span key={p.id} className="floating-particle petal" style={style}>🌸</span>;
          }
        })}
      </div>
    </div>
  );
}

export default Envelope;
