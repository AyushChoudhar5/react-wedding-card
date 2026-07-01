import React, { useState, useEffect, useRef } from 'react'
import flower from '../images/flower.png'


function CalendarDay({ day, firstDayOfWeek, isWeddingDay, isHoliday, isSpotlight }) {
  const dayIndex = (day - 1 + firstDayOfWeek) % 7;
  const dayOfWeekClass = dayIndex === 0 ? 'red' : dayIndex === 6 ? 'blue' : '';
  const holidayClass = isHoliday ? 'red' : '';
  const specialDayClass = isWeddingDay ? 'heart red' : '';
  const spotlightClass = isSpotlight ? 'spotlight' : '';

  return (
    <div className={`calendar__day ${dayOfWeekClass} ${specialDayClass} ${holidayClass} ${spotlightClass}`}>
      {day}
    </div>
  );
}

function Calendar() {
  const daysInMonth = 31; // July 2026 has 31 days
  const firstDayOfWeek = 3; // July 1, 2026 is Wednesday
  const emptyDays = Array.from({ length: firstDayOfWeek }, () => null);
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [spotlightActive, setSpotlightActive] = useState(false);
  const containerRef = useRef(null);

  // Observer to detect when user scrolls to the Calendar section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpotlightActive(true);
          const timer = setTimeout(() => {
            setSpotlightActive(false);
          }, 3000); // 3 seconds spotlight duration
          return () => clearTimeout(timer);
        } else {
          setSpotlightActive(false);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const currentDate = new Date();
      const targetDate = new Date('2026-07-07T13:45:00+05:30');
      const timeDiff = targetDate - currentDate;

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='container calendar' ref={containerRef}>
      <img src={flower} className="flower" alt='flower' />
      <h3>Tuesday, July 7, 2026 at 1:45 PM</h3>
      <div className='calendar__line'></div>
      <div className="calendar__body">
        <div className="calendar__weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="calendar__days">
          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`}></div>
          ))}
          {days.map((day) => (
            <CalendarDay
              key={day}
              day={day}
              firstDayOfWeek={firstDayOfWeek}
              isWeddingDay={day === 7}
              isHoliday={false}
              isSpotlight={day === 7 && spotlightActive}
            />
          ))}
        </div>
      </div>
      <div className="countdown__wrapper">
        <div className="countdown__title">Countdown to our Special Day</div>
        <div className="countdown__frame">
          <span className="frame-corner corner-tl"></span>
          <span className="frame-corner corner-tr"></span>
          <span className="frame-corner corner-bl"></span>
          <span className="frame-corner corner-br"></span>

          <div className="countdown__section">
            <span className="countdown__value">{timeLeft.days}</span>
            <span className="countdown__label">Days</span>
          </div>
          <div className="countdown__divider"></div>
          <div className="countdown__section">
            <span className="countdown__value">{timeLeft.hours}</span>
            <span className="countdown__label">Hours</span>
          </div>
          <div className="countdown__divider"></div>
          <div className="countdown__section">
            <span className="countdown__value">{timeLeft.minutes}</span>
            <span className="countdown__label">Mins</span>
          </div>
          <div className="countdown__divider"></div>
          <div className="countdown__section seconds">
            <span className="countdown__value">{timeLeft.seconds}</span>
            <span className="countdown__label">Secs</span>
          </div>
        </div>
      </div>
      <div className="countdown__footer">The wedding of Yogesh ♥ Dipali is <span className='calendar__remain-day'>{timeLeft.days} days</span> away</div>
    </div>
  )
}

export default Calendar;
