import React from 'react'
import {projectsDetail} from '../data/ProjectsDetail';

import style from './Projects.module.css';

export default function Projects() {
    return(
        <div id='projects'>
            <h2 className={style.title}>My Projects </h2>
            {projectsDetail?.map((project, i) => {
                return (
                    <div key={i} className={style.individualProject}>
                        <div>
                            <h2 className={style.titleProject}>{project.name}</h2>
                            {project.tecnologies?.map((tec, i) => {
                                <p key={i}>{tec}</p>
                            })}
                        </div>
                        <a href={project.url} className={style.urlProject}>
                            <img src={project.image} alt='' className={style.img}/>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}