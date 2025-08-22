import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import './Navbar.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <div className='Logo-name'>
                    <h1>
                        Mee<span className='yah-part'>Yah</span>
                    </h1>
                </div>
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <div className={`nav-menu ${isOpen ? "open" : ""}`}>
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
                    <button className='login-btn'>
                        Login
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar
