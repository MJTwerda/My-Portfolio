import React from 'react';
import {experience} from '../data/Experience';

import style from './Experience.module.css';

export default function Experience() {
    return (
        <div id='experience'>
            <h2 className={style.title}>Profesional Experience</h2>
                {experience?.map((exp, i) => {
                    return (
                        <div key={i} className={style.individualProject}>
                            <a href={exp.url} className={style.urlProject} >
                                <img src={exp.company} className={style.titleImg} alt=''/>
                                
                            </a>

                        </div>
                    )
                })}
        </div>
    )
}