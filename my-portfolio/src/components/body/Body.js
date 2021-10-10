import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Avatar from '../avatar/Avatar';
import Projects from '../projects/Projects';
import ContactMe from '../contact/ContactMe';
import Experience from '../experience/Experience';

export default function Body() {
    return(
        <div>
            <About />
            <hr />
            <Avatar />
            <hr />
            <Experience />
            <hr />
            <Skills />
            <hr />
            <Projects />
            <hr />
            <ContactMe />
            <hr />
        </div>
    )
}