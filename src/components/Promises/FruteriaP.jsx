import React, { useEffect, useState } from 'react';

import banana from '../../assets/Fruteria/bananas.jpg'
import cebolla from '../../assets/Fruteria/cebolla.jpg'
import frutilla from '../../assets/Fruteria/frutilla.jpg'
import kiwi from '../../assets/Fruteria/kiwi.jpg'
import lechuga from '../../assets/Fruteria/lechuga.jpg'
import mandarina from '../../assets/Fruteria/mandarina.jpg'
import manzana from '../../assets/Fruteria/manzana.jpg'
import morronr from '../../assets/Fruteria/morronR.jpg'
import morronv from '../../assets/Fruteria/morronV.jpg'
import naranja from '../../assets/Fruteria/naranja.jpg'
import tomate from '../../assets/Fruteria/tomate.jpg'
import zanahoria from '../../assets/Fruteria/zanahoria.jpg'

import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';



const fruteria = [


    {
        Nombre: 'Banana',
        Imagen: banana,
        Detalle: 'Precio por unidad',
        Precio: '$150'
    },

    {
        Nombre: 'Cebolla',
        Imagen: cebolla,
        Detalle: 'Precio por unidad',
        Precio: '$125'

    },

    {
        Nombre: 'Frutilla',
        Imagen: frutilla,
        Detalle: 'Precio por unidad',
        Precio: '$32'
    },

    {
        Nombre: 'Kiwi',
        Imagen: kiwi,
        Detalle: 'Precio por unidad',
        Precio: '$60'

    },

    {
        Nombre: 'Lechuga',
        Imagen: lechuga,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Mandarina',
        Imagen: mandarina,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Manzana',
        Imagen: manzana,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Morron Rojo',
        Imagen: morronr,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Morron Verde',
        Imagen: morronv,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Naranja',
        Imagen: naranja,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },

    {
        Nombre: 'Tomate',
        Imagen: tomate,
        Detalle: 'Precio por unidad',
        Precio: '$50'
    },

    {
        Nombre: 'Zanahoria',
        Imagen: zanahoria,
        Detalle: 'Precio por unidad',
        Precio: '$45'

    },





]

const FruteriaP  = () => {
    const [loadfrut, setloadfrut] = useState(false)
    const [fruterias, setfruterias] = useState([])
   

    useEffect(() => {
        setloadfrut(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then((res) => {

            console.log(res)
            setfruterias(fruteria)
            setloadfrut(false)

        }).catch((err) => console.log(err))

    }, [])



    return (
        
        <div>
            {loadfrut && <Spinner/>}

            {!loadfrut && fruterias.length >0 && 

            <div className='articulos'>

                 {fruteria.map((fruteria,index)=>(
                       <Articulos key={index} Imagen={fruteria.Imagen} Nombre={fruteria.Nombre} Detalle ={fruteria.Detalle} Precio={fruteria.Precio}/>

                 ))}
            </div>
            }

        </div>
    );
};

export default FruteriaP;