import React from 'react'
import Logo from '../assets/Logo.svg'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaLinkedin />
            </div>
            <div className="footer-section-two">
             <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Contact</span>
                <span>Testimonials</span>
                <span>Work</span>
             </div>
                <div className='footer-section-columns'>
                    <span>+244-5253-7720</span>
                    <span>fastfood@gmail.com</span>
                    <span>contact@fastfood.com</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer