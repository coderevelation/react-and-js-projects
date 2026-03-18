import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'
// import { FiArrowRight } from 'react-icons/fi'

function Work() {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Browse our menu and pick your favorite meals.'
        },
        {
            image: ChooseMeals,
            title: 'Choose Meals',
            text: 'Select the meals you want to order.'
        },
        {
            image: DeliveryMeals,
            title: 'Deliver Meals',
            text: 'We deliver your meals right to your doorstep.'
        }
    ]

  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>Easily order your favorite meals in just a few simple steps.</p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((item, index) => (
                <div className='work-section-info' key={index}>
                    <div className="info-boxes-image-container">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work