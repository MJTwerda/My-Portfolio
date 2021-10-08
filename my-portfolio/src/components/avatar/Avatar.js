import React from 'react';
import Social from '../social/Social';

import image from '../utils/images/soloNotebook.png';
import style from './Avatar.module.css';

export default function Avatar() {
    return (
        <div className={style.general} id='avatar'>
            <img src={image} alt='' className={style.img} />
            <Social />
        </div>
    )
}
