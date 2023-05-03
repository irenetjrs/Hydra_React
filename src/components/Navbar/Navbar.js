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
      <div>
            <Link className='logo' to='/'>
                  <img className='rotate'src={Logo} alt='logo'/>
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
            <Link to='/HowTo'>HOW TO</Link>
      </li>
      <li>
            <Link to='/' className='btn'>CONTACT US</Link>
      </li>
      <li>
            <Link to='/Join' className='btn-full button-hover'>JOIN HYDRA</Link>
      </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}} />)}
      </div>
</div>
)
}

export default Navbar