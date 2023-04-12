import React from 'react'
import './Porfolio.css'
import IMG1 from '../../assests/assets/portfolio1.jpg'
import IMG2 from '../../assests/assets/portfolio2.jpg'
import IMG3 from '../../assests/assets/portfolio3.jpg'
import IMG4 from '../../assests/assets/portfolio4.jpg'
import IMG5 from '../../assests/assets/portfolio5.png'
import IMG6 from '../../assests/assets/portfolio6.jpg'

const data = [
  
  {
    id: 1,
    image:IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo:'https://dribbble.com/Alien_pixels',

  },

  {
    id: 2,
    image:IMG2,
    title: 'Charts template & infographics in figma',
    github: 'https://github.com',
    demo:'https://dribbble.com/Alien_pixels',

  },

  {
    id: 3,
    image:IMG3,
    title: 'Figma dashboard UI kit for data design web app',
    github: 'https://github.com',
    demo:'https://dribbble.com/Alien_pixels',

  },

  {
    id: 4,
    image:IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo:'https://dribbble.com/Alien_pixels',

  },

  {
    id: 5,
    image:IMG5,
    title: 'Charts & templates & infographics in figma',
    github: 'https://github.com',
    demo:'https://dribbble.com/Alien_pixels',

  },

  {
    id: 6,
    image:IMG6,
    title: 'Charts & templates & infographics in figma',
    github: 'https://github.com',
    demo:'https://dribbble.com/Alien_pixels',

  }
]

const Porfolio = () => {
  return (
    <section id='section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio__item">
          <div className="porfolio__item-image">
            <img src={image} alt={title} />

          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='blank'>Life Demo</a>
          </div>
        </article>
            )
          })
        }
        {/* END OF THE PROJECT */}


        

        
      </div>
    </section>
  )
}

export default Porfolio