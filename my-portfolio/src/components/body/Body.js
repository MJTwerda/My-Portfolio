import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Avatar from '../avatar/Avatar';
import Projects from '../projects/Projects';
import ContactMe from '../contact/ContactMe';
import Experience from '../experience/Experience';
import Divisor from '../divisor/Divisor';

export default function Body() {
    return(
        <div>
            <About />
                <Divisor />
            <Avatar />
                <Divisor />
            <Experience />
                <Divisor />
            <Skills />
                <Divisor />
            <Projects />
                <Divisor />
            <ContactMe />
                <Divisor />
        </div>
    )
}