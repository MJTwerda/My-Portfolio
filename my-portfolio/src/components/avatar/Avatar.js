import React from 'react';
import Social from '../social/Social';

import image from '../utils/images/Perfil.jpeg';

export default function Avatar() {
    return (
        <div>
            <img src={image} width='150' height='200' alt='' />
            <Social />
        </div>
    )
}