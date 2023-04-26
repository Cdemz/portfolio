import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conducting user research to understand the needs, preferences, and behaviors of the target audience.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Structuring the content and information of a digital product to make it easy for users to find and use.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing the designs into code, including HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating the visual style and branding of a digital product, including color schemes, typography, and imagery.</p>
            </li>
            
           
          </ul>

        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing the look and feel of the website, including layout, color scheme, typography, and imagery.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>This involves writing the code that creates the user interface of the website, including HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>writing the code that runs on the server, including the database and server-side scripting languages such as PHP,Python,Node.js.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Setup and maintenance of the website on a web server, including updates, security, and backups.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Development of an online store, including payment processing, inventory management, and shipping integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Tracking website traffic, user behavior, and other important metrics to improve the website's performance.</p>
            </li>
           
          </ul>

        </article>

        {/* END OF WEV DEV */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Focused on creating visual content such as logos, infographics, social media posts, marketing materials, and website designs.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating video content such as promotional videos, training videos, explainer videos, and product demos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating written content such as blog posts, website copy, marketing materials, social media posts, and email newsletters.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Managing social media channels and creating content for them such as posts, graphics, and videos.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identifying influencers in a particular niche and partnering with them to create sponsored content that promotes a brand or product.</p>
            </li>
           
          </ul>

        </article>
        {/* END OF Content Creation  */}
      </div>
    </section>
  )
}

export default Services