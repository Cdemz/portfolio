import React, { useRef } from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_blx6fwb', 'template_ii29k0w', form.current, 'gQL1w9yCXd-jn0UHv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gbengaadepoju75</h5>
            <a href="mailto:gbengaadepoju75@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          {/* END OF ARTICLE */}
          
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Ademola Adepoju</h5>
            <a href="https://m.me/ademola.adepoju" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          {/* END OF ARTICLE */}
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>08103336165</h5>
            <a href="https://wa.link/7vaoos" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          {/* END OF ARTICLE */}

        </div>

        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact