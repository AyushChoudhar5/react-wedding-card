import React, { useState, useRef, useEffect } from 'react'
import mainPhoto from '../images/photo.png'
import { TbPlayerTrackPrevFilled, TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled, TbPlayerTrackNextFilled } from "react-icons/tb";
import { BsPlayCircle, BsStopCircle } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import myMusic from '../media/Saaj-Hyo-Tuza.mp3';


function Cover({ startAnimation }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const audioRef = useRef(new Audio(myMusic));

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  // One-time celebratory heart balloons triggered after envelope opens
  useEffect(() => {
    if (!startAnimation) return;

    // Delay start slightly to align with the fadeout of the envelope
    const timerStart = setTimeout(() => {
      const count = 18;
      const initialBalloons = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`, // Distributed across screen width
        scale: 1.5 + Math.random() * 2.5, // Large balloon sizes
        delay: Math.random() * 1.8, // Staggered release
        sway: Math.random() * 80 - 40, // Horizontal sway distance
        duration: 5 + Math.random() * 3, // Travel time (5s to 8s)
      }));
      setBalloons(initialBalloons);
    }, 1600);

    // Clear elements from DOM once animation is fully complete
    const timerClear = setTimeout(() => {
      setBalloons([]);
    }, 11600);

    return () => {
      clearTimeout(timerStart);
      clearTimeout(timerClear);
    };
  }, [startAnimation]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.currentTime = 23.3;

    const playAudio = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        cleanupListeners();
      }).catch(err => {
        console.log("Autoplay on interaction blocked:", err);
      });
    };

    const cleanupListeners = () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };

    // Attempt immediate play (works if browser allows or cache is warm)
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Wait for first user click or touch anywhere on the page
      document.addEventListener('click', playAudio);
      document.addEventListener('touchstart', playAudio);
    });

    return () => {
      cleanupListeners();
      audio.pause();
    };
  }, []);

  return (
    <div className="container">
      {/* One-time celebratory screen-wide heart balloons */}
      {balloons.map((b) => (
        <GoHeartFill
          key={b.id}
          className="cover__heart-balloon"
          style={{
            position: 'fixed',
            left: b.left,
            bottom: '-120px',
            fontSize: `${b.scale}em`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            color: 'rgba(214, 69, 69, 0.65)',
            pointerEvents: 'none',
            zIndex: 99999,
            '--sway-x': `${b.sway}px`
          }}
        />
      ))}

      <div className={`cover__title-wrap${startAnimation ? ' reveal' : ''}`}>
        <span className="cover__title-eyebrow">Two Hearts, One Beginning</span>

        <div className="title cover__title">
          <span className="cover__quote cover__quote--open">&ldquo;</span>
          <span className="cover__title-text">We Are Getting Married</span>
          <span className="cover__quote cover__quote--close">&rdquo;</span>
        </div>

        <svg className="cover__title-flourish" viewBox="0 0 220 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11C42 -2 62 24 104 11" />
          <path d="M116 11C158 -2 178 24 216 11" />
          <circle className="cover__title-flourish-dot" cx="110" cy="11" r="2.6" />
        </svg>
      </div>

      <img className="cover__main-photo" src={mainPhoto} alt='weddingcouple'></img>
      <div className='cover__person'>
        <div>Mr. Yogesh S Ugle</div>
        <GoHeartFill className='cover__icon-heart' size="0.8em" />
        <div>Ms. Dipali G Sable</div>
      </div>
      <div className='cover__date'>Tuesday, July 7, 2026 at 1:45 PM</div>
      <div className='cover__place'>Saileela Garden Mangal Karyalaya, Alephata</div>
      <div className='cover__line'></div>

      <div className='cover__icon-box'>
        <TbPlayerTrackPrevFilled size="1.5em" />
        <TbPlayerSkipBackFilled size="1.5em" />

        {isPlaying ? (
          <BsStopCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Stop Music" />
        ) : (
          <BsPlayCircle size="3em" className='cover__music-btn' onClick={togglePlay} aria-label="Play Music" />
        )}

        <TbPlayerSkipForwardFilled size="1.5em" />
        <TbPlayerTrackNextFilled size="1.5em" />
      </div>
    </div>
  )
}

export default Cover