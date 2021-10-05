import React from 'react';
import Social from '../social/Social';

import image from '../utils/images/Perfil.jpeg';
import style from './Avatar.module.css';

export default function Avatar() {
    return (
        <div className={style.general}>
            <img src={image} width='150' height='200' alt='' />
            <Social />
        </div>
    )
}