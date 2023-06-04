import React, { useState } from 'react'
import { createContext } from 'react'


export const CarritoContext = createContext("");

const ProveedorCarrito = ({ children }) => {

  const [carrito, setcarrito] = useState([])
  const addCarrito = (item) => setcarrito([...carrito,item])

  return (
    <CarritoContext.Provider value={{carrito, addCarrito}}>
      {children}
    </CarritoContext.Provider>


    
  )
}


export default ProveedorCarrito
