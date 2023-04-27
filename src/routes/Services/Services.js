import React from 'react'
import '../Services/Services.scss'
import Vector14 from '../../assets/Vector 14.svg'
import LargeArrow from '../../assets/Component 1.svg'
import ServicesSlider from '../../components/ServicesSlider/ServicesSlider'


const Services = () => {
return (
   <div className='main-section'>
      <div className='services-section'>
      <div className='ss-text'>
         <img className='v-14' src={Vector14} alt='/'/>
         <div className='ss-left'>
            <h2 className='ss-h2'>WHY BUILD</h2>
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
      <ServicesSlider/>
      </div>
   </div>
)
}

export default Services