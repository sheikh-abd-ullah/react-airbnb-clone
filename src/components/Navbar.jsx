import React from 'react';
import style from '../style.module.css'
import logo from './images/Vector.png'

const Navbar = () => {
  return (
    <div className={style.navBar}>
        <img src={logo} className={style.logoImage} alt="Logo" />
      
    </div>
  )
}

export default Navbar;
