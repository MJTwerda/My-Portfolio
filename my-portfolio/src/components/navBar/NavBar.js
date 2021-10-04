import React from 'react';
import Icon from '@mdi/react';
import { mdiMovieOpenSettings, mdiHeadCogOutline  } from '@mdi/js';

export default function NavBar() {
    return(
        <div>
            <Icon path={mdiMovieOpenSettings} 
                size={1.5}
                />
            <Icon path={mdiHeadCogOutline}
                size={1.5}
                />
            <h4>Navbar</h4>
        </div>
    )
}