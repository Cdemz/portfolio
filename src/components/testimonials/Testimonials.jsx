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
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora ab consectetur ipsam commodi blanditiis? Odit veniam culpa rerum, facere fugiat doloribus reiciendis, nobis ratione sunt architecto eos, possimus placeat!',
  },

  
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora ab consectetur ipsam commodi blanditiis? Odit veniam culpa rerum, facere fugiat doloribus reiciendis, nobis ratione sunt architecto eos, possimus placeat!',
  },

  
  {
    avatar: AVTR3,
    name:' Kwame Despirado',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora ab consectetur ipsam commodi blanditiis? Odit veniam culpa rerum, facere fugiat doloribus reiciendis, nobis ratione sunt architecto eos, possimus placeat!',
  },

  
  {
    avatar: AVTR4,
    name: 'Rayyan Ryan',
    reveiw: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora ab consectetur ipsam commodi blanditiis? Odit veniam culpa rerum, facere fugiat doloribus reiciendis, nobis ratione sunt architecto eos, possimus placeat!',
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