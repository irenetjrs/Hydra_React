import React from 'react'
import '../Services/Services.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Vector14 from '../../assets/Vector 14.svg'
import Vector11 from '../../assets/Vector 11.svg'
import LargeArrow from '../../assets/Component 1.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';


import image1 from '../../assets/slider-img/image1.svg';
import image2 from '../../assets/slider-img/image2.svg';
import image3 from '../../assets/slider-img/image3.svg';
import image4 from '../../assets/slider-img/image4.svg';


const Services = () => {
return (
   <div className='home-section'>
      <Navbar/>
      <div className='services-section'>
      <div className='ss-text'>
         <img className='v-14' src={Vector14} alt='/'/>
         <div className='ss-left'>
            <h2>WHY BUILD</h2>
            <div className='ss-header'>
               <h3>WITH HYDRA?</h3>
               <img className='ss-none' src={LargeArrow} alt='arrow'></img>
            </div>
            </div>
            <div className='ss-left'>
               <p className='ss-none' >Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                  nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                  lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
               </p>
            </div>
         
      </div>
      <div className='ss-swiper'>
            <Swiper
            freemode={true}
            grabCursor={true}
            modules={[Navigation]}
            className='ss-swiper'
            slidesPerView={4}
            spaceBetween={10}
            >
               <SwiperSlide>
                  <div className='box'>
                     <img src={image1} alt='/'></img>
                     <h3>SIMULATION</h3>
                     <img src={Vector11} alt='/'></img>
                     <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                     </p>
                     <button className='btn-full'>TRY IT NOW</button>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='box'>
                     <img src={image2} alt='/'></img>
                     <h3>EDUCATION</h3>
                     <img src={Vector11} alt='/'></img>
                     <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                     </p>
                     <button className='btn-full'>TRY IT NOW</button>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='box'>
                     <img src={image3} alt='/'></img>
                     <h3>SELF-CARE</h3>
                     <img src={Vector11} alt='/'></img>
                     <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                     </p>
                     <button className='btn-full'>TRY IT NOW</button>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='box'>
                     <img src={image4} alt='/'></img>
                     <h3>OUTDOOR</h3>
                     <img src={Vector11} alt='/'></img>
                     <p>
                        Vitae sapien pellentesque habitant morbi
                        nunc. Viverra aliquet  porttitor rhoncus 
                        libero justo laoreet sit amet vitae.
                     </p>
                     <button className='btn-full'>TRY IT NOW</button>
                  </div>
               </SwiperSlide>
            </Swiper>
      </div>
      </div>
      <Footer/>
   </div>
   
)
}

export default Services