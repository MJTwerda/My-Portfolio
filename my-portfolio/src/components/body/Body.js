import React from 'react';
import About from '../about/About';
import Skills from '../skills/Skills';
import Avatar from '../avatar/Avatar';
import Projects from '../projects/Projects';
import ContactMe from '../contact/ContactMe';
import Experience from '../experience/Experience';
import Divisor from '../divisor/Divisor';

export default function Body({mode}) {
    return(
        <div>
            <About mode={mode} />
                <Divisor mode={mode}/>
            <Avatar mode={mode} />
                <Divisor mode={mode}/>
            <Experience mode={mode} />
                <Divisor mode={mode}/>
            <Skills mode={mode} />
                <Divisor mode={mode}/>
            <Projects mode={mode} />
                <Divisor mode={mode}/>
            <ContactMe mode={mode} />
                <Divisor mode={mode}/>
        </div>
    )
}