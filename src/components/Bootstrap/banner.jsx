import React from 'react';
import bombazo1 from '../../assets/Banner/bombazos.jpg'
import bombazo2 from '../../assets/Banner/bombazos2.jpg'
import pago from '../../assets/Banner/pago.jpg'

const banner = () => {
    return (
      
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bombazo1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={bombazo2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={pago} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default banner;