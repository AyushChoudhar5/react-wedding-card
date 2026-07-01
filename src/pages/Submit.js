import React from 'react'

function Submit({openModal}) {
  return (
    <div className='submit'>
      <div className='submit__title'>RSVP</div>
        <div className='submit__text'>
            <div>Please let us know your attendance</div>
            <div>so we can prepare to welcome you</div>
            <div>with warm hearts.</div>
        </div>
        <button onClick={openModal} className='submit__btn'>RSVP Now</button>
    </div>
  )
}

export default Submit
