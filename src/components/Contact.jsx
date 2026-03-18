import React from 'react'

function Contact() {
  return (
    <div className="contact-page-wrapper">
        <h1 className='primary-heading'>Have a Question? in Mind? Let us Help You!</h1>    
        <div className="contact-form-container">
            <input type="text" placeholder="Enter your name" />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact