import React from 'react'
import { useState, useEffect } from 'react'
import useColor from '../Hooks/useColor'
import { useNavigate } from 'react-router-dom'



const CardArticulos = ({ Codigo,Nombre,Categoria, Detalle, Imagen, Precio, addCarrito, inCarrito,Contador }) => {


    const [numero, setnumero] = useState(0)
    const [limitado, setLimitado] = useState(false)
    const [negativo, setNegativo] = useState(false)
    const [stock, setstock] = useState(10)
    
    
    

    const sumar = () => setnumero(numero + 1);
    const restar = () => setnumero(numero - 1);
    const resetear = () => setnumero(0);
    const haystock = () => setstock(stock - numero)
    
    const navigate = useNavigate()
    


    const { variarColor } = useColor(numero)



    useEffect(() => {

        if (numero >= stock) {
            setLimitado(true)
        }

        return () => {
            setLimitado(false)

        }

    }, [numero])


    useEffect(() => {

        if (numero <= 0) {
            setNegativo(true)
        }

        return () => {
            setNegativo(false)

        }

    }, [numero])

    return (

        <div className="card-body" style={{ width: '30rem' }}>
          {!inCarrito && (  <img src={Imagen} className="card-img-top" alt="..." />)}
            <div className="card-body ">
                
                <h1 className="card-title">{Nombre}</h1>
                <p className="card-title">{Detalle}</p>
                <h4 className="card-title">${Precio}</h4>
                {inCarrito && <div>
                    <h4>Cantidad: {Contador}</h4>
                    <h3>Total: ${Contador * Precio}</h3>
                                                    
                    </div>}
                
                {!inCarrito && (
                    <div className={`${limitado}`}>

                        <h3 className='text-primary'>Cantidad:{numero}</h3>
                        <div className='botones'>
                            <div >
                                <button disabled={limitado} className='btn btn-success btn-lg' onClick={sumar}> + </button>
                            </div>

                            <div>
                                <button disabled={negativo} className='btn btn-danger btn-lg' onClick={restar} > - </button>
                            </div>

                            <div>
                                <button disabled={negativo} className='btn btn-info btn-lg' onClick={() => { haystock(); resetear(); addCarrito({Nombre,Precio,Imagen,Contador:numero }) }}>Agregar</button>
                            </div>


                        </div>
                        <div><h3 style={{ color: variarColor(stock) }}> Stock: {stock}</h3></div>
                        <div><button onClick={()=>navigate(`/${Categoria}/${Codigo}`)} className="btn btn-secondary p-2">Ver mas</button></div>
                    </div>
                )}

            </div>
        </div>

    )
}


export default CardArticulos