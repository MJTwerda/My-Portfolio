import React from 'react';
import {socialData} from '../data/SocialData';

import style from './ContactMe.module.css';

export default function ContactMe({mode}) {

    return (
        <div id='contactMe'>
            <h2 className={mode === 'light' ? style.title: style.titleDark}>
                Contactame
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
}