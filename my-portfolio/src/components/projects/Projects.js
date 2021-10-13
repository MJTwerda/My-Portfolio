import React from 'react'
import {projectsDetail} from '../data/ProjectsDetail';

import style from './Projects.module.css';

export default function Projects({mode}) {
    return(
        <div id='projects' className={style.general}>
            <h2 className={mode === 'light' ? style.title : style.titleDark}>
                Mis Proyectos 
            </h2>
            {projectsDetail?.map((project, i) => {
                return (
                    <div key={i} className={style.individualProject}>
                        <div className={style.container}>
                            <h2 className={mode === 'light' ? style.titleProject : style.titleProDark}>
                                {project.name}
                            </h2>
                            <div className={style.tecGral}>
                                {project.tecnologies?.map((tec, i) => {
                                    return <p className={style.tecnologies} key={i}>{tec}</p>
                                })}
                            </div>
                        </div>
                        <div className={style.imgContainer}>
                            <a href={project.url} className={style.urlProject}>
                                <img src={project.image} alt='' className={style.img}/>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}