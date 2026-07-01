import React, { useEffect, useRef } from 'react';
import flower from '../images/flower.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Invitation() {
  const containerRef = useRef(null);
  
  const paragraphLines = [
    "We have cherished our precious relationship until now.",
    "For the rest of our lives, we want to become a family,",
    "look in the same direction,",
    "and walk together.",
    "We would be deeply grateful",
    "if you would join us to bless our new beginning."
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Fade in flower image
    gsap.fromTo(el.querySelector('.flower'), 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.flower'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade in title
    gsap.fromTo(el.querySelector('.invitation__title'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.invitation__title'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered word-by-word reveal for paragraph content
    gsap.fromTo(el.querySelectorAll('.invitation__word'),
      { opacity: 0, y: 10, filter: 'blur(3px)' },
      {
        opacity: 0.95,
        y: 0,
        filter: 'blur(0px)',
        stagger: 0.04,
        duration: 0.6,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el.querySelector('.invitation__content'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div className='bc-pink container' ref={containerRef}>
      <img src={flower} className='flower' alt='flower' />
      <div className='invitation__title'>You are Invited</div>
      <div className='invitation__content'>
        {paragraphLines.map((line, lineIdx) => (
          <div key={lineIdx}>
            {line.split(" ").map((word, wordIdx, arr) => (
              <span 
                key={wordIdx} 
                className="invitation__word"
                style={{ 
                  display: 'inline-block',
                  whiteSpace: 'pre'
                }}
              >
                {word}{wordIdx < arr.length - 1 ? ' ' : ''}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invitation;
