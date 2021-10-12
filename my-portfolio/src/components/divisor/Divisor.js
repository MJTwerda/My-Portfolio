import React from 'react';

import style from './Divisor.module.css';

export default function Divisor({mode}) {
    return(
        <div className={mode === 'light' ? style.div : style.divDark}></div>
    )
}