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

    const cards = el.querySelectorAll('.gallery__scroll-card:not(:first-child)');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });

    cards.forEach((card, index) => {
      const rotAngle = index % 2 === 0 ? 2.5 : -2.5;

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