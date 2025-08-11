import React from 'react'
import Card from '../Components/Card'
import Todo from '../Components/Todo'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Shop from '../Components/Shop'

const Mainlayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainlayouts