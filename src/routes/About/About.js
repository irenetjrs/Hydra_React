import React from 'react'
import '../About/About.scss'
import Vector7 from '../../assets/Vector 7.svg'
import Vector8 from '../../assets/Vector 8.svg'
import ASMask from '../../assets/About_Mask group.svg'
import LargeArrow from '../../assets/Component 1.svg'

const About = () => {
   return (
      <div className='main-section'>
         <div className='about-section'>
            <img className='v-8' src={Vector8} alt='/'/>
            <img className='v-7' src={Vector7} alt='/'/>
            <div className='as-left'>
               <h2>INTRODUCTION</h2>
               <div className='as-header'>
                  <h3>TO HYDRA VR</h3>
                  <img className='as-none' src={LargeArrow} alt='arrow'></img>
               </div>
               <img className='as-mask' src={ASMask} alt='mask'></img>
            </div>
            <div className='as-right'>
               <p className='as-none' >Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                  nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                  quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                  lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
               </p>
               <h2 className='as-none' >ABOUT</h2>
               <h3 className='as-none' >HYDRA VR</h3>
               <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                  urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                  dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                  Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                  sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                  etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                  cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                  retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                  n tempor.
               </p>
               <button className='btn-full-large button-hover'>LET’S GET IN TOUCH</button>
            </div>
         </div>
      </div>
   )
}

export default About