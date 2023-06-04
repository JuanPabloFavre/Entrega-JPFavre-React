import React, { useEffect, useState, useContext } from 'react';



import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';
import { ProductoContext } from '../../context/ProveedorProducto';
import { CarritoContext } from '../../context/ProveedorCarrito';
import { useNavigate } from 'react-router-dom';





const FruteriaP = () => {
    const [loadfrut, setloadfrut] = useState(false)
    const [fruterias, setfruterias] = useState([])
    const { fruteria } = useContext(ProductoContext)
    const { carrito, addCarrito } = useContext(CarritoContext)

    const navigate = useNavigate()


    useEffect(() => {
        setloadfrut(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then(() => {

            
            setfruterias(fruteria)
            setloadfrut(false)

        }).catch()

    }, [])



    return (

        <div>
            <h2 className='fs-1 d-flex align-items-center justify-content-center' ><ion-icon name="cart-outline"></ion-icon> {carrito.length}</h2>
            <button className='btn btn-success' onClick={() => navigate('/carrito')}>Ver Carrito</button>
            {loadfrut && <Spinner />}

            {!loadfrut && fruteria.length > 0 &&

                <div className='articulos'>

                    {fruterias.map((item) => (
                        <Articulos addCarrito={addCarrito} {...item} />

                    ))}
                </div>
            }

        </div>
    );
};

export default FruteriaP;