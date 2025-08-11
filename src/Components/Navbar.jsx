import React from 'react'
import logo from "../assets/react.svg"
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
                <div>
                    <img src={logo} alt="Reactlogo" className='logo-img' /></div>
                <ul className='nav-lists'>
                    <li>
                        <Link to='/Card' className='nav-links'>Card</Link>
                    </li>
                    <li>
                        <Link to='/Todo' className='nav-links'>Todo</Link>
                    </li>
                    <li>
                        <Link to='/Shop' className='nav-links'>Shop</Link>
                    </li>
                </ul>
                <div>
                    <button className='login-btn'>
                        LOGIN
                    </button>
                </div>
            </nav>
    </div>
  )
}

export default Navbar