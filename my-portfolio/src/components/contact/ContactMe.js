import React from 'react';
import {socialData} from '../data/SocialData';

import style from './ContactMe.module.css';

export default function ContactMe() {
    return (
        <div>
            <h2 className={style.title}>Contact me </h2>
            <ul className={style.general}>
                {socialData?.map((platform, i) => {
                    return (
                        <li key={i} className={style.lista}>
                            <a href={platform.url}>
                                <img src={platform.logo}  alt='' />    
                            </a> 
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}