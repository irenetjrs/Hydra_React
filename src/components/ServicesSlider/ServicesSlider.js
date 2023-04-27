import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../assets/slider-img/image1.svg';
import image2 from '../../assets/slider-img/image2.svg';
import image3 from '../../assets/slider-img/image3.svg';
import image4 from '../../assets/slider-img/image4.svg';
import Vector11 from '../../assets/Vector 11.svg'

import "swiper/css";
import "swiper/css/navigation";

import "../ServicesSlider/ServicesSlider.scss";

import { Navigation } from "swiper";

export default function App() {
   return (
      <>
         <Swiper 
         className="ss-swiper" 
         navigation={true} 
         modules={[Navigation]}
         breakpoints={{
         768: {
            slidesPerView: 1,
            width: 768,
         },
         1040: {
            slidesPerView: 4,
            width: 1040,
         },
         }}
         >
         <SwiperSlide>
            <div className='box'>
               <div className="ssbox-bg">               
                  <img className="ssbox-bg-img" src={image1} alt='/'></img>
               </div>
               <h3>SIMULATION</h3>
               <img className="ssbox-bg-v" src={Vector11} alt='/'></img>
               <p>
                  Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus 
                  libero justo laoreet sit amet vitae.
               </p>
               <button className='btn-full-large'>TRY IT NOW</button>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='box'>
               <div className="ssbox-bg">               
                  <img className="ssbox-bg-img"  src={image2} alt='/'></img>
               </div>
               <h3>EDUCATION</h3>
               <img className="ssbox-bg-v" src={Vector11} alt='/'></img>
               <p>
                  Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus 
                  libero justo laoreet sit amet vitae.
               </p>
               <button className='btn-full-large'>TRY IT NOW</button>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='box'>
               <div className="ssbox-bg">               
                  <img className="ssbox-bg-img"  src={image3} alt='/'></img>
               </div>
               <h3>SELF-CARE</h3>
               <img className="ssbox-bg-v" src={Vector11} alt='/'></img>
               <p>
                  Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus 
                  libero justo laoreet sit amet vitae.
               </p>
               <button className='btn-full-large'>TRY IT NOW</button>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='box'>
               <div className="ssbox-bg">               
                  <img className="ssbox-bg-img"  src={image4} alt='/'></img>
               </div>
               <h3>OUTDOOR</h3>
               <img className="ssbox-bg-v" src={Vector11} alt='/'></img>
               <p>
                  Vitae sapien pellentesque habitant morbi
                  nunc. Viverra aliquet  porttitor rhoncus 
                  libero justo laoreet sit amet vitae.
               </p>
               <button className='btn-full-large'>TRY IT NOW</button>
            </div>
         </SwiperSlide>
      </Swiper>
   </>
   );
}



