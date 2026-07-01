import React, { useEffect, useRef, useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { GiCoffeeCup, GiRingBox } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";

function LoveStory() {
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
      title: "First Meet",
      date: "August 2024",
      desc: "Where it all began... A sweet conversation and a chance encounter that instantly bloomed into something special.",
      icon: <GiCoffeeCup size="1.2em" />
    },
    {
      title: "First Date",
      date: "September 2024",
      desc: "An unforgettable evening filled with endless laughter, shared dreams, and the quiet realization of a lifetime connection.",
      icon: <BiCameraMovie size="1.2em" />
    },
    {
      title: "Our Engagement",
      date: "July 6, 2026",
      desc: "Exchanging rings and promising to walk hand-in-hand forever under the blessings of our parents and loved ones.",
      icon: <GiRingBox size="1.2em" />
    },
    {
      title: "The Wedding Day",
      date: "July 7, 2026",
      desc: "The beginning of our new chapter—starting our journey as husband and wife, bound by love, forever and always.",
      icon: <GoHeartFill size="1.2em" />
    }
  ];

  return (
    <div className="container" ref={sectionRef}>
      <div className={`title story__title ${isVisible ? 'reveal' : ''}`}>Our Love Story</div>
      
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
