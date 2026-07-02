import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ganeshji from '../images/ganeshji-removebg-preview.png';
import '../css/LanguageSelect.css';

function LanguageSelect() {
  const { setLanguage } = useLanguage();

  return (
    <div className="lang-select">
      <div className="lang-select__card">
        {/* Ornate corners */}
        <span className="lang-select__corner lang-select__corner--tl"></span>
        <span className="lang-select__corner lang-select__corner--tr"></span>
        <span className="lang-select__corner lang-select__corner--bl"></span>
        <span className="lang-select__corner lang-select__corner--br"></span>

        <div className="lang-select__glow-aura"></div>

        <img src={ganeshji} className="lang-select__ganesha" alt="Ganesha" />

        <div className="lang-select__header">
          <h2 className="lang-select__title">Wedding Invitation</h2>
          <h2 className="lang-select__title-mr">निमंत्रण पत्रिका</h2>
        </div>

        <svg className="lang-select__flourish" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10C36 -2 54 22 90 10" />
          <path d="M110 10C146 -2 164 22 198 10" />
          <circle cx="100" cy="10" r="2.4" fill="#D4AF37" />
        </svg>

        <div className="lang-select__prompt">
          <p className="lang-select__subtitle">Please select your preferred language</p>
          <p className="lang-select__subtitle-mr">कृपया तुमची पसंतीची भाषा निवडा</p>
        </div>

        <div className="lang-select__buttons">
          <button className="lang-select__btn" onClick={() => setLanguage('en')}>
            English
          </button>
          <button className="lang-select__btn mr" onClick={() => setLanguage('mr')}>
            मराठी
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelect;
