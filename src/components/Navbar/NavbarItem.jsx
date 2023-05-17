import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItem = (props) => {

  return (
 
    <li className="nav-item">
    <nav className="nav-link active cursor" aria-current="page" href="#">{props.texto}</nav>
</li>

  )
}

export default NavbarItem