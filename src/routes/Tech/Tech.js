import React from 'react'
import '../Tech/Tech.scss'
import tech1 from '../../assets/Hydra-Tech1 1.svg'
import tech2 from '../../assets/Hydra-Tech3 1.svg'
import tech3 from '../../assets/Hydra-Tech2 1.svg'
import tech4 from '../../assets/Hydra-Tech4 1.svg'
import TSbackground from '../../assets/Tech_mask.svg'
import TSArrow from '../../assets/fake-button/outline/chevron-small-down.svg'


const Tech = () => {
   return (
      <div className='home-section'>
         <div className='tech-section'>
            <div className='ts-upper'>
               <div className='ts-header' style={{backgroundImage: `url(${TSbackground})`}}>
                  <div className='ts-text'>
                     <h2>TECHNOLOGIES & HARDWARE</h2>
                     <h3>USED BY HYDRA VR.</h3>
                  </div>
                  <div className='fake-button'>
                        <div className='small-circle'>
                        <img className='circles-arrow' src={TSArrow} alt='/'></img>
                        </div>
                  </div>
               </div>

            </div>
            <div className='ts-lower'>
            <img src={tech1} alt='tech1'></img>
            <img src={tech2} alt='tech2'></img>
            <img src={tech3} alt='tech3'></img>
            <img src={tech4} alt='tech4'></img>
            </div>
         </div>
      </div>
   )
}

export default Tech
