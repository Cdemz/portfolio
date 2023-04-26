import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assests/assets/avatar1.jpg'
import AVTR2 from '../../assests/assets/avatar2.jpg'
import AVTR3 from '../../assests/assets/avatar3.jpg'
import AVTR4 from '../../assests/assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    reveiw: "He has been able to bring my ideas to life with his coding expertise, and he has also helped to improve my website's functionality and user experience. Additionally, Ademola's content creation skills have been invaluable in making my website more engaging and user-friendly.",
  },

  
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    reveiw: "I am very happy with Ademola Adepoju's work as a frontend developer and content creator. His attention to detail and ability to bring my ideas to life has greatly improved my website's functionality and user experience. Ademola is easy to work with, communicates effectively, and has a great attitude. I highly recommend him to anyone in need of a skilled developer and content creator.",
  },

  
  {
    avatar: AVTR3,
    name:' Leigh Ola',
    reveiw: "A true professional who is easy to work with and has a great attitude. He communicates effectively and always keeps me in the loop with updates on the project. I highly recommend Ademola to anyone who needs a skilled developer for their website.",
  },

  
  {
    avatar: AVTR4,
    name: 'Rayyan Ryan',
    reveiw: 'I recently hired Ademola to work on the frontend development and content creation of my website. I must say that I am extremely impressed with his work so far. He is a very talented and skilled developer who has a keen eye for detail.',
  },

  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination,]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
      {
          data.map(({avatar, name, reveiw}, index) =>{
            return (
              <SwiperSlide className='testimonial' key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name" >{name} </h5>
                <small className="client__review">
                  {reveiw}
                </small>
            </SwiperSlide>
    
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials