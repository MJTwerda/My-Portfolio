import React from 'react';
import {socialData} from '../data/SocialData';

import style from './Social.module.css';

export default function Social({mode}) {
    return(
        <div id='social' className={style.container}>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Mi Mundo Social: 
            </h2>
            <ul className={style.general}>
                {socialData?.map((data, i) => {
                    return (
                        <li key={i} className={style.lista}>
                            <a href={data.url}>
                            <img src={data.logo} alt='' />
                            </a>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}