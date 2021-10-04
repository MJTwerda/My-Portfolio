import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Avatar from '../avatar/Avatar';


export default function Body() {
    return(
        <div>
            <About />
            <hr />
            <Avatar />
            <hr />
            <Skills />
        </div>
    )
}