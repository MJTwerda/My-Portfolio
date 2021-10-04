import React from 'react';
import {socialData} from '../data/SocialData';

import style from './Social.module.css';

export default function Social() {
    return(
        <div>
            <h2>My social World: </h2>
            <ul className={style.general}>
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
        </div>
    )
}