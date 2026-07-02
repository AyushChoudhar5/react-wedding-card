import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GiRingBox } from 'react-icons/gi';
import { FaSpa } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { MdOutlineLocationOn, MdAccessTime } from 'react-icons/md';
import engagementImg from '../images/engagement.jpeg';
import haldiImg from '../images/haldi.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Fade in Title
    gsap.fromTo(el.querySelector('.events__title-theme'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.events__title-theme'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered Slide up and zoom in for event cards
    gsap.fromTo(el.querySelectorAll('.events__card'),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => {
          el.querySelectorAll('.events__card').forEach(card => card.classList.add('breathe'));
        },
        scrollTrigger: {
          trigger: el.querySelector('.events__timeline'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div className='container events__container-theme' ref={containerRef}>
      <div className='title events__title-theme'>{t('eventsTitle')}</div>
      
      <div className='events__timeline'>
        <div className='events__card'>
          <div className='events__image-wrapper'>
            <img className='events__card-image' src={engagementImg} alt="Engagement Ceremony" />
            <div className='events__badge'>
              <GiRingBox size="1.2em" />
              <span>{t('engagementBadge')}</span>
            </div>
          </div>
          <div className='events__details'>
            <h3 className='events__name'>{t('engagementName')}</h3>
            <div className='events__item'>
              <GoCalendar className='events__item-icon' />
              <span>{t('engagementDate')}</span>
            </div>
            <div className='events__item'>
              <MdAccessTime className='events__item-icon' />
              <span>{t('engagementTime')}</span>
            </div>
            <div className='events__item'>
              <MdOutlineLocationOn className='events__item-icon' />
              <span>{t('engagementLoc')}</span>
            </div>
          </div>
        </div>

        <div className='events__card'>
          <div className='events__image-wrapper'>
            <img className='events__card-image' src={haldiImg} alt="Haldi Ceremony" />
            <div className='events__badge haldi'>
              <FaSpa size="1.2em" />
              <span>{t('haldiBadge')}</span>
            </div>
          </div>
          <div className='events__details'>
            <h3 className='events__name'>{t('haldiName')}</h3>
            <div className='events__item'>
              <GoCalendar className='events__item-icon' />
              <span>{t('haldiDate')}</span>
            </div>
            <div className='events__item'>
              <MdAccessTime className='events__item-icon' />
              <span>{t('haldiTime')}</span>
            </div>
            <div className='events__item'>
              <MdOutlineLocationOn className='events__item-icon' />
              <span>{t('haldiLoc')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
