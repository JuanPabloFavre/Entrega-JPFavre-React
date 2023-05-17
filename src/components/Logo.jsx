import React from 'react'
import '../styles/style.css'
import logo from '../images/logo.png'


const Logo = () => {
  
  return (
    <div className='logo-empresa'>
       <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo