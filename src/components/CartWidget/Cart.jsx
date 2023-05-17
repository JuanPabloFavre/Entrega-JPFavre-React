import React from 'react'


const Cart = () => {
  return (
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <p title="Crear Cuenta" class="nav-link active text-light" aria-current="page" href="#"><ion-icon name="person-add-outline"></ion-icon>
</p>
  </li>
  <li class="nav-item">
    <p title="Ingresar" class="nav-link active text-light" href="#"><ion-icon name="log-in-outline"></ion-icon>
</p>
  </li>
  <li class="nav-item">
      <p title="Mis Compras" class="nav-link active text-light" href="#"><ion-icon name="stats-chart-outline"></ion-icon>
</p>
  </li>
  <li class="nav-item ">
  <p title="Carrito" class="nav-link active text-light" href="#"><ion-icon name="cart-outline"></ion-icon>
  
</p>
  </li>
</ul>
  )
}

export default Cart