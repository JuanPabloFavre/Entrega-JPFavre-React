import React, { useEffect, useState, useContext } from 'react';
import Logo from '../components/Logo'
import Container from '../Layout/Container'
import Banner from '../components/Bootstrap/banner'
import Footer from '../components/Footer/FooterBar'
import {useParams} from 'react-router-dom'
import { ProductoContext } from '../context/ProveedorProducto';


 


const DetalleAlmacen = () => {

    
    const {Codigo} = useParams()
    
    const [articulo, setArticulo] = useState({})
    const {almacen} = useContext(ProductoContext)
 
    

    useEffect(() => {

        const filter = almacen.find((articulo)=> articulo.Codigo === Codigo) 
        
        setArticulo(filter)
    }, [])


    

    return (
        <div>
            <Logo />
            <Banner />
            <Container />
            <h1 className='titulo'>Detalle</h1>
            <div className='d-flex justify-content-center align-items-center flex-column'>
            
            
            
                <div className="card-body" style={{ width: '30rem' }}>
            <img src={articulo.Imagen} className="card-img-top" alt="..." />
            <div className="card-body ">
                 <h1 className="card-title">{articulo.Nombre}</h1>
                 <h2 className="card-title">{articulo.Detalle}</h2>
                 <h3 className="card-title">$ {articulo.Precio}</h3>
                 
            </div>
            </div>
                
            </div>
            <Footer items={[<ion-icon name="logo-facebook"></ion-icon>, <ion-icon name="logo-twitter"></ion-icon>, <ion-icon name="logo-instagram"></ion-icon>]} />
        </div>
    );
};

export default DetalleAlmacen;