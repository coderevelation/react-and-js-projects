import React from 'react'
import ProfilePic from '../assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'


function Testimonials() {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'>What Our Customers Say</h1>
            <p className='primary-text'>Hear from our satisfied customers who have experienced the joy of our delicious food and exceptional service.</p>
        </div>
        <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="Profile" />
                <p className='primary-text'>"This is the best food I've ever had!"</p>
            <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
            </div>
            <div className="testimonial-name-container">
                <h2>John Doe</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonials