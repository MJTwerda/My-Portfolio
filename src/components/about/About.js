import React from 'react';

import style from './About.module.css';
import { MultipleChoice } from '../modals/Modals';

export default function About({mode}) {

    return(
        <div id='about'>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Hola 👋🏼 Soy Mauricio Twerda, desarrollador Full-Stack <br />
                y este es mi portafolio <br /><br />
                Te invito a jugar antes de seguir avanzando por la página
            </h2> 
            <div style={{ marginBottom: '8px' }}>
                <MultipleChoice />
            </div>

        </div>
    )
};
   