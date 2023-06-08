import React, { useContext } from 'react';
import { CarritoContext } from '../context/ProveedorCarrito';
import Articulos from '../components/Card/CardArticulos'
import Logo from '../components/Logo';
import Container from '../Layout/Container'
import Footer from '../components/Footer/FooterBar'
import Compra from '../components/Form'



const Carrito = () => {
    
    const { carrito } = useContext(CarritoContext)
    
    const subTotal = carrito.reduce((prev,curr)=>prev + (curr.Precio * curr.Contador),0)
    const impuestos = Math.round(subTotal *  0.22)
    const total = subTotal+impuestos
    return (
        <div className='container '>
            <Logo />
            <Container />
            <h1 className='titulo'>Carrito</h1>
          <div className='articulos-carrito'> {carrito.map((item) => (
                <Articulos inCarrito key={item.Precio}{...item} />
                
            ))}
            
            </div>

            <div className='total-factura'>
            <h4>Sub-Total:${subTotal}</h4>
            <h4>Impuestos:${impuestos}</h4>
            <h3>Total:${total}</h3>
            </div> 
            <Compra compras={carrito} total={total} tot/>
            <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]}/>      
        </div>
    );
};

export default Carrito;