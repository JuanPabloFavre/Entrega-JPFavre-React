import React, { useContext, useEffect, useState } from 'react';

import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';
import { ProductoContext } from '../../context/ProveedorProducto';
import { CarritoContext } from '../../context/ProveedorCarrito';
import { useNavigate } from 'react-router-dom';



const BebidaP = () => {
    const [loadbebid, setloadbebid] = useState(false)
    const [bebidas, setbebidas] = useState([])
    const {bebida} = useContext(ProductoContext)
    const {carrito, addCarrito} = useContext(CarritoContext)
   
    const navigate = useNavigate()

    useEffect(() => {
        setloadbebid(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then((res) => {

            
            setbebidas(bebida)
            setloadbebid(false)

        }).catch()

    }, [])



    return (
        
        <div>
             <h2 className='fs-1 d-flex align-items-center justify-content-center' ><ion-icon name="cart-outline"></ion-icon> {carrito.length}</h2>
            <button className='btn btn-success' onClick={()=>navigate('/carrito')}>Ver Carrito</button>
            {loadbebid && <Spinner/>}

            {!loadbebid && bebida.length >0 && 

            <div className='articulos'>

                 {bebidas.map((item)=>(
                       <Articulos addCarrito={addCarrito} {...item} />

                 ))}
            </div>
            }

        </div>
    );
};



export default BebidaP;