import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

function Location() {
  const { t } = useLanguage();
  const gotoGooglemap = () => {
    window.open('https://maps.google.com/?q=Saileela%20Garden%20Mangal%20Karyalaya,%20Alephata', '_blank');
  }

  return (
    <div className='container location__container-theme'>
      <div className='title'>{t('locTitle')}</div>
      <div className='location__details'>
        <div>{t('locVenue')}</div>
        <div>{t('locAddr')}</div>
      </div>
      
      <iframe
        title="Saileela Garden Mangal Karyalaya Map"
        src="https://maps.google.com/maps?q=Saileela%20Garden%20Mangal%20Karyalaya,%20Alephata&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className='location__map'
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <div className='location__map-icon-box' style={{ justifyContent: 'center' }}>
          <div className='location__map-item' onClick={gotoGooglemap} style={{ padding: '10px 20px', borderRadius: '5px' }}>
            <FaMapMarkerAlt className='location__map-icon' size="1.2em" color="#EA4335"/>
            <span>{t('locMapBtn')}</span>
          </div>
      </div>

      <div className='location__info'>
        <div>{t('locHighway')}</div>
      </div>
    </div>
  )
}

export default Location
