import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import ContactsHome from '../components/ContactsHome/ContactsHome'
import Footer from '../components/Footer/Footer'

const Home = () => {
   return (
      <div className='home-section'>
         <Navbar/>
         <HeroSection/>
         <ContactsHome/>
         <Footer/>
      </div>
      
   )
}

export default Home