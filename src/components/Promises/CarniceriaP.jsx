import React, { useEffect, useState } from 'react';

import Spinner from '../Bootstrap/Spinner';
import Articulos from '../Card/CardArticulos';

import picada from '../../assets/Carniceria/picada.jpg'
import vacio from '../../assets/Carniceria/vacio.jpg'
import asado from '../../assets/Carniceria/asado.jpg'
import picana from '../../assets/Carniceria/picana.jpg'
import matambre from '../../assets/Carniceria/matambre.jpg'
import chorizo from '../../assets/Carniceria/chorizo.jpg'
import solomillo from '../../assets/Carniceria/solomillo .jpg'
import entrana from '../../assets/Carniceria/entrana.jpg'
import hamburguesa from '../../assets/Carniceria/hamburguesa.jpg'
import ojodebife from '../../assets/Carniceria/ojodebife.jpg'
import rack from '../../assets/Carniceria/rackdeCordero.jpg'
import tomahawk from '../../assets/Carniceria/tomahawk.jpg'





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



const CarniceriaP = () => {

    
    const [loadmeat, setloadmeat] = useState(false)
    const [carnes, setcarnes] = useState([])
   

    useEffect(() => {
        setloadmeat(true)

        const iniciar = new Promise((resolve, rejetc) => {
            setTimeout(() => {
                resolve()
            }, 2000);


        })

        iniciar.then((res) => {

            console.log(res)
            setcarnes(carniceria)
            setloadmeat(false)

        }).catch((err) => console.log(err))

    }, [])



    return (
        <div>
            {loadmeat && <Spinner/>}

            {!loadmeat && carnes.length >0 && 

            <div className='articulos'>

                 {carniceria.map((carniceria,index)=>(
                       <Articulos key={index} Imagen={carniceria.Imagen} Nombre={carniceria.Nombre} Detalle ={carniceria.Detalle} Precio={carniceria.Precio}/>

                 ))}
            </div>
            }

        </div>
    );
};

export default CarniceriaP;