import React, { useEffect, useState, useContext } from 'react';

import Spinner from '../Bootstrap/Spinner';
import Articulos from '../Card/CardArticulos';
import { ProductoContext } from '../../context/ProveedorProducto';
import { CarritoContext } from '../../context/ProveedorCarrito';
import { useNavigate } from 'react-router-dom';



const CarniceriaP = () => {


    const [loadmeat, setloadmeat] = useState(false)
    const [carnes, setcarnes] = useState([])
    const { carniceria } = useContext(ProductoContext)
    const { carrito, addCarrito } = useContext(CarritoContext)

    const navigate = useNavigate()

    useEffect(() => {
        setloadmeat(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then(() => {

            
            setcarnes(carniceria)
            setloadmeat(false)

        }).catch()

    }, [])



    return (
        <div>
            <h2 className='fs-1 d-flex align-items-center justify-content-center' ><ion-icon name="cart-outline"></ion-icon> {carrito.length}</h2>
            <button className='btn btn-success' onClick={() => navigate('/carrito')}>Ver Carrito</button>
            {loadmeat && <Spinner />}

            {!loadmeat && carniceria.length > 0 &&

                <div className='articulos'>

                    {carnes.map((item) => (
                        <Articulos key={item.Codigo} addCarrito={addCarrito} {...item} />

                    ))}
                </div>
            }

        </div>
    );
};

export default CarniceriaP;