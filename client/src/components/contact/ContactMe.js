import React from 'react';
import {socialData} from '../data/SocialData';

import EmailService from '../email/EmailService';

import style from './ContactMe.module.css';

export default function ContactMe({mode}) {
    return (
        <div id='contactMe'>
            <h2 className={mode === 'light' ? style.title: style.titleDark}>
                Contactame
            </h2>
            <ul className={style.general}>
                {socialData?.map((platform, i) => {
                    return (
                        <li key={i} className={style.lista}>
                            <a href={platform.url} target='_blank' rel="noopener noreferrer">
                                <img src={platform.logo} alt='' />
                            </a> 
                        </li>
                    )}
                )}
            </ul>
            <h3 className={mode === 'light' ? style.title: style.titleDark}>
                Mediante email directo
            </h3>
            <EmailService mode={mode} />
        </div>
    )
}