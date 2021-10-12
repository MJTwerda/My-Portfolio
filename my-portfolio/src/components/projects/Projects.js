import React from 'react'
import {projectsDetail} from '../data/ProjectsDetail';

import style from './Projects.module.css';

export default function Projects({mode}) {
    return(
        <div id='projects'>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>My Projects </h2>
            {projectsDetail?.map((project, i) => {
                return (
                    <div key={i} className={style.individualProject}>
                        <div>
                            <h2 className={mode === 'light' ? style.titleProject : style.titleProDark}>
                                {project.name}
                            </h2>
                            {project.tecnologies?.map((tec, i) => {
                                return <p className={style.tecnologies} key={i}>{tec}</p>
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