import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'


const Home = () => {
   return (
      <div className='home-section'>
         <Navbar/>
         <HeroSection/>
      </div>
      
   )
}

export default Home