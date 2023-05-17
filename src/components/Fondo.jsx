import React from 'react';
import '../styles/style.css'
import fondo from '../images/fondo.png'

const Fondo = () => {
    return (
        <div className='fondo'>
           <img src={fondo} alt="Logo" /> 
        </div>
    );
};

export default Fondo;