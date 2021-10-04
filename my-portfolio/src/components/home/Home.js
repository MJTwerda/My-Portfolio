import React from "react";
import NavBar from '../navBar/NavBar';
import Body from "../body/Body";

import image from '../utils/images/Perfil.jpeg';

export default function Home() {
    return(
        <div>
            <NavBar />
            <img src={image} width='150' height='200' alt='' />
            <Body />
        </div>
    )
}