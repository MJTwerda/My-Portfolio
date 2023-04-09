import React from 'react';
import Social from '../social/Social';

import image from '../utils/images/soloNotebook.png';
import style from './Avatar.module.css';

export default function Avatar({mode}) {

    return (
        <div className={style.general} id='avatar'>
            <div className={style.imgContainer} >
                <img src={image} alt='' className={style.img} />
            </div>
            <div className={style.socialContainer}>
                <Social mode={mode}/>
            </div>
        </div>
    )
};
