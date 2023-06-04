import React, { useState } from 'react';
import { useEffect } from 'react';
import '../../styles/style.css';
import Spinner from '../Bootstrap/Spinner'
import almacen from '../../assets/menu/almacen.jpg'
import carniceria from '../../assets/menu/carniceria.jpg'
import fruteria from '../../assets/menu/fruteria.jpg'
import bebida from '../../assets/menu/Gaseosas.jpg'
import comuida from '../../assets/menu/comida.jpg'
import limpieza from '../../assets/menu/limpieza.jpg'
import CardMenu from '../Card/CardMenu';


const producto = [
    {
        Nombre: 'Almacen',
        Imagen: almacen,
        path: '/almacen'
                
    },
  
    {
        Nombre: 'Carniceria',       
        Imagen: carniceria,
        path: '/carniceria'
       
    },
  
    {
        Nombre: 'Fruteria',
        Imagen: fruteria,
        path: '/fruteria'
       
    },
  
    {
        Nombre: 'Bebidas',
        Imagen: bebida,
        path: '/bebidas'
        
    },
    {
        Nombre: 'Limpieza',
        Imagen: limpieza,
        path: '/limpieza'
      
    },

    {
       
        Nombre: 'Menu',
        Imagen: comuida,
        path: '/comida'
      
    }
  
  
  ]

const Menu = () => {

    const [loading, setloading] = useState(false)
    const [productos, setProductos] = useState([])



    useEffect(() => {
        setloading(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then(() => {

            
            setProductos(producto)
            setloading(false)

        }).catch()

    }, [])



    return (
        <div>
            {loading && <Spinner />}

            {!loading && productos.length > 0 &&
                  <div className='articulosInicio'>
                {producto.map((producto, index) => (
                    <CardMenu key={index} Nombre={producto.Nombre} Imagen={producto.Imagen} path={producto.path}/>
                    
                                                           
                ))}
               

            </div> 
            }

        </div>

    );
};

export default Menu;