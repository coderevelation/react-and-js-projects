import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'


function About() {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>
                About Us
            </p>
            <h1 className='primary-heading'>Food That Makes You Happy</h1>
            <p className='primary-text'>
                We are a team of passionate food lovers who believe that great food should be accessible to everyone. Our mission is to provide delicious, healthy meals that are prepared with the highest quality ingredients and served with care.
            </p>
            <p className="primary-text">
                Whether you're looking for a quick lunch, a romantic dinner for two, or a family feast, we've got you covered. Our menu features a wide variety of dishes that are sure to satisfy any craving, from classic comfort food to international cuisine.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Our Story</button>
                <button className='watch-video-button'>
                 <BsFillPlayCircleFill />Play Video
            </button>
            </div>
        </div>
        <div className="about-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
    </div>
  )
}

export default About