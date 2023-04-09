import React from 'react';
import {stack} from '../data/Stack';

import style from './Skills.module.css';

export default function Skills({mode}) {
    return (
        <div className={style.general} id='skills'>
            <h2 className={mode === 'light' ? style.etiqueta : style.etiquetaDark}>
                Habilidades Tecnológicas
            </h2>
            <div className={style.container}>
                {stack.map(stack => (
                    <div key={stack.type} className={style.container}>
                        <h3 className={mode === 'light' ? style.title : style.titleDark}>
                            {stack.type}
                        </h3>
                        {stack.list?.map(stackList => (
                            <div className={style.indv} key={stackList.name}>
                            <img src={stackList.icon} alt='' style={{height: 60, width: 60}} />
                            <h5 className={mode === 'light' ? style.tecName : style.tecNameDark}>
                                {stackList.name}
                            </h5>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
