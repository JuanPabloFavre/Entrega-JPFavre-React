import '../styles/style.css'
import '../App.css'
import React from 'react'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Carniceria from '../components/Promises/CarniceriaP'
import Footer from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'


const pagCarniceria = () => {
  return (
    <div>
        <Logo/>
        <Container/>
        <Banner />
        <h1 className='titulo'>Carniceria</h1>
        <Carniceria/>
        <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]}/>      
    </div>
  )
}

export default pagCarniceria