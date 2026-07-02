import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

// Import new screenshot assets
import img1 from '../images/Screenshot 2026-07-02 144437.png';
import img2 from '../images/Screenshot 2026-07-02 144446.png';
import img3 from '../images/Screenshot 2026-07-02 144452.png';
import img4 from '../images/Screenshot 2026-07-02 144512.png';

import '../css/Gallery.css';

gsap.registerPlugin(ScrollTrigger);

function ImgGallery() {
  const { t } = useLanguage();
  const triggerRef = useRef(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    // Premium multi-stage confetti spawner simulating slow paper flutter (10s duration)
    const fireConfetti = (side) => {
      const container = el;
      if (!container) return;

      const count = 180; // "very much" - increased quantity
      const colors = [
        '#D4AF37', // Metallic Gold
        '#C5A059', // Antique Gold
        '#AA7C11', // Dark Gold
        '#8C5A3F', // Warm Bronze Brown
        '#5C3A21', // Deep Chocolate Brown
        '#A0522D', // Sienna
        '#B8860B', // Dark Goldenrod
        '#8B4513', // Saddle Brown
        '#E6C565', // Bright Gold
        '#F3E5AB'  // Champagne Gold
      ];

      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'gallery__confetti-particle';
        
        // Pick a random golden/brown color
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.backgroundColor = color;

        // Random sizes for depth and organic feel
        const size = gsap.utils.random(6, 13);
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        if (Math.random() > 0.5) {
          p.style.borderRadius = '50%'; // mix circular and square shapes
        }

        p.style.position = 'absolute';
        p.style.bottom = '10px';
        if (side === 'left') {
          p.style.left = '10px';
        } else {
          p.style.right = '10px';
        }
        p.style.zIndex = 120;

        container.appendChild(p);

        // Projectile angles (shooting high up towards center screen)
        const angle = side === 'left' 
          ? gsap.utils.random(35, 80)   // project high up-right
          : gsap.utils.random(100, 145); // project high up-left
        const rad = (angle * Math.PI) / 180;
        const velocity = gsap.utils.random(25, 55);

        const initialX = Math.cos(rad) * velocity * 12;
        const initialY = -Math.sin(rad) * velocity * 12;

        // Phase 1: High-velocity upward burst
        gsap.to(p, {
          x: initialX,
          y: initialY,
          rotation: gsap.utils.random(180, 540),
          duration: gsap.utils.random(1.2, 1.8),
          ease: 'power2.out',
          onComplete: () => {
            // Phase 2: Slow drifting paper flutter (lasts 8 to 11 seconds)
            const driftDuration = gsap.utils.random(8, 11);
            
            // Slow fall downwards
            gsap.to(p, {
              y: '+=90vh',
              opacity: 0,
              duration: driftDuration,
              ease: 'power1.inOut',
              onComplete: () => {
                p.remove(); // Clean up DOM element
              }
            });

            // Sinusoidal wind-sway horizontal animation (yoyo)
            const swayDistance = gsap.utils.random(60, 150);
            gsap.to(p, {
              x: `+=${side === 'left' ? swayDistance : -swayDistance}`,
              duration: gsap.utils.random(1.8, 2.5),
              repeat: Math.ceil(driftDuration / 2),
              yoyo: true,
              ease: 'sine.inOut'
            });

            // Slow continuous roll/spin
            gsap.to(p, {
              rotation: `+=${gsap.utils.random(360, 720)}`,
              duration: driftDuration,
              ease: 'none'
            });
          }
        });
      }
    };

    let lastFired = 0;
    const triggerConfettiPoppers = () => {
      const now = Date.now();
      if (now - lastFired < 400) return; // Cooldown of 400ms to allow consecutive reveals to trigger
      lastFired = now;
      fireConfetti('left');
      fireConfetti('right');
    };

    const cards = el.querySelectorAll('.gallery__scroll-card:not(:first-child)');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });

    // Call the spawner for the first photo (Card 1) immediately as scroll hits the gallery
    tl.call(triggerConfettiPoppers, null, 0.05);

    cards.forEach((card, index) => {
      const rotAngle = index % 2 === 0 ? 2.5 : -2.5;

      // Call the spawner at the beginning of each card's scroll reveal
      tl.call(triggerConfettiPoppers, null, index * 1.5 + 0.4);

      tl.fromTo(card,
        { 
          y: '120%', 
          opacity: 0, 
          rotate: index % 2 === 0 ? 10 : -10,
          scale: 0.85 
        },
        { 
          y: '0%', 
          opacity: 1, 
          rotate: rotAngle,
          scale: 1,
          duration: 1.5,
          ease: 'none'
        },
        index * 1.5
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, []);

  const images = [img1, img2, img3, img4];

  return (
    <div className="gallery__scroll-pin-wrapper" ref={triggerRef}>
      <div className="gallery__scroll-container">
        <h2 className="title gallery__scroll-title">{t('galleryTitle')}</h2>
        
        <div className="gallery__scroll-deck">
          {images.map((imgSrc, index) => (
            <div 
              key={index} 
              className="gallery__scroll-card"
              style={{ zIndex: index + 1 }}
            >
              <div className="gallery__polaroid-inner">
                <div className="gallery__polaroid-img-box">
                  <img src={imgSrc} className="gallery__polaroid-img" alt="Gallery memory" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ImgGallery);