import React, {useState} from 'react'
import db from '../firebase-config'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';

function SurveyModal({ closeModal }) {
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
      alert("Please agree to the privacy policy.");
      return;
    }
     if (side === '' || name === '' || attendance === '') {
      alert("Please fill in all the required fields.");
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

    alert('Your RSVP has been submitted.');
    closeModal();
   
  };

  return (
     <div className="survey">
      <div className="survey__content">
      <button onClick={closeModal} className="survey__btn-close">&times;</button>
      <div className='survey__title'>RSVP</div>
        <form onSubmit={handleSubmit}>
          <div className='survey__input'>
            <label>Side</label>
            <button type='button' onClick={()=>setSide('groom')} className={`survey__btn-side ${side === 'groom' ? 'groom' : ''}`}>Groom's Side</button>
            <button type='button' onClick={()=>setSide('bride')} className={`survey__btn-side ${side === 'bride' ? 'bride' : ''}`}>Bride's Side</button>
          </div>
          <div className='survey__input'>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>Contact No.</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>RSVP</label>
                <select value={attendance} onChange={(e) => setAttendance(e.target.value)}>
                    <option value="Attending">Attending</option>
                    <option value="Not Attending">Not Attending</option>
                    <option value="Undecided">Undecided</option>
                </select>
          </div>
          <div className='survey__input'>
            <label>Guests</label> 
            <input type="number" min="1" value={guests} placeholder='Total guests including yourself' onChange={(e) => setGuests(e.target.value)} />
          </div>
          <div className='survey__input'>
            <label>Meal</label> 
            <select value={meal} onChange={(e) => setMeal(e.target.value)}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Undecided">Undecided</option>
            </select>
          </div>
          <div className='survey__agree'>
            <div className='survey__agree_title'>
              <input type='checkbox' value={agree} onChange={(e) => setAgree(!agree)}>
              </input>Consent to Personal Information Collection (Required)
            </div>
            <div className='survey__agree_content'>
              <div>Collected items: Name, Contact number</div>
              <div>Retention period: Until the wedding invitation service ends</div>
            </div>
          </div>
          <button type="submit" className='survey__btn-submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SurveyModal
