import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Carniceria from '../pages/pagCarniceria'
import Bebidas from '../pages/pagBebidas'
import Fruteria from '../pages/pagFruteria'
import Almacen from '../pages/pagAlmacen'
import Comida from '../pages/pagComida'
import Inicio from '../pages/pagInicio'
import Limpieza from '../pages/pagLimpieza'
import SobreNos from '../pages/pagSobreNos'
import Contacto from '../pages/pagContacto'
import Eventos from '../pages/pagEventos'





const rutas = () => {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/carniceria' element={<Carniceria/>}/>
            <Route path='/bebidas' element={<Bebidas/>}/>
            <Route path='/fruteria' element={<Fruteria/>}/>
            <Route path='/almacen' element={<Almacen/>}/>
            <Route path='/comida' element={<Comida/>}/>
            <Route path='/limpieza' element={<Limpieza/>}/>
            <Route path='/sobrenosotros' element={<SobreNos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            
        </Routes>

    </BrowserRouter>
  )
}

export default rutas