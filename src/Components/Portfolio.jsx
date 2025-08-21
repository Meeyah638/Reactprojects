import React from 'react'
import './Portfolio.css'
import picture from "../assets/Meeyah.jpeg"
import { Link } from 'react-router-dom'
const Portfolio = () => {
    return (
        <div>
            <div className='allfirst-Section'>
                <div className='first-Section'>
                    <p className='hello'>Hello, I'm</p>
                    <h1 className='my-name'>Muhammed-Rabiu Islamiyah</h1>
                    <p>A <span className='skill'>Frontend Developer</span> from <span className='country'>Nigeria</span></p>
                    <p className='Description'>
                        I'm a Frontend Developer based in Nigeria, <br /><br />and I'm very passionate
                        and dedicated to my work.
                    </p>
                    <Link to="/Contact">
                        <button className='About-Me-btn'>
                            Contact Me
                        </button>
                    </Link>   </div>
                <div className='Picture'>
                    <img src={picture} alt="Mypicture"/>
                </div>
            </div>
            <div className='second-Section'>
                <div className='skill-Section'>
                    <h2>Skills</h2>
                </div>
                <div className='Skills-btn'>
                    <button>HTML5</button>
                    <button>CSS3</button>
                    <button>Git & GitHub</button>
                    <button>Bootstrap</button>
                    <button>JavaScript</button>
                    <button>React JS</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio