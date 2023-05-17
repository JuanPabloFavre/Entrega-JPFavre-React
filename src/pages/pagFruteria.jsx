import React from 'react'
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import FruteriaP from '../components/Promises/FruteriaP'
import Footer from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'

const pagFruteria = () => {
  return (
    <div>
        <Logo/>
        <Container/>
        <Banner />
        <h1 className='titulo'>Fruteria</h1>
        <FruteriaP/>
        <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]}/>      
    </div>
  )
}

export default pagFruteria