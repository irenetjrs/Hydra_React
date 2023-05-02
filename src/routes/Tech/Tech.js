import React from 'react'
import '../Tech/Tech.scss'
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
                        <div className='ts-small-circle'>
                        <img className='circles-arrow' src={TSArrow} alt='/'></img>
                        </div>
                  </div>
               </div>
         </div>
         </div>
      </div>
   )
}

export default Tech
