import React, { useEffect, useState, useContext } from 'react';

import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';
import { ProductoContext } from '../../context/ProveedorProducto';
import { CarritoContext } from '../../context/ProveedorCarrito';
import { useNavigate } from 'react-router-dom';


const LimpiezaP = () => {

    const [loadlimp, setloadlimp] = useState(false)
    const [limpiezas, setlimpiezas] = useState([])
    const { limpieza } = useContext(ProductoContext)
    const { carrito, addCarrito } = useContext(CarritoContext)

    const navigate = useNavigate()

    useEffect(() => {

        setloadlimp(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then(() => {

            
            setlimpiezas(limpieza)
            setloadlimp(false)

        }).catch()

    }, [])


    return (
        <div>
            <h2 className='fs-1 d-flex align-items-center justify-content-center' ><ion-icon name="cart-outline"></ion-icon> {carrito.length}</h2>
            <button className='btn btn-success' onClick={() => navigate('/carrito')}>Ver Carrito</button>
            {loadlimp && <Spinner />}

            {!loadlimp && limpieza.length > 0 &&

                <div className='articulos'>

                    {limpiezas.map((item) => (
                        <Articulos key={item.Codigo} addCarrito={addCarrito} {...item} />

                    ))}
                </div>
            }

        </div>
    );
};

export default LimpiezaP;