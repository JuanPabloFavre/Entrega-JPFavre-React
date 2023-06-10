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
            Precio: 150,
            Adicional: 'Aceite Optimo de 1lt, disruta cocinar con la mejor calidad'
        },

        {
            Codigo: 'AL2',
            Categoria:'almacen',
            Nombre: 'Vinagre',
            Imagen: vinagre,
            Detalle: 'Precio por unidad',
            Precio: 125,
            Adicional: 'Vinagre Gamberoni de 0.7lt, disruta cocinar con la mejor calidad'

        },

        {
            Codigo: 'AL3',
            Categoria:'almacen',
            Nombre: 'Arroz',
            Imagen: arroz,
            Detalle: 'Precio por unidad',
            Precio: 32,
            Adicional: 'Arroz Chef de 1Kg, disruta cocinar con la mejor calidad'
        },

        {
            Codigo: 'AL4',
            Categoria:'almacen',
            Nombre: 'Azucar',
            Imagen: azucar,
            Detalle: 'Precio por unidad',
            Precio: 60,
            Adicional:  'Azucar Bella Union de 1Kg, disruta cocinar con la mejor calidad'

        },

        {
            Codigo: 'AL5',
            Categoria:'almacen',
            Nombre: 'Fideos',
            Imagen: fideos,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional:  'Fideos Adria de 1Kg, disruta cocinar con la mejor calidad'
        },

        {
            Codigo: 'AL6',
            Categoria:'almacen',
            Nombre: 'Harina',
            Imagen: harina,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional:  'Harina 0000 Cololo de 1Kg, disruta cocinar con la mejor calidad'

        },

        {
            Codigo: 'AL7',
            Categoria:'almacen',
            Nombre: 'Ketchup',
            Imagen: ketchup,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional:  'Ketchup Hellmanns de 0.5Kg, disruta cocinar con la mejor calidad'
        },

        {
            Codigo: 'AL8',
            Categoria:'almacen',
            Nombre: 'Mayonesa',
            Imagen: mayonesa,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional:  'Mayonesa Hellmanns de 0.5Kg, disruta cocinar con la mejor calidad'

        },

        {
            Codigo: 'AL9',
            Categoria:'almacen',
            Nombre: 'Moñas',
            Imagen: monas,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional:  'Moñas Adria de 1Kg, disruta cocinar con la mejor calidad'
        },

        {
            Codigo: 'AL10',
            Categoria:'almacen',
            Nombre: 'Mostaza',
            Imagen: mostaza,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Mostaza Savora de 0.5Kg, disruta cocinar con la mejor calidad'

        },

        {
            Codigo: 'AL11',
            Categoria:'almacen',
            Nombre: 'Aceite de Oliva',
            Imagen: oliva,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Aceite de Oliva Olivares de 0.7lt, disruta cocinar con la mejor calidad'
        },

        {
            Codigo: 'AL12',
            Categoria:'almacen',
            Nombre: 'Sal fina',
            Imagen: sal,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Sal fina Dos Anclas de 0.5Kg, disruta cocinar con la mejor calidad'

        },
    ]

    const bebida = [


        {
            Codigo: 'B1',
            Categoria:'bebida',
            Nombre: 'Coca Cola',
            Imagen: coca,
            Detalle: 'Precio por unidad',
            Precio: 150,
            Adicional: 'Refresco COCA COLA 1.5 Litros Descartable, disfruta el refrescante sabor'
        },

        {
            Codigo: 'B2',
            Categoria:'bebida',
            Nombre: 'Fanta',
            Imagen: fanta,
            Detalle: 'Precio por unidad',
            Precio: 125,
            Adicional: 'Refresco FANTA 1.5 Litros Descartable, disfruta el refrescante sabor'

        },

        {
            Codigo: 'B3',
            Categoria:'bebida',
            Nombre: 'Sprite',
            Imagen: sprite,
            Detalle: 'Precio por unidad',
            Precio: 32,
            Adicional: 'Refresco SPRITE 1.5 Litros Descartable, disfruta el refrescante sabor'
        },

        {
            Codigo: 'B4',
            Categoria:'bebida',
            Nombre: 'BC',
            Imagen: bc,
            Detalle: 'Precio por unidad',
            Precio: 60,
            Adicional: 'Refresco BC 1 Litros en caja, disfruta el refrescante sabor'

        },

        {
            Codigo: 'B5',
            Categoria:'bebida',
            Nombre: 'Ades',
            Imagen: ades,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Refresco ADES 1 Litros en caja, disfruta el refrescante sabor'
        },

        {
            Codigo: 'B6',
            Categoria:'bebida',
            Nombre: 'Baggio',
            Imagen: baggio,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Refresco BAGGIO 1 Litros en caja, disfruta el refrescante sabor'

        },

        {
            Codigo: 'B7',
            Categoria:'bebida',
            Nombre: 'Citric',
            Imagen: citric,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Refresco CITRIC 1 Litros en caja, disfruta el refrescante sabor'
        },

        {
            Codigo: 'B8',
            Categoria:'bebida',
            Nombre: 'Dairyco',
            Imagen: dairyco,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Refresco DAIRYCO 1 Litros en caja, disfruta el refrescante sabor'

        },

        {
            Codigo: 'B9',
            Categoria:'bebida',
            Nombre: 'Pepsi',
            Imagen: pepsi,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Refresco PEPSI 1.5 Litros Descartable, disfruta el refrescante sabor'
        },

        {
            Codigo: 'B10',
            Categoria:'bebida',
            Nombre: 'Tonida',
            Imagen: tonica,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Refresco TONICA 1.5 Litros Descartable, disfruta el refrescante sabor'

        },

        {
            Codigo: 'B11',
            Categoria:'bebida',
            Nombre: 'Watts',
            Imagen: watts,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Refresco WATTS 1.5 Litros Descartable, disfruta el refrescante sabor'
        },

        {
            Codigo: 'B12',
            Categoria:'bebida',
            Nombre: 'Pomelo',
            Imagen: pomelo,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Refresco POMELO 1.5 Litros Descartable, disfruta el refrescante sabor'

        },



    ]


    const carniceria = [
        {
            Codigo: 'CA1',
            Categoria:'carniceria',
            Nombre: 'Carne Picada',
            Imagen: picada,
            Detalle: 'Precio por Kg',
            Precio: 350,
            Adicional: 'Carne picada de frigorifico El Emporio, certificado Angus de calidad Premium'
            

        },

        {
            Codigo: 'CA2',
            Categoria:'carniceria',
            Nombre: 'Vacio',
            Imagen: vacio,
            Detalle: 'Precio por Kg',
            Precio: 562,
            Adicional:'Vacio de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA3',
            Categoria:'carniceria',
            Nombre: 'Asado de Tira',
            Imagen: asado,
            Detalle: 'Precio por Kg',
            Precio: 456,
            Adicional: 'Asado de tira de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA4',
            Categoria:'carniceria',
            Nombre: 'Picaña de Exportacion',
            Imagen: picana,
            Detalle: 'Precio por Kg',
            Precio: 690,
            Adicional: 'Picaña de exportacion de frigorifico El Emporio, certificado Angus de calidad Premium'

        },
        {
            Codigo: 'CA5',
            Categoria:'carniceria',
            Nombre: 'Matambre de Cerdo',
            Imagen: matambre,
            Detalle: 'Precio por Kg',
            Precio: 500,
            Adicional: 'Matambre de cerdo de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA6',
            Categoria:'carniceria',
            Nombre: 'Chorizo Mezcla',
            Imagen: chorizo,
            Detalle: 'Precio por Kg',
            Precio: 390,
            Adicional: 'Chorizo Mezcla de frigorifico El Emporio, certificado Angus de calidad Premium'

        },
        {
            Codigo: 'CA7',
            Categoria:'carniceria',
            Nombre: 'Entraña',
            Imagen: entrana,
            Detalle: 'Precio por Kg',
            Precio: 550,
            Adicional: 'Entraña de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA8',
            Categoria:'carniceria',
            Nombre: 'Hamburguesa',
            Imagen: hamburguesa,
            Detalle: 'Precio por Uni',
            Precio: 62,
            Adicional: 'Hamburguesas de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA9',
            Categoria:'carniceria',
            Nombre: 'Ojo de Bife',
            Imagen: ojodebife,
            Detalle: 'Precio por Kg',
            Precio: 856,
            Adicional: 'Ojo de Bife de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA10',
            Categoria:'carniceria',
            Nombre: 'Rack de Cordero',
            Imagen: rack,
            Detalle: 'Precio por Kg',
            Precio: 990,
            Adicional: 'Rack de Cordero de frigorifico El Emporio, certificado Angus de calidad Premium'

        },
        {
            Codigo: 'CA11',
            Categoria:'carniceria',
            Nombre: 'Solomillo',
            Imagen: solomillo,
            Detalle: 'Precio por Kg',
            Precio: 800,
            Adicional: 'Solomillo de frigorifico El Emporio, certificado Angus de calidad Premium'

        },

        {
            Codigo: 'CA12',
            Categoria:'carniceria',
            Nombre: 'Tomahawk',
            Imagen: tomahawk,
            Detalle: 'Precio por Kg',
            Precio: 890,
            Adicional: 'Tomahawk de frigorifico El Emporio, certificado Angus de calidad Premium'

        }


    ]


    const comida = [


        {
            Codigo: 'CO1',
            Categoria:'comida',
            Nombre: 'Hamburguesa 1',
            Imagen: hambur1,
            Detalle: 'Precio por unidad',
            Precio: 150,
            Adicional: 'Doble hamburguesa con tomate, lechuga pepinillos y cebolla. No podes no probarla'
        },

        {
            Codigo: 'CO2',
            Categoria:'comida',
            Nombre: 'Hamburguesa 2',
            Imagen: hambur2,
            Detalle: 'Precio por unidad',
            Precio: 125,
            Adicional: 'Gran hamburguesa con lechuga, queso chedar y morron. No podes no probarla'

        },

        {
            Codigo: 'CO3',
            Categoria:'comida',
            Nombre: 'Promo Hamburguesa',
            Imagen: promo1,
            Detalle: 'Precio por unidad',
            Precio: 32,
            Adicional: 'Super promo, dos hamburguesas con lechuga, huevo frito y morron. No podes no probarla'
        },

        {
            Codigo: 'CO4',
            Categoria:'comida',
            Nombre: 'Combo 2x1 Hamburguesa',
            Imagen: combo2,
            Detalle: 'Precio por unidad',
            Precio: 60,
            Adicional: 'Hamburguesa con lechuga, queso chedar y tomate, mas una porcion de papas. No podes no probarla'

        },

        {
            Codigo: 'CO5',
            Categoria:'comida',
            Nombre: 'Lehmeyum',
            Imagen: Lehmeyun,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Los mejores lehmeyum, con una receta unita, No podes no probarlo'
        },

        {
            Codigo: 'CO6',
            Categoria:'comida',
            Nombre: 'Chivito al Pan',
            Imagen: chivitoalpan,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Chivito Uruguayo, super completo y el mas rico, No podes no probarlo'
        },

        {
            Codigo: 'CO7',
            Categoria:'comida',
            Nombre: 'Chivito al Plato',
            Imagen: chivitoalplato,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Chivito Uruguayo al plato, super completo y el mas rico, No podes no probarlo'
        },

        {
            Codigo: 'CO8',
            Categoria:'comida',
            Nombre: 'Chorizo al Pan',
            Imagen: chorialpan,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Promo, dos chori al pan, lo mejor de lo mejor, No podes no probarlo'

        },

        {
            Codigo: 'CO9',
            Categoria:'comida',
            Nombre: 'Pizza Familiar',
            Imagen: pizza,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Pizza familiar con muzzarella y bordes rellenos de muzzarella , No podes no probarla'
        },

        {
            Codigo: 'CO10',
            Categoria:'comida',
            Nombre: 'Quesadillas',
            Imagen: quesadillas,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Las mejores quesadillas, un pack de tres que te van a dejar chocho, No podes no probarlas '

        },

        {
            Codigo: 'CO11',
            Categoria:'comida',
            Nombre: 'Tacos de Carne',
            Imagen: tacosCarne,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Desde Mexico, los mejores tacos. No existen mas ricos que estos, No podes no probarlos '
        },

        {
            Codigo: 'CO12',
            Categoria:'comida',
            Nombre: 'Panchos con Muzza',
            Imagen: panchos,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'No hay edad para comer un buen pancho, aca esta el mejor, No podes no probarlo '

        },





    ]


    const fruteria = [


        {
            Codigo: 'FR1',
            Categoria:'fruteria',
            Nombre: 'Banana',
            Imagen: banana,
            Detalle: 'Precio por unidad',
            Precio: 150,
            Adicional: 'Banana ecuatoria, lleva una vida sana, con las mejores frutras'
            
        },

        {
            Codigo: 'FR2',
            Categoria:'fruteria',
            Nombre: 'Cebolla',
            Imagen: cebolla,
            Detalle: 'Precio por unidad',
            Precio: 125,
            Adicional: 'Cebolla, la mejor calidad, para mas mejores recetas, lleva una vida sana, con las mejores frutras'

        },

        {
            Codigo: 'FR3',
            Categoria:'fruteria',
            Nombre: 'Frutilla',
            Imagen: frutilla,
            Detalle: 'Precio por unidad',
            Precio: 32,
            Adicional: 'Frutilla, no es de camara, lleva una vida sana, con las mejores frutras'
        },

        {
            Codigo: 'FR4',
            Categoria:'fruteria',
            Nombre: 'Kiwi',
            Imagen: kiwi,
            Detalle: 'Precio por unidad',
            Precio: 60,
            Adicional: 'Kiwi, no es de camara, lleva una vida sana, con las mejores frutras'

        },

        {
            Codigo: 'FR5',
            Categoria:'fruteria',
            Nombre: 'Lechuga',
            Imagen: lechuga,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Lechuga, la mejor calidad, para mas mejores recetas, lleva una vida sana, con las mejores frutras'
        },

        {
            Codigo: 'FR6',
            Categoria:'fruteria',
            Nombre: 'Mandarina',
            Imagen: mandarina,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Mandarina, lleva una vida sana, con las mejores frutras'

        },

        {
            Codigo: 'FR7',
            Categoria:'fruteria',
            Nombre: 'Manzana',
            Imagen: manzana,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Manzana, lleva una vida sana, con las mejores frutras'
        },

        {
            Codigo: 'FR8',
            Categoria:'fruteria',
            Nombre: 'Morron Rojo',
            Imagen: morronr,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Morron rojo, la mejor calidad, para mas mejores recetas, lleva una vida sana, con las mejores frutras'

        },

        {
            Codigo: 'FR9',
            Categoria:'fruteria',
            Nombre: 'Morron Verde',
            Imagen: morronv,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Morron verde, la mejor calidad, para mas mejores recetas, lleva una vida sana, con las mejores frutras'
        },

        {
            Codigo: 'FR10',
            Categoria:'fruteria',
            Nombre: 'Naranja',
            Imagen: naranja,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Naranja, lleva una vida sana, con las mejores frutras'

        },

        {
            Codigo: 'FR11',
            Categoria:'fruteria',
            Nombre: 'Tomate',
            Imagen: tomate,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional: 'Tomate, la mejor calidad, para mas mejores recetas, lleva una vida sana, con las mejores frutras'
        },

        {
            Codigo: 'FR12',
            Categoria:'fruteria',
            Nombre: 'Zanahoria',
            Imagen: zanahoria,
            Detalle: 'Precio por unidad',
            Precio: 45,
            Adicional: 'Tomate, la mejor calidad, para mas mejores recetas, lleva una vida sana, con las mejores frutras'

        },





    ]


    const limpieza = [

        {
            Codigo: 'LI1',
            Categoria:'limpieza',
            Nombre: 'Esponja',
            Imagen: esponja,
            Detalle: 'Precio por unidad',
            Precio: 15,
            Adicional: 'Esponja Jaspe anatomic ! Mas duradera y resistente que sus competidores. Mas limpio imposible!'
        },
        {
            Codigo: 'LI2',
            Categoria:'limpieza',
            Nombre: 'Lavandina',
            Imagen: aguajane,
            Detalle: 'Precio por unidad',
            Precio: 50,
            Adicional:'Agua Lavandina 1 litros Limpia, desinfecta y blanquea. Mas limpio imposible!'
        },
        {
            Codigo: 'LI3',
            Categoria:'limpieza',
            Nombre: 'Bolsas para Residuos',
            Imagen: bolsaresiduos,
            Detalle: 'Precio por pack de 6',
            Precio: 15,
            Adicional: 'Bolsas para el hogar! Mas grandes y resistente que sus competidores. Mas limpio imposible!'
        },
        {
            Codigo: 'LI4',
            Categoria:'limpieza',
            Nombre: 'Cif Crema',
            Imagen: cifcrema,
            Detalle: 'Precio por unidad',
            Precio: 90,
            Adicional: 'Cif crema !  limpiador cremoso multiuso con micropartículas que ofrece una máxima limpieza de las superficies con mínimo esfuerzo. Mas limpio imposible!'
        },
        {
            Codigo: 'LI5',
            Categoria:'limpieza',
            Nombre: 'Cif Limpia Vidrios',
            Imagen: cifvidrios,
            Detalle: 'Precio por unidad',
            Precio: 10,
            Adicional:'Cif limpia vidrios !  limpiador multiuso con micropartículas que ofrece una máxima limpieza de las superficies con mínimo esfuerzo. Mas limpio imposible!'
        },
        {
            Codigo: 'LI6',
            Categoria:'limpieza',
            Nombre: 'Escoba',
            Imagen: escoba,
            Detalle: 'Precio por unidad',
            Precio: 35,
            Adicional: 'Escoba de doble barrido, es una escoba GRANDE y delicada a la vez, con gran capacidad de limpieza. Su DISEÑO es EXCLUSIVO, tiene DOBLE CANAL de cerdas. Mas limpio imposible!'
        },
        {
            Codigo: 'LI7',
            Categoria:'limpieza',
            Nombre: 'Escobilla',
            Imagen: escobilla,
            Detalle: 'Precio por unidad',
            Precio: 65,
            Adicional: 'Escobilla, Cepillo para Baño, Limpia Inodoro con base. Mas limpio imposible!'
        },
        {
            Codigo: 'LI8',
            Categoria:'limpieza',
            Nombre: 'Limpiador',
            Imagen: limpiador,
            Detalle: 'Precio por unidad',
            Precio: 115,
            Adicional: 'Los Limpiadores Poett no solo Limpian, también Desinfectan y Aromatizan. ¡Conocelos! Alegrá tu Día. Fragancias Inigualables. Pará y Respirá. Mas limpio imposible!'
            
        },
        {
            Codigo: 'LI9',
            Categoria:'limpieza',
            Nombre: 'Pala',
            Imagen: pala,
            Detalle: 'Precio por unidad',
            Precio: 85,
            Adicional: 'Pala de plástico con mango largo. Su diseño permite trabar la pala con los pies sin necesidad de agacharse. Mas limpio imposible!'
        },
        {
            Codigo: 'LI10',
            Categoria:'limpieza',
            Nombre: 'Pañales',
            Imagen: panales,
            Detalle: 'Precio por unidad',
            Precio: 315,
            Adicional: 'Los pañales Babysec Ultra son la elección perfecta para brindar comodidad y protección a tu bebé. Mas limpio imposible!'
        },
        {
            Codigo: 'LI11',
            Categoria:'limpieza',
            Nombre: 'Papel de Cocina',
            Imagen: papelcocina,
            Detalle: 'Precio por unidad',
            Precio: 145,
            Adicional: 'Papel Toalla de Cocina Nube Blanca Doble Hoja x3. Confeccionados en pura celulosa 100% virgen. Estampados para un mayor rendimiento. Mas limpio imposible!'
        },
        {
            Codigo: 'LI12',
            Categoria:'limpieza',
            Nombre: 'Papel Higienico',
            Imagen: papelhigienico,
            Detalle: 'Precio por unidad',
            Precio: 185,
            Adicional: 'Papel higiénico de hoja simple, presentado en rollos de 30 metros. 100% papel tissue con un tratamiento que permite lograr una agradable textura al contacto.  Mas limpio imposible!'
        }
    ]



    return (
        <ProductoContext.Provider value={{ almacen, bebida, carniceria, comida, fruteria, limpieza }}>
            {children}
        </ProductoContext.Provider>
    )
}

export default ProveedorProducto