import React from 'react'
import '../Join/Join.scss'
import Vectot16 from '../../assets/Vector 16.svg'



const Join = () => {
   return (
      <div className='main-section'>
         <div className='join-section'>
            <div></div>
            <h2>JOIN HYDRA</h2>
            <img src={Vectot16} alt='/'></img>
            <h3>Let's Build Your VR Experience</h3>
            <form>
               <div className='js-upperform'>
                  <input type='text' name='First Name' placeholder='First Name' className='js-input'></input>
                  <input type='text' name='Last Name' placeholder='Last Name' className='js-input'></input>
                  <input type='text' name='Email' placeholder='Email' className='js-input'></input>
                  <input type='number' name='Phone' placeholder='Phone Number' className='js-input'></input>
               </div>
               <input type='text' name='Subject' placeholder='Subject' className='js-input-subject'></input>
               <textarea name='textarea' placeholder='Tell Us Something...' className='js-input-textarea'></textarea>
               <button type='submit' className='btn-full-large button-hover'>SEND TO HYDRA</button>
            </form>
         </div>
      </div>
   )
}

export default Join