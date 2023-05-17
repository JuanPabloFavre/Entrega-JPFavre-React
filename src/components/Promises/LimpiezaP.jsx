import React, { useEffect, useState } from 'react';
import esponja from '../../assets/Limpieza/Esponja.jpg';
import aguajane from '../../assets/Limpieza/aguajane.jpg';
import bolsaresiduos from '../../assets/Limpieza/bolsaresiduos.jpg';
import cifcrema from '../../assets/Limpieza/cifcrema.jpg';
import cifvidrios from '../../assets/Limpieza/cifvidrios.jpg';
import escoba from '../../assets/Limpieza/escoba.jpg';
import escobilla from '../../assets/Limpieza/escobilla.jpg';
import limpiador from '../../assets/Limpieza/limpiador.jpg';
import pala from '../../assets/Limpieza/pala.jpg';
import panales from '../../assets/Limpieza/panales.jpg';
import papelcocina from '../../assets/Limpieza/papelcocina.jpg';
import papelhigienico from '../../assets/Limpieza/papelhigienico.jpg';
import Articulos from '../Card/CardArticulos'
import Spinner from '../Bootstrap/Spinner';

const limpieza = [

    {
        Nombre: 'Esponja',
        Imagen: esponja,
        Detalle: 'Precio por unidad',
        Precio: '$ 15'
    },
    {
        Nombre: 'Lavandina',
        Imagen: aguajane,
        Detalle: 'Precio por unidad',
        Precio: '$ 50'
    },
    {
        Nombre: 'Bolsas para Residuos',
        Imagen: bolsaresiduos,
        Detalle: 'Precio por pack de 6',
        Precio: '$ 15'
    },
    {
        Nombre: 'Cif Crema',
        Imagen: cifcrema,
        Detalle: 'Precio por unidad',
        Precio: '$ 90'
    },
    {
        Nombre: 'Cif Limpia Vidrios',
        Imagen: cifvidrios,
        Detalle: 'Precio por unidad',
        Precio: '$ 110'
    },
    {
        Nombre: 'Escoba',
        Imagen: escoba,
        Detalle: 'Precio por unidad',
        Precio: '$ 35'
    },
    {
        Nombre: 'Escobilla',
        Imagen: escobilla,
        Detalle: 'Precio por unidad',
        Precio: '$ 65'
    },
    {
        Nombre: 'Limpiador',
        Imagen: limpiador,
        Detalle: 'Precio por unidad',
        Precio: '$ 115'
    },
    {
        Nombre: 'Pala',
        Imagen: pala,
        Detalle: 'Precio por unidad',
        Precio: '$ 85'
    },
    {
        Nombre: 'Pañales',
        Imagen: panales,
        Detalle: 'Precio por unidad',
        Precio: '$ 315'
    },
    {
        Nombre: 'Papel de Cocina',
        Imagen: papelcocina,
        Detalle: 'Precio por unidad',
        Precio: '$ 145'
    },
    {
        Nombre: 'Papel Higienico',
        Imagen: papelhigienico,
        Detalle: 'Precio por unidad',
        Precio: '$ 185'
    }
]



const LimpiezaP = () => {

const [loadlimp, setloadlimp] = useState(false)
const [limpiezas, setlimpiezas] = useState([])


useEffect (() =>{

setloadlimp(true)

const iniciar = new Promise((resolve, rejetc) => {
    setTimeout(() => {
        resolve()
    }, 2000);


})

iniciar.then((res) => {

    console.log(res)
    setlimpiezas(limpieza)
    setloadlimp(false)

}).catch((err) => console.log(err))

}, [])


    return (
        <div>
            {loadlimp && <Spinner/>}
            {!loadlimp && limpiezas.length > 0 &&
            
            <div className='articulos'>

               {limpieza.map((limpieza, index)=>(
                <Articulos key={index} Imagen={limpieza.Imagen} Nombre ={limpieza.Nombre} Detalle={limpieza.Detalle} Precio={limpieza.Precio}/>


               ))}     

            </div>
            
            
            
            }



        </div>
    );
};

export default LimpiezaP;