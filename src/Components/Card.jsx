import React from 'react'
import './Card.css'
import { useState } from 'react';

const Card = () => {
    const detail =
        `Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Officiis aspernatur, 
    quibusdam facere praesentium iusto similique 
    veritatis voluptatem laboriosam quisquam 
    laudantium non dignissimos possimus nisi 
    doloribus illum a ullam ex tempora!`
    const newDetails = `${detail.slice(0, 100)}...`
    const [readMore, setreadMore] = useState(true);
    const handlereadMore = () => {
        setreadMore(!readMore)
    }
    return (
        <>
            <div className='react-texts'>
                <h2>Become a React Dev</h2>
                <p>Find the React job that fits your skill set</p>
            </div>

            <div className='Card'>
                <div className='first-cardContent'>
                    <h1>For Developers</h1>
                    <p>Browse our React jobs and start your career today</p>
                </div>
                <div className='second-cardContent'>
                    <h1>For Employers</h1>
                    <p>Browse our React jobs and start your career today</p>
                </div>
            </div>
            <div>
                <p>{readMore ? newDetails : detail}</p>
                <button onClick={handlereadMore}> {
                    readMore ? 'READ MORE' : 'READ LESS'}
                </button>
            </div>
        </>
    )
}

export default Card