import React, { useEffect, useState, useContext } from 'react';



import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';
import { ProductoContext } from '../../context/ProveedorProducto';
import { CarritoContext } from '../../context/ProveedorCarrito';
import { useNavigate } from 'react-router-dom';





const ComidaP = () => {
    const [loadcomid, setloadcomid] = useState(false)
    const [comidas, setcomidas] = useState([])
    const { comida } = useContext(ProductoContext)
    const { carrito, addCarrito } = useContext(CarritoContext)

    const navigate = useNavigate()

    useEffect(() => {
        setloadcomid(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then(() => {

            
            setcomidas(comida)
            setloadcomid(false)

        }).catch()

    }, [])



    return (

        <div>
            <h2 className='fs-1 d-flex align-items-center justify-content-center' ><ion-icon name="cart-outline"></ion-icon> {carrito.length}</h2>
            <button className='btn btn-success' onClick={() => navigate('/carrito')}>Ver Carrito</button>
            {loadcomid && <Spinner />}

            {!loadcomid && comida.length > 0 &&

                <div className='articulos'>

                    {comidas.map((item) => (
                        <Articulos key={item.Codigo} addCarrito={addCarrito} {...item} />

                    ))}
                </div>
            }

        </div>
    );
};

export default ComidaP;