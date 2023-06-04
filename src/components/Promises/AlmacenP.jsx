import React, { useContext, useEffect, useState } from 'react';
import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';
import { ProductoContext } from '../../context/ProveedorProducto';
import { CarritoContext } from '../../context/ProveedorCarrito';
import { useNavigate } from 'react-router-dom';


const AlmacenP  = () => {
    
    const [loadalm, setloadalm] = useState(false)
    const [almacenes, setalmacenes] = useState([])
    const {almacen} = useContext(ProductoContext)
    const {carrito, addCarrito} = useContext(CarritoContext)
    
    const navigate = useNavigate()
      
    useEffect(() => {
        setloadalm(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then(() => {

            
            setalmacenes(almacen)
            setloadalm(false)
            

        }).catch()

    }, [])



    return (
        
        <div>
            
            <h2 className='fs-1 d-flex align-items-center justify-content-center' ><ion-icon name="cart-outline"></ion-icon> {carrito.length}</h2>
            <button className='btn btn-success' onClick={()=>navigate('/carrito')}>Ver Carrito</button>
            {loadalm && <Spinner/>}
            
            {!loadalm && almacenes.length >0 && 

            <div className='articulos'>
                    {almacen.map((item)=>(
                       <Articulos addCarrito={addCarrito} {...item} />
                       

                 ))}
            </div>
            }

        </div>
    );
};

export default AlmacenP;