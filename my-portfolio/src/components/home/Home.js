import React from "react";
import NavBar from '../navBar/NavBar';
import Body from "../body/Body";

import style from './Home.module.css';

export default function Home() {
    return(
        <div className={style.container}>
            <div className={style.nav}>
                <NavBar />
            </div>
            <div className={style.body}>
                <Body />
            </div>
        </div>
    )
}