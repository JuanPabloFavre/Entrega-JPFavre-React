import React from 'react'
import Contador from '../Counter/Contador'


const Card = (props) => {
    const{Nombre, Detalle,Imagen,Precio, Stock} = props
    return (

        <div className="card" style={{width: '18rem'}}>
            <img src={Imagen} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">{Nombre}</h5>
                    <p className="card-text">{Detalle}</p>
                    <p className="card-text">{Precio}</p>
                    <p className="card-text">{Stock}</p>
                    <Contador/>

                </div>
        </div>

    )
}

export default Card