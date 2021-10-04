import React from "react";
import image from '../images/Perfil.jpeg';

export default function Home() {
    return(
        <div>
            <h3>Este es el Home</h3>
            <img src={image} width='150' height='200' alt='' />
        </div>
    )
}