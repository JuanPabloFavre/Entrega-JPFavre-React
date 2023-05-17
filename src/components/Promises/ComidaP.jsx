import React, { useEffect, useState } from 'react';

import hambur1 from '../../assets/Cocina/hambur1.jpg'
import hambur2 from '../../assets/Cocina/hambur2.jpg'
import promo1 from '../../assets/Cocina/promo1.jpg'
import combo2 from '../../assets/Cocina/combo2.jpg'
import Lehmeyun from '../../assets/Cocina/Lehmeyun.jpg'
import chivitoalpan from '../../assets/Cocina/chivitoalpan.jpg'
import chivitoalplato from '../../assets/Cocina/chivitoalplato.jpg'
import chorialpan from '../../assets/Cocina/chorialpan.jpg'
import pizza from '../../assets/Cocina/pizza.jpg'
import quesadillas from '../../assets/Cocina/quesadillas.jpg'
import tacosCarne from '../../assets/Cocina/tacosCarne.jpg'
import panchos from '../../assets/Cocina/panchos.jpg'

import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';



const comida = [


    {
        Nombre: 'Hamburguesa 1',
        Imagen: hambur1,
        Detalle: 'Precio por unidad',
        Precio: '$150'
    },

    {
        Nombre: 'Hamburguesa 2',
        Imagen: hambur2,
        Detalle: 'Precio por unidad',
        Precio: '$125'

    },

    {
        Nombre: 'Promo Hamburguesa',
        Imagen: promo1,
        Detalle: 'Precio por unidad',
        Precio: '$32'
    },

    {
        Nombre: 'Combo 2x1 Hamburguesa',
        Imagen: combo2,
        Detalle: 'Precio por unidad',
        Precio: '$60'

    },

    {
        Nombre: 'Lehmeyum',
        Imagen: Lehmeyun,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Chivito al Pan',
        Imagen: chivitoalpan,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Chivito al Plato',
        Imagen: chivitoalplato,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Chorizo al Pan',
        Imagen: chorialpan,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Pizza Familiar',
        Imagen: pizza,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Quesadillas',
        Imagen: quesadillas,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Tacos de Carne',
        Imagen: tacosCarne,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Panchos con Muzza',
        Imagen: panchos,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },





]

const ComidaP  = () => {
    const [loadcomid, setloadcomid] = useState(false)
    const [comidas, setcomidas] = useState([])
   

    useEffect(() => {
        setloadcomid(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then((res) => {

            console.log(res)
            setcomidas(comida)
            setloadcomid(false)

        }).catch((err) => console.log(err))

    }, [])



    return (
        
        <div>
            {loadcomid && <Spinner/>}

            {!loadcomid && comidas.length >0 && 

            <div className='articulos'>

                 {comida.map((comida,index)=>(
                       <Articulos key={index} Imagen={comida.Imagen} Nombre={comida.Nombre} Detalle ={comida.Detalle} Precio={comida.Precio}/>

                 ))}
            </div>
            }

        </div>
    );
};

export default ComidaP;