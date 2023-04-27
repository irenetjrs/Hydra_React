import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Visit from '../../assets/Location-Icon.svg';
import Call from '../../assets/outline/phone-call.svg';
import Message from '../../assets/outline/shape.svg';

import "swiper/css";
import "swiper/css/navigation";

import "../Slider/Slider.scss";

import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper 
      className="contacts-home" 
      navigation={true} 
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 1,
          width: 768,
        },
        1040: {
          slidesPerView: 3,
          width: 1040,
        },
      }}
      >
      <SwiperSlide className="ch">
          <div className="ch-item-icon">
            <img src={Visit} alt="location-icon" />
          </div>
          <div className="ch-item">
            <h2 className="ch-item-header">Pay Us a Visit</h2>
            <p className="ch-item-text">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ch cental-border">
          <div className="ch-item-icon">
            <img src={Call} alt="call-icon" />
          </div>
          <div className="ch-item">
            <h2 className="ch-item-header">Give Us a Call</h2>
            <p className="ch-item-text">(110) 1111-1010</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ch">
          <div className="ch-item-icon">
            <img src={Message} alt="mail-icon" />
          </div>
          <div className="ch-item">
            <h2 className="ch-item-header">Send Us a Message</h2>
            <p className="ch-item-text">Contact@HydraVTech.com</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
