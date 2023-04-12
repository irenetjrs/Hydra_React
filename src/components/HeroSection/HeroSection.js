import React from 'react'
import './HeroSection.scss'
import Vector4 from '../../assets/Vector 4.svg'
import Vector3 from '../../assets/Vector 3.svg'
import Vector2 from '../../assets/Vector 2.svg'
import Vector1 from '../../assets/Vector 1.svg'
import MaskGroup from '../../assets/Mask group.svg'
import Arrow from '../../assets/outline/arrow-small-right.svg'
import { Link } from 'react-router-dom'


const HeroSection = () => {
   return (
      <div className='homepage'>
         <div className='vectors-bg'>
            <img className='v4' src={Vector4} alt='4'/>
            <img className='v3' src={Vector3} alt='3' />
            <img className='v2' src={Vector2} alt='2' />
            <img className='v1' src={Vector1} alt='1' />
            <img className='mask' src={MaskGroup} alt='mask-group'></img>
         </div>
         <div className='hero-section'>
            <div className='hs-text'>
               <h1>
                  <span className='violet-text'>Dive </span>
                  <span>Into The Depths <br/> Of </span>
                  <span className='violet-text'>Virtual Reality</span>
               </h1>
               <p>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore nisl tincidunt eget. 
                  Lectus mauris eros in vitae .
               </p>
            </div>
            <div>
               <Link className='hs-links' to='/services'>
                  <button className='btn-full-large'>BUILD YOUR WORLD</button>
                  <img className='arrow' src={Arrow} alt='arrow'></img>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default HeroSection