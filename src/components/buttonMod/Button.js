import React from 'react';
import Icon from '@mdi/react';
import {mdiMoonWaningCrescent, mdiWeatherSunny } from '@mdi/js';

import style from './Button.module.css';

export default function Button({changeTheme}) {
    return(
        <div className={style.container}>
            <button onClick={() => changeTheme('dark')} className={style.btn}>
                <Icon path={mdiMoonWaningCrescent} size={1.5}/>
            </button>
            <button onClick={() => changeTheme('light')} className={style.btn}>
            <Icon path={mdiWeatherSunny} size={1.5}/>
            </button>
        </div>
    )
}