import React from 'react';
import '../styles/style.css'
import '../App.css'
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Footer from '../components/Footer/FooterBar'
import Banner from '../components/Bootstrap/banner'
import Nosotros from '../components/Bootstrap/nosotros'

const pagSobreNos = () => {
    return (
        <div>
            <Logo />
            <Container />
            <Banner />
            <h1 className='titulo'>Sobre Nosotros</h1>
            <Nosotros/>
            <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]} />


        </div>
    );
};

export default pagSobreNos;