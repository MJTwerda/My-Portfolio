import React from 'react';
import {socialData} from '../data/SocialData';

import style from './Footer.module.css';

export default function Footer() {
    return(
        <ul>
            {socialData?.map((data, i) => {
                return (
                    <li key={i} className={style.lista}>
                        <a href={data.url}>
                            <img src={data.logo}  alt='' />    
                        </a>
                    </li>
                )}
            )}
        </ul>
    )
}