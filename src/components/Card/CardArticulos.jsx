import React from 'react'
import Contador from '../Counter/Contador'
import {useNavigate} from 'react-router-dom'


const CardCarniceria = (props) => {
    const{Nombre, Detalle,Imagen,Precio} = props
    const navigate = useNavigate()
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