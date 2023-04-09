import React from 'react';
import { socialData } from '../data/SocialData';

import style from './Social.module.css';

export default function Social({mode}) {

    return(
        <div id='social' className={style.container}>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Mi Mundo Social: 
            </h2>
            <ul className={style.general}>
                {socialData?.map((data) => {
                    return (
                        <li key={data.platform} className={style.lista}>
                            <a href={data.url} target='_blank' rel="noopener noreferrer">
                                <img 
                                    src={data.logo} 
                                    alt={data.platform} 
                                    style={{ width: 90, height: 90 }}
                                />
                            </a>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
};
