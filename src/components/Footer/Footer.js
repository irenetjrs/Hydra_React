import React from 'react'
import '../Footer/Footer.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Vector.svg'
import Vector18 from '../../assets/Vector 18.svg'
import Vector19 from '../../assets/Vector 19.svg'
import Vector20 from '../../assets/Vector 20.svg'
import Vector17 from '../../assets/Vector 17.svg'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Linkedin from '../../assets/linkedin.svg'
import Youtube from '../../assets/youtube.svg'
import Instagram from '../../assets/instagram.svg'
import Pinterest from '../../assets/pinterest.svg'



const Footer = () => {
   return (
   <div className='footer'>

      <div className='f-section'>
      <img className='v-18' src={Vector18} alt='/'/>
      <img className='v-19' src={Vector19} alt='/'/>
         <div className='f-logo'>
         <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
         </Link>
         </div>
         <img src={Vector20} alt='/'/>
         <div className='f-menu'>
         <ul>
            <li>
                  <Link to='/About'>ABOUT</Link>
            </li>
            <li>
                  <Link to='/Services'>SERVICES</Link>
            </li>
            <li>
                  <Link to='/Tech'>TECHNOLOGIES</Link>
            </li>
            <li>
                  <Link to='/Process'>HOW TO</Link>
            </li>
            <li>
                  <Link to='/Join'>JOIN HYDRA</Link>
            </li>
         </ul>
         </div>
         <img src={Vector20} alt='/'/>
         <div className='f-faq'>
            <ul>
               <li>F.A.Q</li>
               <li>SITEMAP</li>
               <li>CONDITIONS</li>
               <li>LICENSES</li>
            </ul>
         </div>
         <img src={Vector20} alt='/'/>
         <div className='f-socials'>
            <div>SOCIALIZE WITH HYDRA</div>
            <div className='f-medias'>
               <Link to='https://uk-ua.facebook.com'>
                  <img src={Facebook} alt='/'/>
               </Link>
               <Link to='https://twitter.com'>
                  <img src={Twitter} alt='/'/>
               </Link>
               <Link to='https://www.linkedin.com'>
                  <img src={Linkedin} alt='/'/>
               </Link>
               <Link to='https://www.youtube.com'>
                  <img src={Youtube} alt='/'/>
               </Link>
               <Link to='https://www.instagram.com'>
                  <img src={Instagram} alt='/'/>
               </Link>
               <Link to='https://www.pinterest.com'>
                  <img src={Pinterest} alt='/'/>
               </Link>
               </div>
               <Link to='/services'>
                  <button className='btn-full-large'>BUILD YOUR WORLD</button>
               </Link>
         </div>
      </div>
      <div className='f-rights'>
         <img src={Vector17} alt='/'/>
         2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
      </div>
   </div>
)
}

export default Footer