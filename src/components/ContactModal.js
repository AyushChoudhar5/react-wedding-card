import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function ContactModal({ closeModal }) {
  const { t } = useLanguage();
  const contacts = [
    { person: t('groomBrother'), phone: "7028835171" },
    { person: t('groomName'), phone: "9545106897" }
  ];

  return (
    <div className="survey">
      <div className="survey__content" style={{ textAlign: 'center', width: '320px' }}>
        <button onClick={closeModal} className="survey__btn-close">&times;</button>
        <div className='survey__title' style={{ marginBottom: '25px' }}>{t('contactTitle')}</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '25px' }}>
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '15px',
                background: 'linear-gradient(135deg, #ffffff 0%, #faf8f5 100%)',
                border: '1px solid #d4af37',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(120, 80, 75, 0.08)'
              }}
            >
              <span style={{ 
                fontFamily: 'Lora', 
                fontSize: '1.0rem', 
                fontWeight: '600', 
                color: 'rgb(95, 25, 25)',
                marginBottom: '5px',
                textAlign: 'center'
              }}>
                {contact.person}
              </span>
              <span style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '0.9rem', 
                color: '#666',
                marginBottom: '10px'
              }}>
                {contact.phone}
              </span>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a 
                  href={`tel:${contact.phone}`} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    backgroundColor: '#faf6f0',
                    border: '1px solid #d4af37',
                    color: '#d4af37',
                    transition: 'transform 0.2s'
                  }}
                >
                  <BsFillTelephoneFill size="1em" />
                </a>
                <a 
                  href={`sms:${contact.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    backgroundColor: '#faf6f0',
                    border: '1px solid #d4af37',
                    color: '#d4af37',
                    transition: 'transform 0.2s'
                  }}
                >
                  <HiMail size="1.2em" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={closeModal} 
          className="survey__btn-submit"
          style={{ width: '100%', marginTop: '10px' }}
        >
          {t('backBtn')}
        </button>
      </div>
    </div>
  );
}

export default ContactModal;
