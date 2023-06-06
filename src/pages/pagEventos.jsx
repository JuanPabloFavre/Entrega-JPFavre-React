import React from 'react';
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Footer from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'
import Eventos from '../components/Bootstrap/eventos'

const pagEventos = () => {
    return (
        <div>
            <Logo />
            <Banner />
            <Container />
            <h1 className='titulo'>Eventos</h1>
            <Eventos />
            <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]} />
        </div>
    );
};

export default pagEventos;