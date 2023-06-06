import React from 'react';
import Sorteo from '../../assets/eventos/sorteo.jpg'

const eventos = () => {
    return (
        <div className='container'>
            <h2>Bases y condiciones del Sorteo, Huggies"Semana del bebé"</h2>
            <img src={Sorteo} className="img-fluid" alt="..."></img>
            <p>
                Lefed S.A (en adelante el “Organizador”), con domicilio en Camino Carrasco 997 realizará una promoción,
                para sus líneas de productos para bebé de la marca Huggies,
                (en adelante la “Promoción”)
                de acuerdo a los términos y condiciones de participación que se describen en las siguientes bases y condiciones (en adelante las “Bases”).
            </p>
            <h4>PRIMERO: VIGENCIA</h4>
            <p>
                La presente Promoción tendrá vigencia desde el día 1 de junio de 2023 hasta el día 15 de junio de 2023.-
                (en adelante la “Vigencia de la Promoción”).
                Es una promoción de carácter NACIONAL.
                Se desarrollará en todos los locales de la cadena de supermercados de TA -TA S.A de todo el país,
                estando presente en los 19 departamentos del territorio del Nacional.
            </p>
            <h4>SEGUNDO: PRODUCTOS PARTICIPANTES.</h4>
            <p>
                Participan los productos identificados con la marca HUGGIES, en todas sus variedades y presentaciones.
                Participan los productos disponibles en cada uno de los locales participantes.
            </p>
            <h4>TERCERO: MECÁNICA DE PARTICIPACIÓN.</h4>
            <p>
                Podrán participar de la presente promoción, las personas mayores de edad, registradas como clientes PLUS (excluyente),
                quien no sea cliente Plus , podrá solicitar serlo en el mismo momento de la compra, o cuando lo desee, en cualquier sucursal,
                presentando la cedula de identidad vigente. Además, no deberán tener ningún tipo de vínculo laboral con
                la empresa, ni directa ni indirectamente, ni con Lefed S.A, ni Unileger del Uruguay Srl, ni sus familiares directos(padres, hijos y cónyuge).
            </p>
            <h4>CUARTO. DIFUSION DE LAS BASES.</h4>
            <p>
                Las bases podrán ser consultadas en cada uno de los locales participantes, donde estarán agrega- das a las urnas.
            </p>
            <h4>Premio</h4>
            <p>
                “1 año de pañales y toallitas húmedas gratis por departamento”:
                4 packs de pañales HuggiesActive Sec Ultray 2 packs de toallitas húmedas Limpieza Cotidiana x288 por mes, durante12 meses.
            </p>
        </div>
    );
};

export default eventos;