import { useState, useEffect } from 'react'
import useColor from '../Hooks/useColor'


const Contador = (props) => {

    const {initiaValue} = props

    const [numero, setnumero] = useState(initiaValue || 0)
    const [limitado, setLimitado] = useState(false)
    const [negativo, setNegativo] = useState(false)
    const [stock, setstock] = useState(10)


    const sumar = () => setnumero(numero + 1);
    const restar = () => setnumero(numero - 1);
    const resetear = () => setnumero(0);
    const haystock = () => setstock(stock - numero)
    

    const {variarColor} = useColor(numero)
  

    useEffect(() => {

        if(numero >= stock){
            setLimitado(true)
        }

        return()=>{
            setLimitado(false)

            } 

    },[numero])


    useEffect(() => {

         if(numero <= 0){
        setNegativo(true)
         }

    return()=>{
        setNegativo(false)

        } 

},[numero])


    return (
        <div className = {`${limitado}`}>
            
            <h3 className='text-primary'>Cantidad:{numero}</h3>
            <div className='botones'>
                <div >
                    <button disabled={limitado} className='btn btn-success btn-lg' onClick={sumar}> + </button>
                </div>

                <div>
                    <button disabled={negativo} className='btn btn-danger btn-lg' onClick={restar} > - </button>
                </div>

                <div>
                <button disabled={negativo} className='btn btn-info btn-lg' onClick={()=>{haystock();resetear()}}>Agregar</button>
                </div>
                
            </div>
            <div><h3 style={{color: variarColor(stock)}}> Stock: {stock}</h3></div>
        </div>


    )
}

export default Contador