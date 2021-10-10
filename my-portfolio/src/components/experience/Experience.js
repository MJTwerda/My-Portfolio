import React from 'react';
import {experience} from '../data/Experience';

import style from './Experience.module.css';

export default function Experience() {
    return (
        <div id='experience'>
            <h2 className={style.title}>Experiencia Laboral</h2>
                {experience?.map((exp, i) => {
                    return (
                        <div key={i} className={style.individualProject}>
                            <a href={exp.url} className={style.urlProject} >
                                <img src={exp.company} className={style.titleImg} alt=''/>
                            </a>
                            <div>
                                <p className={style.date}>{exp.date}</p>
                                <p className={style.descriptions}>
                                Participación de un equipo de desarrollo ágil con sprints de una semana presentando a un Product Owner avances sobre el desarrollo de los componentes de Administradores para seleccionar, y ordenar candidatos.<br />
                                {exp.description?.map((func, i) => {
                                    return (
                                        <p key={i} className={style.itemsDescriptions}>
                                            🔦 {func}
                                        </p>
                                    )}
                                )}
                                </p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}