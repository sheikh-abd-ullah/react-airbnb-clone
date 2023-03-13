import React from 'react';
import style from "../style.module.css";

const Text = () => {
  return (
    <div className={style.textSection}>
      <p className={style.textHead}>Online Experiences</p>
      <div className={style.bodyWrap}>
        <p className={style.textBody}>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Text;
