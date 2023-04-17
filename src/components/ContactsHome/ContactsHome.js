import React from 'react'
import './ContactsHome.scss'
import Visit from '../../assets/Location-Icon.svg'
import Call from '../../assets/outline/phone-call.svg'
import Message from '../../assets/outline/shape.svg'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const ContactsHome = () => {
   return (
      <div className="contacts-home">
      <Swiper
      modules={Navigation}
      navigation={true}
      breakpoints={{
         340: {
            width: 200,
            slidesPerView: 1,
         },

         768: {
            width: 768,
            slidesPerView: 3,
         },

         1040: {
            width: 1040,
            slidesPerView: 3,
         },
      }}  
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
   >
      <SwiperSlide className="ch">
         <div className ="ch-item-icon">
            <img  src={Visit} alt="location-icon"/>
         </div>
         <div className="ch-item">
            <h2 className='ch-item-header'>Pay Us a Visit</h2>
            <p className='ch-item-text'>Union St, Seattle, WA 98101, United States</p>
         </div>
      </SwiperSlide>
      <SwiperSlide className=" ch cental-border">
         <img src={Call} alt="call-icon"/>
         <div className="ch-item">
            <h2 className='ch-item-header'>Give Us a Call</h2>
            <p className='ch-item-text'>(110) 1111-1010</p>
         </div>
      </SwiperSlide>
      <SwiperSlide className="ch">
         <img src={Message} alt="mail-icon"/>
         <div className="ch-item">   
            <h2 className='ch-item-header'>Send Us a Message</h2>
            <p className='ch-item-text'>Contact@HydraVTech.com</p>
         </div>
   </SwiperSlide>
   </Swiper>
   </div>
   )
}

export default ContactsHome
