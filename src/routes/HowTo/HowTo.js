import React from 'react'
import '../HowTo/HowTo.scss'
import LargeArrow from '../../assets/Component 1.svg'
import Vector15 from '../../assets/Vector 15.svg'
// import SmallArrow from '../../assets/'

const HowTo = () => {
   return (
      <div className='main-section'>
      <div className='howto-section'>
      <div className='ht-text'>
         <div className='ht-left'>
            <h2>WHY BUILD</h2>
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
      <div className='ht-vector'>
         <div className='ht-1'>
            <div className='small-circle'>
            <span>1</span>
            </div>

         </div>
         <div className='ht-1'>
            <div className='small-circle'>
            2
            </div>
         </div>
         <div className='ht-1'>
            <div className='small-circle'>
            3
            </div>
         </div>
         <div className='ht-1'>
            <div className='small-circle'>
            4
            </div>
         </div>
      </div>
      </div>
   </div>
   )
}

export default HowTo;