import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

const carniceria = [
    {
        Nombre: 'Carne Picada',
        Imagen: picada,
        Detalle: 'Precio por Kg',
        Precio: '$350'
        
    },
  
    {
        Nombre: 'Vacio',       
        Imagen: vacio,
        Detalle: 'Precio por Kg',
        Precio: '$ 562'
       
    },
  
    {
        Nombre: 'Asado de Tira',
        Imagen: asado,
        Detalle: 'Precio por Kg',
        Precio:  '$ 456'
       
    },
  
    {
        Nombre: 'Picaña de Exportacion',
        Imagen: picana,
        Detalle: 'Precio por Kg',
        Precio:  '$ 690'
        
    },
    {
        Nombre: 'Matambre de Cerdo',
        Imagen: matambre,
        Detalle: 'Precio por Kg',
        Precio:  '$500'
      
    },

    {
        Nombre: 'Chorizo Mezcla',
        Imagen: chorizo,
        Detalle: 'Precio por Kg',
        Precio: '$ 390'
      
    },
    {
        Nombre: 'Entraña',
        Imagen: entrana,
        Detalle: 'Precio por Kg',
        Precio: '$550'
        
    },
  
    {
        Nombre: 'Hamburguesa',       
        Imagen: hamburguesa,
        Detalle: 'Precio por Uni',
        Precio: '$ 62'
       
    },
  
    {
        Nombre: 'Ojo de Bife',
        Imagen: ojodebife,
        Detalle: 'Precio por Kg',
        Precio:  '$ 856'
       
    },
  
    {
        Nombre: 'Rack de Cordero',
        Imagen: rack,
        Detalle: 'Precio por Kg',
        Precio:  '$ 990'
        
    },
    {
        Nombre: 'Solomillo',
        Imagen: solomillo,
        Detalle: 'Precio por Kg',
        Precio:  '$800'
      
    },

    {
        Nombre: 'Tomahawk',
        Imagen: tomahawk,
        Detalle: 'Precio por Kg',
        Precio: '$ 890'
      
    }
  
  
  ]
const CardDetail = () => {
    return (

       <Fragment>
        <button onClick={()=>Navigate()}>Volver</button>
        <h1>Detalle</h1>


       </Fragment>
    );
};

export default CardDetail;