import React from 'react';

import Fondo from '../Fondo';

const Spinner =() => {

    return (
      <div>
      <button className="btn btn-dark btn-lg" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Cargando.....   
    
    </button>
      <Fondo/>
      </div>
    );
}

export default Spinner;