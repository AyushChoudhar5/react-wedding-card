import React, {useState} from 'react'
import { useLanguage } from '../context/LanguageContext';
import db from '../firebase-config'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

function SurveyModal({ closeModal }) {
  const { t } = useLanguage();
  const [side, setSide] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [attendance, setAttendance] = useState('Attending');
  const [guests, setGuests] = useState(1);
  const [meal, setMeal] = useState('Yes');
  const [agree, setAgree] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (agree === false) {
      alert(t('surveyAlertConsent'));
      return;
    }
     if (side === '' || name === '' || attendance === '') {
      alert(t('surveyAlertFields'));
      return; 
    }

    // Replace '-' with empty string
    const formattedContact = contact.replace(/-/g, '');

     // Form submission logic
     addDoc(collection(db, "surveyItem"), {
      side: side,
      name: name,
      contact: formattedContact,
      attendance: attendance,
      guests: guests,
      meal: meal,
      date: new Date(),
    });

    alert(t('surveyAlertSuccess'));
    closeModal();
   
  };

  return (
     <div className="survey">
      <div className="survey__content">
      <button onClick={closeModal} className="survey__btn-close">&times;</button>
      <div className='survey__title'>{t('surveyTitle')}</div>
        <form onSubmit={handleSubmit}>
          <div className='survey__input'>
            <label>{t('surveySide')}</label>
            <button type='button' onClick={()=>setSide('groom')} className={`survey__btn-side ${side === 'groom' ? 'groom' : ''}`}>{t('surveyGroomSide')}</button>
            <button type='button' onClick={()=>setSide('bride')} className={`survey__btn-side ${side === 'bride' ? 'bride' : ''}`}>{t('surveyBrideSide')}</button>
          </div>
          <div className='survey__input'>
            <label>{t('surveyName')}</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>{t('surveyContact')}</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>{t('surveyAttendance')}</label>
                <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
                    <option value="Attending">{t('surveyAttending')}</option>
                    <option value="Not Attending">{t('surveyNotAttending')}</option>
                    <option value="Undecided">{t('surveyUndecided')}</option>
                </select>
          </div>
          <div className='survey__input'>
            <label>{t('surveyGuests')}</label> 
            <input type="number" min="1" value={guests} placeholder={t('surveyGuestsPlaceholder')} onChange={(e) => setGuests(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>{t('surveyMeal')}</label> 
            <select value={meal} onChange={(e) => setMeal(e.target.value)}>
                    <option value="Yes">{t('surveyYes')}</option>
                    <option value="No">{t('surveyNo')}</option>
                    <option value="Undecided">{t('surveyUndecided')}</option>
            </select>
          </div>
          <div className='survey__agree'>
            <div className='survey__agree_title'>
              <input type='checkbox' value={agree} onChange={(e) => setAgree(!agree)}>
              </input>{t('surveyConsent')}
            </div>
            <div className='survey__agree_content'>
              <div>{t('surveyConsentDetail1')}</div>
              <div>{t('surveyConsentDetail2')}</div>
            </div>
          </div>
          <button type="submit" className='survey__btn-submit' onClick={handleSubmit}>{t('surveySubmit')}</button>
        </form>
      </div>
    </div>
  )
}

export default SurveyModal
