import React from 'react';
import About from '../about/About';
import Footer from '../footer/Footer';
import Skills from '../skills/Skills';

import image from '../utils/images/Perfil.jpeg';

export default function Body() {
    return(
        <div>
            <img src={image} width='150' height='200' alt='' />
            <About />
            <hr />
            <Footer />
            <hr />
            <Skills />
        </div>
    )
}