import React from 'react';
import style from '../style.module.css'
import group from './images/Group 81.png'

const Hero = () => {
  return (
    <div className={style.centering}>
      <img src={group} className={style.groupImages} alt="Best Destinations" />
    </div>
  )
}

export default Hero;
