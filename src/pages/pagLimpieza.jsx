import React from 'react';
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import LimpiezaP from '../components/Promises/LimpiezaP';
import Footer from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'

const pagLimpieza = () => {
    return (
        <div>
          <Logo />
          <Banner />
          <Container />
          <h1 className='titulo'>Limpieza</h1>
          <LimpiezaP/>
          <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]} />
        </div>
      )
    }


export default pagLimpieza;