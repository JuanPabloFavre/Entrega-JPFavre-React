import React from 'react'
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Menu from '../components/Promises/Menu'
import FooterBar from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'



const pagInicio = () => {

  return (
    <div className="App">
     
        <Logo/>
        <Container/>
        <Banner />
        <h1 className='titulo'>Inicio</h1>
        <Menu/>
        <FooterBar items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]}/>             
    </div>
  )
}

export default pagInicio