import React, { useEffect, useState } from 'react';

import aceite from '../../assets/Almacen/aceite.jpg'
import vinagre from '../../assets/Almacen/vinagre.jpg'
import arroz from '../../assets/Almacen/arroz.jpg'
import azucar from '../../assets/Almacen/azucar.jpg'
import fideos from '../../assets/Almacen/fideos.jpg'
import harina from '../../assets/Almacen/harina.jpg'
import ketchup from '../../assets/Almacen/ketchup.jpg'
import mayonesa from '../../assets/Almacen/mayonesa.jpg'
import monas from '../../assets/Almacen/monas.jpg'
import mostaza from '../../assets/Almacen/mostaza.jpg'
import oliva from '../../assets/Almacen/oliva.jpg'
import sal from '../../assets/Almacen/sal.jpg'

import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';



const almacen = [


    {
        Nombre: 'Aceite',
        Imagen: aceite,
        Detalle: 'Precio por unidad',
        Precio: '$150'
    },

    {
        Nombre: 'Vinagre',
        Imagen: vinagre,
        Detalle: 'Precio por unidad',
        Precio: '$125'

    },

    {
        Nombre: 'Arroz',
        Imagen: arroz,
        Detalle: 'Precio por unidad',
        Precio: '$32'
    },

    {
        Nombre: 'Azucar',
        Imagen: azucar,
        Detalle: 'Precio por unidad',
        Precio: '$60'

    },

    {
        Nombre: 'Fideos',
        Imagen: fideos,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Harina',
        Imagen: harina,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Ketchup',
        Imagen: ketchup,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Mayonesa',
        Imagen: mayonesa,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Moñas',
        Imagen: monas,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Mostaza',
        Imagen: mostaza,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Aceite de Oliva',
        Imagen: oliva,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Sal fina',
        Imagen: sal,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },





]

const AlmacenP  = () => {
    const [loadalm, setloadalm] = useState(false)
    const [almacenes, setalmacenes] = useState([])
   

    useEffect(() => {
        setloadalm(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then((res) => {

            console.log(res)
            setalmacenes(almacen)
            setloadalm(false)

        }).catch((err) => console.log(err))

    }, [])



    return (
        
        <div>
            {loadalm && <Spinner/>}

            {!loadalm && almacenes.length >0 && 

            <div className='articulos'>

                 {almacen.map((almacen,index)=>(
                       <Articulos key={index} Imagen={almacen.Imagen} Nombre={almacen.Nombre} Detalle ={almacen.Detalle} Precio={almacen.Precio}/>
                       

                 ))}
            </div>
            }

        </div>
    );
};

export default AlmacenP;