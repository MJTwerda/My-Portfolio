import React from 'react';

import style from './About.module.css';

export default function About({mode}) {
    return(
        <div id='about'>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Mauri Twerda
            </h2> 
        </div>
    )
}