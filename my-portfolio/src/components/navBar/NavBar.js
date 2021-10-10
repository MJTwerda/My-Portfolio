import React from 'react';
import Icon from '@mdi/react';
import { mdiMovieOpenSettings, mdiHeadCogOutline, mdiAlphaIBox, mdiForum } from '@mdi/js';

import style from './NavBar.module.css';

export default function NavBar() {
    return(
        <div className={style.general}>
            <div className={style.listContainer}>
                <a href='#about' className={style.link}>    
                    <div className={style.icons}>
                            <Icon path={mdiAlphaIBox} 
                                size={1.5}
                                />
                    </div>
                        <h3 className={style.title}>Info</h3>
                </a>
            </div>

            <div className={style.listContainer}>
                <a href='#projects' className={style.link}>
                    <div className={style.icons}>
                        <Icon path={mdiMovieOpenSettings} 
                            size={1.5}
                            />
                    </div>
                        <h3 className={style.title}>Projects</h3>
                </a>
            </div>

            <div className={style.listContainer}>
                <a href='#skills' className={style.link}>
                    <div className={style.icons}>
                        <Icon path={mdiHeadCogOutline}
                            size={1.5}
                            />
                    </div>
                        <h3 className={style.title}>Skills</h3>
                </a>       
            </div>

            <div className={style.listContainer}>
                <a href='#contactMe' className={style.link}>
                    <div className={style.icons}>
                        <Icon path={mdiForum}
                            size={1.5}
                            />
                    </div>
                        <h3 className={style.title}>Contact</h3>
                </a>       
            </div>
        </div>
    )
}