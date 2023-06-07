import React from 'react'
import { createContext } from 'react'
import aceite from '../assets/Almacen/aceite.jpg'
import vinagre from '../assets/Almacen/vinagre.jpg'
import arroz from '../assets/Almacen/arroz.jpg'
import azucar from '../assets/Almacen/azucar.jpg'
import fideos from '../assets/Almacen/fideos.jpg'
import harina from '../assets/Almacen/harina.jpg'
import ketchup from '../assets/Almacen/ketchup.jpg'
import mayonesa from '../assets/Almacen/mayonesa.jpg'
import monas from '../assets/Almacen/monas.jpg'
import mostaza from '../assets/Almacen/mostaza.jpg'
import oliva from '../assets/Almacen/oliva.jpg'
import sal from '../assets/Almacen/sal.jpg'

import coca from '../assets/Bebidas/cocacola.jpg'
import fanta from '../assets/Bebidas/fanta.jpeg'
import sprite from '../assets/Bebidas/sprite.jpg'
import ades from '../assets/Bebidas/ades.jpg'
import baggio from '../assets/Bebidas/baggio.jpg'
import bc from '../assets/Bebidas/bc.jpg'
import citric from '../assets/Bebidas/citric.jpg'
import dairyco from '../assets/Bebidas/dairyco.jpg'
import pepsi from '../assets/Bebidas/pepsi.jpg'
import pomelo from '../assets/Bebidas/pomelo.jpg'
import tonica from '../assets/Bebidas/tonica.jpg'
import watts from '../assets/Bebidas/watts.jpg'


import picada from '../assets/Carniceria/picada.jpg'
import vacio from '../assets/Carniceria/vacio.jpg'
import asado from '../assets/Carniceria/asado.jpg'
import picana from '../assets/Carniceria/picana.jpg'
import matambre from '../assets/Carniceria/matambre.jpg'
import chorizo from '../assets/Carniceria/chorizo.jpg'
import solomillo from '../assets/Carniceria/solomillo .jpg'
import entrana from '../assets/Carniceria/entrana.jpg'
import hamburguesa from '../assets/Carniceria/hamburguesa.jpg'
import ojodebife from '../assets/Carniceria/ojodebife.jpg'
import rack from '../assets/Carniceria/rackdeCordero.jpg'
import tomahawk from '../assets/Carniceria/tomahawk.jpg'

import hambur1 from '../assets/Cocina/hambur1.jpg'
import hambur2 from '../assets/Cocina/hambur2.jpg'
import promo1 from '../assets/Cocina/promo1.jpg'
import combo2 from '../assets/Cocina/combo2.jpg'
import Lehmeyun from '../assets/Cocina/Lehmeyun.jpg'
import chivitoalpan from '../assets/Cocina/chivitoalpan.jpg'
import chivitoalplato from '../assets/Cocina/chivitoalplato.jpg'
import chorialpan from '../assets/Cocina/chorialpan.jpg'
import pizza from '../assets/Cocina/pizza.jpg'
import quesadillas from '../assets/Cocina/quesadillas.jpg'
import tacosCarne from '../assets/Cocina/tacosCarne.jpg'
import panchos from '../assets/Cocina/panchos.jpg'

import banana from '../assets/Fruteria/bananas.jpg'
import cebolla from '../assets/Fruteria/cebolla.jpg'
import frutilla from '../assets/Fruteria/frutilla.jpg'
import kiwi from '../assets/Fruteria/kiwi.jpg'
import lechuga from '../assets/Fruteria/lechuga.jpg'
import mandarina from '../assets/Fruteria/mandarina.jpg'
import manzana from '../assets/Fruteria/manzana.jpg'
import morronr from '../assets/Fruteria/morronR.jpg'
import morronv from '../assets/Fruteria/morronV.jpg'
import naranja from '../assets/Fruteria/naranja.jpg'
import tomate from '../assets/Fruteria/tomate.jpg'
import zanahoria from '../assets/Fruteria/zanahoria.jpg'


import esponja from '../assets/Limpieza/Esponja.jpg';
import aguajane from '../assets/Limpieza/aguajane.jpg';
import bolsaresiduos from '../assets/Limpieza/bolsaresiduos.jpg';
import cifcrema from '../assets/Limpieza/cifcrema.jpg';
import cifvidrios from '../assets/Limpieza/cifvidrios.jpg';
import escoba from '../assets/Limpieza/escoba.jpg';
import escobilla from '../assets/Limpieza/escobilla.jpg';
import limpiador from '../assets/Limpieza/limpiador.jpg';
import pala from '../assets/Limpieza/pala.jpg';
import panales from '../assets/Limpieza/panales.jpg';
import papelcocina from '../assets/Limpieza/papelcocina.jpg';
import papelhigienico from '../assets/Limpieza/papelhigienico.jpg';



export const ProductoContext = createContext("")



const ProveedorProducto = ({ children }) => {

    
    const almacen = [
        {
            Codigo: 'AL1',
            Categoria:'almacen',
            Nombre: 'Aceite',
            Imagen: aceite,
            Detalle: 'Precio por unidad',
            Precio: 150
        },

        {
            Codigo: 'AL2',
            Categoria:'almacen',
            Nombre: 'Vinagre',
            Imagen: vinagre,
            Detalle: 'Precio por unidad',
            Precio: 125

        },

        {
            Codigo: 'AL3',
            Categoria:'almacen',
            Nombre: 'Arroz',
            Imagen: arroz,
            Detalle: 'Precio por unidad',
            Precio: 32
        },

        {
            Codigo: 'AL4',
            Categoria:'almacen',
            Nombre: 'Azucar',
            Imagen: azucar,
            Detalle: 'Precio por unidad',
            Precio: 60

        },

        {
            Codigo: 'AL5',
            Categoria:'almacen',
            Nombre: 'Fideos',
            Imagen: fideos,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'AL6',
            Categoria:'almacen',
            Nombre: 'Harina',
            Imagen: harina,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'AL7',
            Categoria:'almacen',
            Nombre: 'Ketchup',
            Imagen: ketchup,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'AL8',
            Categoria:'almacen',
            Nombre: 'Mayonesa',
            Imagen: mayonesa,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'AL9',
            Categoria:'almacen',
            Nombre: 'Moñas',
            Imagen: monas,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'AL10',
            Categoria:'almacen',
            Nombre: 'Mostaza',
            Imagen: mostaza,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'AL11',
            Categoria:'almacen',
            Nombre: 'Aceite de Oliva',
            Imagen: oliva,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'AL12',
            Categoria:'almacen',
            Nombre: 'Sal fina',
            Imagen: sal,
            Detalle: 'Precio por unidad',
            Precio: 45

        },
    ]

    const bebida = [


        {
            Codigo: 'B1',
            Categoria:'bebida',
            Nombre: 'Coca Cola',
            Imagen: coca,
            Detalle: 'Precio por unidad',
            Precio: 150
        },

        {
            Codigo: 'B2',
            Categoria:'bebida',
            Nombre: 'Fanta',
            Imagen: fanta,
            Detalle: 'Precio por unidad',
            Precio: 125

        },

        {
            Codigo: 'B3',
            Categoria:'bebida',
            Nombre: 'Sprite',
            Imagen: sprite,
            Detalle: 'Precio por unidad',
            Precio: 32
        },

        {
            Codigo: 'B4',
            Categoria:'bebida',
            Nombre: 'BC',
            Imagen: bc,
            Detalle: 'Precio por unidad',
            Precio: 60

        },

        {
            Codigo: 'B5',
            Categoria:'bebida',
            Nombre: 'Ades',
            Imagen: ades,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'B6',
            Categoria:'bebida',
            Nombre: 'Baggio',
            Imagen: baggio,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'B7',
            Categoria:'bebida',
            Nombre: 'Citric',
            Imagen: citric,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'B8',
            Categoria:'bebida',
            Nombre: 'Dairyco',
            Imagen: dairyco,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'B9',
            Categoria:'bebida',
            Nombre: 'Pepsi',
            Imagen: pepsi,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'B10',
            Categoria:'bebida',
            Nombre: 'Tonida',
            Imagen: tonica,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'B11',
            Categoria:'bebida',
            Nombre: 'Watts',
            Imagen: watts,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'B12',
            Categoria:'bebida',
            Nombre: 'Pomelo',
            Imagen: pomelo,
            Detalle: 'Precio por unidad',
            Precio: 45

        },



    ]


    const carniceria = [
        {
            Codigo: 'CA1',
            Categoria:'carniceria',
            Nombre: 'Carne Picada',
            Imagen: picada,
            Detalle: 'Precio por Kg',
            Precio: 350

        },

        {
            Codigo: 'CA2',
            Categoria:'carniceria',
            Nombre: 'Vacio',
            Imagen: vacio,
            Detalle: 'Precio por Kg',
            Precio: 562

        },

        {
            Codigo: 'CA3',
            Categoria:'carniceria',
            Nombre: 'Asado de Tira',
            Imagen: asado,
            Detalle: 'Precio por Kg',
            Precio: 456

        },

        {
            Codigo: 'CA4',
            Categoria:'carniceria',
            Nombre: 'Picaña de Exportacion',
            Imagen: picana,
            Detalle: 'Precio por Kg',
            Precio: 690

        },
        {
            Codigo: 'CA5',
            Categoria:'carniceria',
            Nombre: 'Matambre de Cerdo',
            Imagen: matambre,
            Detalle: 'Precio por Kg',
            Precio: 500

        },

        {
            Codigo: 'CA6',
            Categoria:'carniceria',
            Nombre: 'Chorizo Mezcla',
            Imagen: chorizo,
            Detalle: 'Precio por Kg',
            Precio: 390

        },
        {
            Codigo: 'CA7',
            Categoria:'carniceria',
            Nombre: 'Entraña',
            Imagen: entrana,
            Detalle: 'Precio por Kg',
            Precio: 550

        },

        {
            Codigo: 'CA8',
            Categoria:'carniceria',
            Nombre: 'Hamburguesa',
            Imagen: hamburguesa,
            Detalle: 'Precio por Uni',
            Precio: 62

        },

        {
            Codigo: 'CA9',
            Categoria:'carniceria',
            Nombre: 'Ojo de Bife',
            Imagen: ojodebife,
            Detalle: 'Precio por Kg',
            Precio: 856

        },

        {
            Codigo: 'CA10',
            Categoria:'carniceria',
            Nombre: 'Rack de Cordero',
            Imagen: rack,
            Detalle: 'Precio por Kg',
            Precio: 990

        },
        {
            Codigo: 'CA11',
            Categoria:'carniceria',
            Nombre: 'Solomillo',
            Imagen: solomillo,
            Detalle: 'Precio por Kg',
            Precio: 800

        },

        {
            Codigo: 'CA12',
            Categoria:'carniceria',
            Nombre: 'Tomahawk',
            Imagen: tomahawk,
            Detalle: 'Precio por Kg',
            Precio: 890

        }


    ]


    const comida = [


        {
            Codigo: 'CO1',
            Categoria:'comida',
            Nombre: 'Hamburguesa 1',
            Imagen: hambur1,
            Detalle: 'Precio por unidad',
            Precio: 150
        },

        {
            Codigo: 'CO2',
            Categoria:'comida',
            Nombre: 'Hamburguesa 2',
            Imagen: hambur2,
            Detalle: 'Precio por unidad',
            Precio: 125

        },

        {
            Codigo: 'CO3',
            Categoria:'comida',
            Nombre: 'Promo Hamburguesa',
            Imagen: promo1,
            Detalle: 'Precio por unidad',
            Precio: 32
        },

        {
            Codigo: 'CO4',
            Categoria:'comida',
            Nombre: 'Combo 2x1 Hamburguesa',
            Imagen: combo2,
            Detalle: 'Precio por unidad',
            Precio: 60

        },

        {
            Codigo: 'CO5',
            Categoria:'comida',
            Nombre: 'Lehmeyum',
            Imagen: Lehmeyun,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'CO6',
            Categoria:'comida',
            Nombre: 'Chivito al Pan',
            Imagen: chivitoalpan,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'CO7',
            Categoria:'comida',
            Nombre: 'Chivito al Plato',
            Imagen: chivitoalplato,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'CO8',
            Categoria:'comida',
            Nombre: 'Chorizo al Pan',
            Imagen: chorialpan,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'CO9',
            Categoria:'comida',
            Nombre: 'Pizza Familiar',
            Imagen: pizza,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'CO10',
            Categoria:'comida',
            Nombre: 'Quesadillas',
            Imagen: quesadillas,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'CO11',
            Categoria:'comida',
            Nombre: 'Tacos de Carne',
            Imagen: tacosCarne,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'CO12',
            Categoria:'comida',
            Nombre: 'Panchos con Muzza',
            Imagen: panchos,
            Detalle: 'Precio por unidad',
            Precio: 45

        },





    ]


    const fruteria = [


        {
            Codigo: 'FR1',
            Categoria:'fruteria',
            Nombre: 'Banana',
            Imagen: banana,
            Detalle: 'Precio por unidad',
            Precio: 150
        },

        {
            Codigo: 'FR2',
            Categoria:'fruteria',
            Nombre: 'Cebolla',
            Imagen: cebolla,
            Detalle: 'Precio por unidad',
            Precio: 125

        },

        {
            Codigo: 'FR3',
            Categoria:'fruteria',
            Nombre: 'Frutilla',
            Imagen: frutilla,
            Detalle: 'Precio por unidad',
            Precio: 32
        },

        {
            Codigo: 'FR4',
            Categoria:'fruteria',
            Nombre: 'Kiwi',
            Imagen: kiwi,
            Detalle: 'Precio por unidad',
            Precio: 60

        },

        {
            Codigo: 'FR5',
            Categoria:'fruteria',
            Nombre: 'Lechuga',
            Imagen: lechuga,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'FR6',
            Categoria:'fruteria',
            Nombre: 'Mandarina',
            Imagen: mandarina,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'FR7',
            Categoria:'fruteria',
            Nombre: 'Manzana',
            Imagen: manzana,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'FR8',
            Categoria:'fruteria',
            Nombre: 'Morron Rojo',
            Imagen: morronr,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'FR9',
            Categoria:'fruteria',
            Nombre: 'Morron Verde',
            Imagen: morronv,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'FR10',
            Categoria:'fruteria',
            Nombre: 'Naranja',
            Imagen: naranja,
            Detalle: 'Precio por unidad',
            Precio: 45

        },

        {
            Codigo: 'FR11',
            Categoria:'fruteria',
            Nombre: 'Tomate',
            Imagen: tomate,
            Detalle: 'Precio por unidad',
            Precio: 50
        },

        {
            Codigo: 'FR12',
            Categoria:'fruteria',
            Nombre: 'Zanahoria',
            Imagen: zanahoria,
            Detalle: 'Precio por unidad',
            Precio: 45

        },





    ]


    const limpieza = [

        {
            Codigo: 'LI1',
            Categoria:'limpieza',
            Nombre: 'Esponja',
            Imagen: esponja,
            Detalle: 'Precio por unidad',
            Precio: 15
        },
        {
            Codigo: 'LI2',
            Categoria:'limpieza',
            Nombre: 'Lavandina',
            Imagen: aguajane,
            Detalle: 'Precio por unidad',
            Precio: 50
        },
        {
            Codigo: 'LI3',
            Categoria:'limpieza',
            Nombre: 'Bolsas para Residuos',
            Imagen: bolsaresiduos,
            Detalle: 'Precio por pack de 6',
            Precio: 15
        },
        {
            Codigo: 'LI4',
            Categoria:'limpieza',
            Nombre: 'Cif Crema',
            Imagen: cifcrema,
            Detalle: 'Precio por unidad',
            Precio: 90
        },
        {
            Codigo: 'LI5',
            Categoria:'limpieza',
            Nombre: 'Cif Limpia Vidrios',
            Imagen: cifvidrios,
            Detalle: 'Precio por unidad',
            Precio: 10
        },
        {
            Codigo: 'LI6',
            Categoria:'limpieza',
            Nombre: 'Escoba',
            Imagen: escoba,
            Detalle: 'Precio por unidad',
            Precio: 35
        },
        {
            Codigo: 'LI7',
            Categoria:'limpieza',
            Nombre: 'Escobilla',
            Imagen: escobilla,
            Detalle: 'Precio por unidad',
            Precio: 65
        },
        {
            Codigo: 'LI8',
            Categoria:'limpieza',
            Nombre: 'Limpiador',
            Imagen: limpiador,
            Detalle: 'Precio por unidad',
            Precio: 115
        },
        {
            Codigo: 'LI9',
            Categoria:'limpieza',
            Nombre: 'Pala',
            Imagen: pala,
            Detalle: 'Precio por unidad',
            Precio: 85
        },
        {
            Codigo: 'LI10',
            Categoria:'limpieza',
            Nombre: 'Pañales',
            Imagen: panales,
            Detalle: 'Precio por unidad',
            Precio: 315
        },
        {
            Codigo: 'LI11',
            Categoria:'limpieza',
            Nombre: 'Papel de Cocina',
            Imagen: papelcocina,
            Detalle: 'Precio por unidad',
            Precio: 145
        },
        {
            Codigo: 'LI12',
            Categoria:'limpieza',
            Nombre: 'Papel Higienico',
            Imagen: papelhigienico,
            Detalle: 'Precio por unidad',
            Precio: 185
        }
    ]



    return (
        <ProductoContext.Provider value={{ almacen, bebida, carniceria, comida, fruteria, limpieza }}>
            {children}
        </ProductoContext.Provider>
    )
}

export default ProveedorProducto