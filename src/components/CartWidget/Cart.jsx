import React from 'react'


const Cart = () => {
  return (
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <p title="Crear Cuenta" className="nav-link active text-light" aria-current="page" href="#"><ion-icon name="person-add-outline"></ion-icon>
</p>
  </li>
  <li className="nav-item">
    <p title="Ingresar" className="nav-link active text-light" href="#"><ion-icon name="log-in-outline"></ion-icon>
</p>
  </li>
  <li className="nav-item">
      <p title="Mis Compras" className="nav-link active text-light" href="#"><ion-icon name="stats-chart-outline"></ion-icon>
</p>
  </li>
  <li className="nav-item ">
  <p title="Carrito" className="nav-link active text-light" href="#"><ion-icon name="cart-outline"></ion-icon>
  
</p>
  </li>
</ul>
  )
}

export default Cart