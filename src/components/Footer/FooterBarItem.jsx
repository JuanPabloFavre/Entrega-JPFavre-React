import React from 'react';

const FooterBarItem = (porps) => {
    return (
        <div className="navbar-collapse">
            <ul className="nav-item d-flex mb-2">
                <p className="nav-link active text-dark cursor" aria-current="page" href="#">{porps.texto}</p>
            </ul>
        </div>
    );
};

export default FooterBarItem;