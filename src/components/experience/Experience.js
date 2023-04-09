import React from 'react';
import {experience} from '../data/Experience';

import style from './Experience.module.css';

export default function Experience({mode}) {
    return (
        <div id='experience' className={style.general}>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Experiencia Laboral
            </h2>
                {experience?.map((exp, i) => {
                    return (
                        <div key={i} className={style.individualProject}>
                            <a href={exp.url} target='_blank' className={style.urlProject} rel="noopener noreferrer" >
                                <img src={exp.company} className={style.titleImg} alt=''/>
                            </a>
                            <div className={style.desContainer}>
                                <p className={mode === 'light' ? style.date : style.dateDark}>
                                    {exp.date}
                                </p>
                                <p className={mode === 'light' ? style.descriptions : style.desDark}>
                                Participación de un equipo de desarrollo ágil con sprints de una semana presentando a 
                                un Product Owner avances sobre el desarrollo de los componentes de Administradores para 
                                seleccionar, y ordenar candidatos.<br />
                                </p>
                                {exp.description?.map((func, i) => {
                                    return (
                                        <p key={func} className={style.itemsDescriptions}>
                                            🔦 {func}
                                        </p>
                                    )}
                                )}
                                
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}