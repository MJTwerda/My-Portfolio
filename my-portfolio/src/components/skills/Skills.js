import React from 'react';
import {stack} from '../data/Stack';

import style from './Skills.module.css';

export default function Skills() {
    return (
        <div className={style.general}>
            <div className={style.container}>
                <h2 className={style.title}>
                    {stack[0].type}
                </h2>
                {stack[0].list?.map((front, i) => {
                    return (
                        <div className={style.indv}>
                            <img src={front.icon} alt='' />
                            <h4 className={style.tecName}>{front.name}</h4>
                        </div>
                    )
                })}
            </div>

            <div className={style.container}>
                <h2 className={style.title}>
                    {stack[1].type}
                </h2>
                {stack[1].list?.map((front, i) => {
                    return (
                        <div className={front.name === 'ExpressJs' ? style.imgEx :  style.indv}>
                            <img src={front.icon} alt='' className={style.img}/>
                            <h4 className={front.name === 'ExpressJs' ? style.namEx : style.tecName}>
                                {front.name}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}