import React from 'react'
import './CartWidget.css';


function CartWidget() {
  return (
    <div>
      <li className="nav-item cart-notification">
          <h2 className="cart-count">2</h2>
          <img src="img/carrito-de-compras.svg" alt="Carrito de compras" className="cart-icon" />
      </li>
  </div>
  )
}

export default CartWidget