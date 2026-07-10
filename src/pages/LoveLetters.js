import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * LoveLetters — the "#RohPriya" moment.
 *
 * The whole moment now lives inside a single ornate card: a cream panel
 * with a hairline gold border and four bracket corners, like the frame
 * used for the countdown.
 * The hashtag tilts toward the cursor with a shimmering gold sweep,
 * a hand-drawn flourish divides it from the sentence below, and the
 * sentence sits inside elegant quote marks, writing itself in word by
 * ink-stroke word, closing with a small ornament.
 */
function LoveLetters() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Use GSAP ScrollTrigger to precisely detect viewport entry
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      onEnter: () => setIsVisible(true),
      onEnterBack: () => setIsVisible(true),
      once: true // Fires only once
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleTitleMove = (e) => {
    const rect = titleRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0 -> 1
    const py = (e.clientY - rect.top) / rect.height;    // 0 -> 1
    const rotateY = (px - 0.5) * 26;   // left/right tilt
    const rotateX = (0.5 - py) * 18;   // up/down tilt
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const sentence = t('loveLettersSentence');
  const words = sentence.split(" ");

  return (
    <div className={`ll-container${isVisible ? ' ll-visible' : ''}`} ref={sectionRef}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500;1,600&display=swap');

        .ll-container {
          position: relative;
          padding: 90px 20px 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(212,175,55,0.10) 0%, transparent 55%),
            radial-gradient(circle at 15% 90%, rgba(110,20,35,0.06) 0%, transparent 50%),
            linear-gradient(180deg, #FFFBF5 0%, #FBF0E6 100%);
        }

        /* ============================= CARD ============================= */
        .ll-card {
          position: relative;
          margin-top: 18px;
          padding: clamp(34px, 6vw, 54px) clamp(22px, 6vw, 50px);
          max-width: 560px;
          width: 100%;
          background: linear-gradient(175deg, #FFFDF9 0%, #FBF3E8 100%);
          border: 1.5px solid rgba(212,175,55,0.65);
          border-radius: 22px;
          box-shadow: 0 18px 40px rgba(110,20,35,0.12);
          z-index: 1;
          opacity: 0;
          transform: translateY(26px) scale(0.97);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ll-visible .ll-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* slow gold shimmer sweeping across the card, like candlelight on paper */
        .ll-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: linear-gradient(115deg, transparent 35%, rgba(255,245,220,0.22) 50%, transparent 65%);
          background-size: 250% 250%;
          background-position: -120% -120%;
          pointer-events: none;
        }

        .ll-visible .ll-card::after {
          animation: llCardShimmer 6s ease-in-out infinite;
        }

        @keyframes llCardShimmer {
          0%   { background-position: -120% -120%; }
          50%  { background-position: 120% 120%; }
          100% { background-position: -120% -120%; }
        }

        .ll-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          pointer-events: none;
        }

        .ll-corner::before,
        .ll-corner::after {
          content: '';
          position: absolute;
          background: #D4AF37;
        }

        .ll-corner::before { width: 100%; height: 1.5px; }
        .ll-corner::after  { width: 1.5px; height: 100%; }

        .ll-corner-tl { top: 12px; left: 12px; }
        .ll-corner-tl::before, .ll-corner-tl::after { top: 0; left: 0; }

        .ll-corner-tr { top: 12px; right: 12px; }
        .ll-corner-tr::before { top: 0; right: 0; }
        .ll-corner-tr::after  { top: 0; right: 0; }

        .ll-corner-bl { bottom: 12px; left: 12px; }
        .ll-corner-bl::before { bottom: 0; left: 0; }
        .ll-corner-bl::after  { bottom: 0; left: 0; }

        .ll-corner-br { bottom: 12px; right: 12px; }
        .ll-corner-br::before { bottom: 0; right: 0; }
        .ll-corner-br::after  { bottom: 0; right: 0; }

        /* ============================= TITLE — TILTING GOLD MONOGRAM ============================= */
        .ll-title-wrap {
          perspective: 900px;
          z-index: 1;
          margin-bottom: 4px;
        }

        .letters__title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(2.6em, 8vw, 4.4em);
          line-height: 1;
          padding: 0.1em 0.2em;
          background: linear-gradient(100deg, #8C5A3F 10%, #E9C57A 35%, #D4AF37 50%, #E9C57A 65%, #8C5A3F 90%);
          background-size: 260% 100%;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          transform-style: preserve-3d;
          cursor: default;
          text-shadow: 0 0 26px rgba(212,175,55,0.15);
          transition: transform 0.35s ease-out, background-position 0.35s ease-out;
        }

        .ll-visible .letters__title {
          transform: rotateX(var(--ll-tilt-x, 0deg)) rotateY(var(--ll-tilt-y, 0deg));
          background-position: var(--ll-shimmer, 0%) 50%;
          animation: llShimmerLoop 6s ease-in-out infinite;
        }

        @keyframes llShimmerLoop {
          0%, 100% { text-shadow: 0 0 26px rgba(212,175,55,0.15); }
          50%      { text-shadow: 0 0 40px rgba(212,175,55,0.32); }
        }

        /* Gold underline flourish that draws itself in once revealed */
        .ll-flourish {
          width: min(200px, 55vw);
          height: 20px;
          margin: 2px 0 22px;
          opacity: 0;
          transition: opacity 0.6s ease 0.35s;
          z-index: 1;
        }

        .ll-visible .ll-flourish { opacity: 1; }

        .ll-flourish path {
          fill: none;
          stroke: #D4AF37;
          stroke-width: 1.4;
          stroke-linecap: round;
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
        }

        .ll-visible .ll-flourish path {
          animation: llDraw 1.1s 0.4s ease forwards;
        }

        @keyframes llDraw {
          to { stroke-dashoffset: 0; }
        }

        .ll-flourish .ll-flourish-dot {
          fill: #D4AF37;
          opacity: 0;
        }

        .ll-visible .ll-flourish .ll-flourish-dot {
          animation: llDotPop 0.5s 1.4s ease forwards;
        }

        @keyframes llDotPop {
          0%   { opacity: 0; transform: scale(0); }
          70%  { opacity: 1; transform: scale(1.4); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* ============================= SUBTITLE — INK-WRITTEN SENTENCE, QUOTED ============================= */
        .letters__subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(1em, 2.4vw, 1.35em);
          color: #6B5049;
          max-width: 440px;
          line-height: 1.6;
          z-index: 1;
          margin: 0 auto;
          position: relative;
        }

        .letters__subtitle .ll-quote {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          color: #C9A24B;
          opacity: 0;
        }

        .ll-visible .letters__subtitle .ll-quote {
          animation: llInkReveal 0.6s ease forwards;
        }

        .ll-visible .letters__subtitle .ll-quote.ll-quote-open { animation-delay: 0.75s; }
        .ll-visible .letters__subtitle .ll-quote.ll-quote-close { animation-delay: 2.1s; }

        .letters__word {
          opacity: 0;
          filter: blur(5px);
          transform: translateY(16px) rotate(-2deg);
          position: relative;
        }

        .ll-visible .letters__word {
          animation: llInkReveal 0.7s ease forwards;
        }

        @keyframes llInkReveal {
          0%   { opacity: 0; filter: blur(5px); transform: translateY(16px) rotate(-2deg); }
          60%  { opacity: 1; filter: blur(0px); }
          100% { opacity: 1; filter: blur(0px); transform: translateY(0) rotate(0deg); }
        }

        /* tiny sparkle popping above each word right as it lands */
        .letters__word::after {
          content: '✦';
          position: absolute;
          top: -0.9em;
          left: 50%;
          transform: translateX(-50%) scale(0);
          font-size: 0.5em;
          color: #D4AF37;
          opacity: 0;
        }

        .ll-visible .letters__word::after {
          animation: llSparkle 0.7s ease forwards;
          animation-delay: inherit;
        }

        @keyframes llSparkle {
          0%, 55%  { opacity: 0; transform: translateX(-50%) scale(0); }
          70%      { opacity: 1; transform: translateX(-50%) scale(1.3); }
          100%     { opacity: 0; transform: translateX(-50%) scale(0.6) translateY(-6px); }
        }

        /* ============================= CLOSING ORNAMENT ============================= */
        .ll-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
          opacity: 0;
          transition: opacity 0.7s ease 2.3s;
        }

        .ll-visible .ll-ornament { opacity: 1; }

        .ll-ornament-line {
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37);
        }

        .ll-ornament-line.right { background: linear-gradient(90deg, #D4AF37, transparent); }

        .ll-ornament-glyph {
          font-family: 'Cinzel', serif;
          font-size: 0.85em;
          color: #B23B3B;
        }

        @media (prefers-reduced-motion: reduce) {
          .ll-pendant-heart, .letters__title, .ll-ambient-heart, .letters__word, .letters__word::after,
          .ll-card, .ll-card::after, .ll-flourish path, .ll-flourish .ll-flourish-dot, .letters__subtitle .ll-quote, .ll-ornament {
            animation: none !important;
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
          }
        }
      `}} />
      <div className="ll-card">
        <span className="ll-corner ll-corner-tl"></span>
        <span className="ll-corner ll-corner-tr"></span>
        <span className="ll-corner ll-corner-bl"></span>
        <span className="ll-corner ll-corner-br"></span>

        <div
          className="ll-title-wrap"
          onMouseMove={handleTitleMove}
          onMouseLeave={resetTilt}
        >
          <div
            className="letters__title"
            ref={titleRef}
            style={{
              '--ll-tilt-x': `${tilt.x}deg`,
              '--ll-tilt-y': `${tilt.y}deg`,
              '--ll-shimmer': `${50 + tilt.y * 1.4}%`,
            }}
          >
            #RohPriya
          </div>
        </div>

        <svg className="ll-flourish" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10C36 -2 54 22 90 10" />
          <path d="M110 10C146 -2 164 22 198 10" />
          <circle className="ll-flourish-dot" cx="100" cy="10" r="2.4" />
        </svg>

        <p className="letters__subtitle">
          <span className="ll-quote ll-quote-open">&ldquo;</span>
          {words.map((word, idx) => (
            <span
              key={idx}
              className="letters__word"
              style={{
                display: 'inline-block',
                whiteSpace: 'pre',
                animationDelay: `${0.85 + idx * 0.09}s`,
              }}
            >
              {word}{idx < words.length - 1 ? ' ' : ''}
            </span>
          ))}
          <span className="ll-quote ll-quote-close">&rdquo;</span>
        </p>

        <div className="ll-ornament">
          <span className="ll-ornament-line"></span>
          <span className="ll-ornament-glyph">♥</span>
          <span className="ll-ornament-line right"></span>
        </div>
      </div>
    </div>
  );
}

export default LoveLetters;