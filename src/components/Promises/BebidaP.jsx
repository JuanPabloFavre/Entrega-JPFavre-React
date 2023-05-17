import React, { useEffect, useState } from 'react';

import coca from '../../assets/Bebidas/cocacola.jpg'
import fanta from '../../assets/Bebidas/fanta.jpeg'
import sprite from '../../assets/Bebidas/sprite.jpg'
import ades from '../../assets/Bebidas/ades.jpg'
import baggio from '../../assets/Bebidas/baggio.jpg'
import bc from '../../assets/Bebidas/bc.jpg'
import citric from '../../assets/Bebidas/citric.jpg'
import dairyco from '../../assets/Bebidas/dairyco.jpg'
import pepsi from '../../assets/Bebidas/pepsi.jpg'
import pomelo from '../../assets/Bebidas/pomelo.jpg'
import tonica from '../../assets/Bebidas/tonica.jpg'
import watts from '../../assets/Bebidas/watts.jpg'

import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';



const bebida = [


    {
        Nombre: 'Coca Cola',
        Imagen: coca,
        Detalle: 'Precio por unidad',
        Precio: '$150'
    },

    {
        Nombre: 'Fanta',
        Imagen: fanta,
        Detalle: 'Precio por unidad',
        Precio: '$125'

    },

    {
        Nombre: 'Sprite',
        Imagen: sprite,
        Detalle: 'Precio por unidad',
        Precio: '$32'
    },

    {
        Nombre: 'BC',
        Imagen: bc,
        Detalle: 'Precio por unidad',
        Precio: '$60'

    },

    {
        Nombre: 'Ades',
        Imagen: ades,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Baggio',
        Imagen: baggio,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Citric',
        Imagen: citric,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Dairyco',
        Imagen: dairyco,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Pepsi',
        Imagen: pepsi,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Tonida',
        Imagen: tonica,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Watts',
        Imagen: watts,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Pomelo',
        Imagen: pomelo,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },



]

const BebidaP = () => {
    const [loadbebid, setloadbebid] = useState(false)
    const [bebidas, setbebidas] = useState([])
   

    useEffect(() => {
        setloadbebid(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then((res) => {

            console.log(res)
            setbebidas(bebida)
            setloadbebid(false)

        }).catch((err) => console.log(err))

    }, [])



    return (
        
        <div>
            {loadbebid && <Spinner/>}

            {!loadbebid && bebida.length >0 && 

            <div className='articulos'>

                 {bebidas.map((bebida,index)=>(
                       <Articulos key={index} Imagen={bebida.Imagen} Nombre={bebida.Nombre} Detalle ={bebida.Detalle} Precio={bebida.Precio}/>

                 ))}
            </div>
            }

        </div>
    );
};



export default BebidaP;