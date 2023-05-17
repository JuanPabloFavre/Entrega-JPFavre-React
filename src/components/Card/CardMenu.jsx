import React from 'react'
import { NavLink } from 'react-router-dom'



const CardMenu = (props) => {
    const{Nombre, Imagen, path} = props
    return (

        <div className="card" style={{width: '30rem'}}>
            <img src={Imagen} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h1 className="card-title">{Nombre}</h1>
                    <NavLink className="link" to={path}>Ver Mas</NavLink>
                                  
                   
                </div>
        </div>

    )
}

export default CardMenu