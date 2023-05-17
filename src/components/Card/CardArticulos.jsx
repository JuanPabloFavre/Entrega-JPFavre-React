import React from 'react'
import Contador from '../Counter/Contador'



const CardCarniceria = (props) => {
    const{Nombre, Detalle,Imagen,Precio} = props
    
    return (

        <div className="card-body" style={{width: '30rem'}}>
            <img src={Imagen} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h1 className="card-title">{Nombre}</h1>
                    <p className="card-title">{Detalle}</p>
                    <p className="card-title">{Precio}</p>
                    <Contador/>             
                   
                   
                </div>
        </div>

    )
}

export default CardCarniceria