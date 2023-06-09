import React from 'react'
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Footer from '../components/Footer/FooterBar'
import Almacen from '../components/Promises/AlmacenP'
import Banner from '../components/Bootstrap/banner'


const pagAlmacen = () => {

  

  return (
    <div>
        <Logo/>
        <Banner />
        <Container/>
        <h1 className='titulo'>Almacen</h1>
        <Almacen/>
        <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]}/>      
    </div>
  )
}

export default pagAlmacen