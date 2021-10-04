import React from 'react';
import Icon from '@mdi/react';
import { mdiMovieOpenSettings, mdiHeadCogOutline  } from '@mdi/js';

import style from './NavBar.module.css';

export default function NavBar() {
    return(
        <div className={style.general}>
            <div className={style.listContainer}>
                <div className={style.icons}>
                    <Icon path={mdiMovieOpenSettings} 
                        size={1.5}
                        />
                </div>
                    <h3 className={style.title}>Projects</h3>
            </div>

            <div className={style.listContainer}>
                <div className={style.icons}>
                    <Icon path={mdiHeadCogOutline}
                        size={1.5}
                        />
                </div>
                    <h3 className={style.title}>Skills</h3>
            </div>
        </div>
    )
}