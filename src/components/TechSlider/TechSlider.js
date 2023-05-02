import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tech1 from '../../assets/Hydra-Tech1 1.svg'
import tech2 from '../../assets/Hydra-Tech3 1.svg'
import tech3 from '../../assets/Hydra-Tech2 1.svg'
import tech4 from '../../assets/Hydra-Tech4 1.svg'

import "swiper/css";
import "swiper/css/navigation";

import "../ServicesSlider/ServicesSlider.scss";

import { Navigation } from "swiper";

export default function App() {
   return (
      <>
         <Swiper 
         className="ts-swiper" 
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
               <img src={tech1} alt='tech1'></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='box'>
               <img src={tech2} alt='tech2'></img>
            </div>
         </SwiperSlide>         
         <SwiperSlide>
            <div className='box'>
               <img src={tech3} alt='tech3'></img>
            </div>
         </SwiperSlide>         
         <SwiperSlide>
            <div className='box'>
               <img src={tech4} alt='tech4'></img>
            </div>
         </SwiperSlide>
      </Swiper>
   </>
   );
}



