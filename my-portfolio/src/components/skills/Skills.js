import React from 'react';
import {stack} from '../data/Stack';

import style from './Skills.module.css';

export default function Skills() {
    return (
        <div className={style.general}>
            <h2 className={style.etiqueta}>Stack</h2>
            <div className={style.container}>
                <h3 className={style.title}>
                    Front-end
                </h3>
                {stack[0].list?.map((front, i) => {
                    return (
                        <div className={style.indv}>
                            <img src={front.icon} alt='' />
                            <h5 className={style.tecName}>
                                {front.name}
                            </h5>
                        </div>
                    )
                })}
            </div>

            <div className={style.container}>
                <h3 className={style.title}>
                    Back-end | DataBase
                </h3>
                {stack[1].list?.map((front, i) => {
                    return (
                        <div className={front.name === 'ExpressJs' ? style.indvEx :  style.indv}>
                            <img src={front.icon} alt='' className={style.img}/>
                            <h5 className={front.name === 'ExpressJs' ? style.namEx : style.tecName}>
                                {front.name}
                            </h5>
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