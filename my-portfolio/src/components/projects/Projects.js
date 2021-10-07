import React from 'react'
import {projectsDetail} from '../data/ProjectsDetail';

import style from './Projects.module.css';

export default function Projects() {
    return(
        <div>
            <h2 className={style.title}>My Projects </h2>
            {projectsDetail?.map((project, i) => {
                return (
                    <div key={i} className={style.individualProject}>
                        <h2 className={style.titleProject}>{project.name}</h2>
                        <a href={project.url} className={style.urlProject}>
                            <img src={project.image} alt='No tiene' className={style.img}/>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}