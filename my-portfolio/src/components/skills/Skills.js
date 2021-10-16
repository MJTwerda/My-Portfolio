import React from 'react';
import {stack} from '../data/Stack';

import style from './Skills.module.css';

export default function Skills({mode}) {
    return (
        <div className={style.general} id='skills'>
            <h2 className={mode === 'light' ? style.etiqueta : style.etiquetaDark}>
                Habilidades
            </h2>
            <div className={style.container}>
                <h3 className={mode === 'light' ? style.title : style.titleDark}>
                    Front-end
                </h3>
                {stack[0].list?.map((front, i) => {
                    return (
                        <div className={style.indv}>
                            <img src={front.icon} alt='' />
                            <h5 className={mode === 'light' ? style.tecName : style.tecNameDark}>
                                {front.name}
                            </h5>
                        </div>
                    )
                })}
            </div>

            <div className={style.container}>
                <h3 className={mode === 'light' ? style.title : style.titleDark}>
                    Back-end | DataBase
                </h3>
                {stack[1].list?.map((front, i) => {
                    return (
                        <div className={front.name === 'ExpressJs' ? style.indvEx :  style.indv}>
                            <img src={front.icon} alt='' className={style.img}/>
                            <h5 className={mode === 'light' ? style.tecName : style.tecNameDark}>
                                {front.name}
                            </h5>
                            {/* <h5 className={front.name === 'ExpressJs' ? style.namEx : style.tecName}>
                                {front.name}
                            </h5> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

/* 
<div className={front.name === 'ExpressJs' ? style.indvEx :  style.indv}>
<h5 className={front.name === 'ExpressJs' ? style.namEx : style.tecName}>
*/