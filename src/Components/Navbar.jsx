import React from 'react'
import image from "../assets/Orangespalsh.jpg"
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <img src="{image}" alt="" />
            <nav className='navbar'>
                <div className='Logo-name'>
                    <h1>Mee<span className='yah-part'>Yah</span></h1>
                </div>                                                                  
                <ul className='nav-lists'>
                    <li className='port-active'>
                        <Link to='/Portfolio' className='nav-links active'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/Contact' className='nav-links'>Contact</Link>
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
                        Login
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar