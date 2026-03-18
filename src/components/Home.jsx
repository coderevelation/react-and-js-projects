import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../assets/home-banner-background.png'
import {FiArrowRight} from 'react-icons/fi'
import BannerImage from '../assets/home-banner-image.png'

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
        <div className="home-banner-container">
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className='primary-heading'>
                    Delicious Food, Delivered To You
                </h1>
                <p className='primary-text'>
                    Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                </p>
                <button className='primary-button'>
                    Order Now <FiArrowRight />
                </button>
            </div>
            <div className="home-image-container">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home