import React from 'react';
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Banner from '../components/Bootstrap/banner'
import Footer from '../components/Footer/FooterBar'

 


const Detalle = () => {

    
    
    return (
        <div>
            <Logo />
            <Banner />
            <Container />
            <h1 className='titulo'>Detalle</h1>
            
            <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]} />
        </div>
    );
};

export default Detalle;