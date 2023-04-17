import React from 'react'
import '../Tech/Tech.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import tech1 from '../../assets/Hydra-Tech1 1.svg'
import tech2 from '../../assets/Hydra-Tech3 1.svg'
import tech3 from '../../assets/Hydra-Tech2 1.svg'
import tech4 from '../../assets/Hydra-Tech4 1.svg'
import TSMask from '../../assets/Tech_mask.svg'
import BigCircle from '../../assets/fake-button/Ellipse 6.svg'
import SmallCircle from '../../assets/fake-button/Ellipse 5.svg'
import TSArrow from '../../assets/fake-button/outline/chevron-small-down.svg'


const Tech = () => {
   return (
      <div className='home-section'>
         <Navbar/>
         <div className='tech-section'>
            <div className='ts-upper'>
               <div className=''>
                  <img className='ts-mask' src={TSMask} alt='tech1'></img>
                  <h2>TECHNOLOGIES & HARDWARE</h2>
                  <h3>USED BY HYDRA VR.</h3>
               </div>
               <div className='fake-button'>
                  <picture>
                     <img src={BigCircle} alt='/'></img>
                     <img src={SmallCircle} alt='/'></img>
                     <img src={TSArrow} alt='/'></img>
                  </picture>
                  
               </div>
            </div>
            <div className='ts-lower'>
            <img src={tech1} alt='tech1'></img>
            <img src={tech2} alt='tech1'></img>
            <img src={tech3} alt='tech1'></img>
            <img src={tech4} alt='tech1'></img>
            </div>
         </div>
         <Footer/>
      </div>
   )
}

export default Tech