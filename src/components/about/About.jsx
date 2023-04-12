import React from 'react'
import withr from '../../assests/for real/with.png'
import {FaAward }from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={withr} alt="about me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className= 'about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className= 'about__icon'/>
              <h5>Client</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className= 'about__icon'/>
              <h5>Project</h5>
              <small>80+ Project</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea fugit saepe sit, sunt exercitationem vero error hic, illo sint autem facere alias officiis accusantium sed possimus dignissimos sapiente ipsum!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About