import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GoHeartFill } from "react-icons/go";
import { GiCoffeeCup, GiRingBox } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";

function LoveStory() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stories = [
    {
      title: t('meetTitle'),
      date: t('meetDate'),
      desc: t('meetDesc'),
      icon: <GiCoffeeCup size="1.2em" />
    },
    {
      title: t('dateTitle'),
      date: t('dateDate'),
      desc: t('dateDesc'),
      icon: <BiCameraMovie size="1.2em" />
    },
    {
      title: t('engTitle'),
      date: t('engDate'),
      desc: t('engDesc'),
      icon: <GiRingBox size="1.2em" />
    },
    {
      title: t('wedTitle'),
      date: t('wedDate'),
      desc: t('wedDesc'),
      icon: <GoHeartFill size="1.2em" />
    }
  ];

  return (
    <div className="container" ref={sectionRef}>
      <div className={`title story__title ${isVisible ? 'reveal' : ''}`}>{t('storyTitle')}</div>
      
      <div className="story__timeline">
        <div className="story__line"></div>
        
        {stories.map((s, idx) => (
          <div 
            key={idx} 
            className={`story__item ${isVisible ? 'reveal' : ''}`}
            style={{ transitionDelay: `${0.1 + idx * 0.25}s` }}
          >
            <div className="story__node">
              <span className="story__node-icon">{s.icon}</span>
            </div>
            
            <div className="story__card">
              <span className="story__date">{s.date}</span>
              <h4 className="story__card-title">{s.title}</h4>
              <p className="story__desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveStory;
