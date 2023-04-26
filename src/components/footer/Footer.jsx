import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import logo1 from '../../assests/for real/cloud.png'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> <img src={logo1} alt="my logo" className='logo1' /> </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/ademola.adepoju.5015" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com/cdemz_gram?igshid=ZDdkNTZiNTM" target='_blank' rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com/Ad_twi_artworks?s=09" target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ademola Adepoju</small>
      </div>
    </footer>
  )
}

export default Footer