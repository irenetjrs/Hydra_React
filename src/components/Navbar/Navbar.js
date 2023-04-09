import React, {useState} from 'react'
import './NavbarStyles.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Vector.svg'
import Brand from '../../assets/Frame.svg'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
      const [click, setClick] = useState(false)
      const handleClick = () => setClick(!click)

      return (
      <div className='header'>
            <div className='logo'>
                  <Link to='/'>
                        <img src={Logo} alt='logo'/>
                        <img src={Brand} alt='hydra-brand' />
                  </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                  <Link to='/ContactUs' className='btn'>CONTACT US</Link>
            </li>
            <li>
                  <Link to='/JoinHydra' className='btn-full'>JOIN HYDRA</Link>
            </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}} />)}


            </div>
      </div>
      )
}

export default Navbar