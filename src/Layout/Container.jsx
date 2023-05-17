import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/CartWidget/Cart';

const navbar_Items = [
  {
    nombre: 'Inicio',
    path: '/'
  },
  {
    nombre:'Eventos',
    path: '/eventos'
  },
  {
    nombre: 'Sobre Nosotros',
    path: '/sobrenosotros'
  },
  {
    nombre: 'Contacto',
    path: '/contacto'
  }
]



const Container = () => {
  return (
    <div>
         <Navbar navbar_Items= {navbar_Items}/> 
         <Cart /> 
         
        
        
        
       
    </div>
    
  )
}

export default Container