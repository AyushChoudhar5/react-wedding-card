import React, { useState, useEffect, useRef } from 'react';
import ContactModal from '../components/ContactModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Family() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Fade in section title
    gsap.fromTo(el.querySelector('.family__title'),
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.family__title'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered slide up for family cards
    gsap.fromTo(el.querySelectorAll('.family__card'),
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.family__cards-container'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Fade in contact button
    gsap.fromTo(el.querySelector('.family__btn-contact'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.family__btn-contact'),
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  function FamilyCard({ dad, mom, relation, child }) {
    return (
      <div className="family__card">
        <div className="family__parents">
          {dad} <span className="amp">&</span> {mom}
        </div>
        <div className="family__relation">{relation}</div>
        <div className="family__child">{child}</div>
      </div>
    );
  }

  return (
    <div className="container family__container-theme" ref={containerRef}>
      <h2 className="family__title">With Blessings From</h2>
      
      <div className="family__cards-container">
        <FamilyCard 
          dad="Mr. Sakharam Ugle" 
          mom="Mrs. Suman Ugle" 
          relation="Son" 
          child="Groom: Yogesh S Ugle" 
        />
        <FamilyCard 
          dad="Mr. Gabaji Sable" 
          mom="Mrs. Sughandabai Sable" 
          relation="Daughter" 
          child="Bride: Dipali G Sable" 
        />
      </div>

      <button className="family__btn-contact" onClick={openModal}>
        Contact Us
      </button>

      {isModalOpen && (
        <ContactModal closeModal={closeModal} />
      )}
    </div>
  );
}

export default Family;
