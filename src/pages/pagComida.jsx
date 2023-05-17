import React from 'react'
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Comida from '../components/Promises/ComidaP'
import Footer from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'

const pagComida = () => {
  return (
    <div>
    <Logo />
    <Container />
    <Banner />
    <h1 className='titulo'>Comida</h1>
    <Comida />
    <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]} />
  </div>
  )
}

export default pagComida