import React from 'react'
import '../HowTo/HowTo.scss'
import LargeArrow from '../../assets/Component 1.svg'
import Vector15 from '../../assets/Vector 15.svg'
import SmallArrow from '../../assets/outline/arrow-small-right.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const HowTo = () => {
   return (
      <div className='main-section'>
      <div className='howto-section'>
      <div className='ht-text'>
         <div className='ht-left'>
            <h2 className='display'>HOW WE BUILD</h2>
            <div className='ht-header'>
               <h3>WITH HYDRA?</h3>
               <img className='ht-none' src={LargeArrow} alt='arrow'></img>
            </div>
         </div>
         <div className='ht-left'>
            <p className='ht-none' >Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
               nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
               quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
               lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
            </p>
         </div>
      </div>
         <img className='v-15' src={Vector15} alt='/'></img>
      <div> 
         <Swiper 
         className='ht-vector'
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
            <div className='ht-card'>
               <div className='ht-1'>
                  <div className='ht-small-circle'>
                     <span>1</span>
                  </div>
                  <div className='ht-card-desc'>
                     <img src={SmallArrow} alt='/'></img>
                     <p>
                     3D Conception<br/>
                     & Design
                     </p>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='ht-card'>
               <div className='ht-1'>
                  <div className='ht-small-circle'>
                     <span>2</span>
                  </div>
                  <div className='ht-card-desc'>
                     <img src={SmallArrow} alt='/'></img>
                     <p>
                     Interaction
                     <br/>
                     Design
                     </p>
                  </div>
               </div>
            </div>
         </SwiperSlide> 
         <SwiperSlide>
            <div className='ht-card'>
               <div className='ht-1'>
                  <div className='ht-small-circle'>
                     <span>3</span>
                  </div>
                  <div className='ht-card-desc'>
                  <img src={SmallArrow} alt='/'></img>
                     <p>
                     VR World
                     <br/>
                     User Testing
                     </p>
                  </div>
               </div>
            </div>
         </SwiperSlide>         
         <SwiperSlide>
            <div className='ht-card'>
               <div className='ht-1'>
                  <div className='ht-small-circle'>
                     <span>4</span>
                  </div>
                  <div className='ht-card-desc'>
                  <img src={SmallArrow} alt='/'></img>
                     <p>
                     Hydra VR
                     <br/>
                     Deploy
                     </p>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
      </div>
      </div>
   </div>
   )
}

export default HowTo;