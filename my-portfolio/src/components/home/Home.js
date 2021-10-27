import React, {useState} from "react";
import NavBar from "../navBar/NavBar";
import Body from "../body/Body";
import Button from "../buttonMod/Button";

import style from './Home.module.css';

export default function Home() {
    const [background, setBackground] = useState('light');

    function changeToDark() {
        setBackground('dark');
    }
    function changeToLight() {
        setBackground('light');
    }

    return(
        <div className={background === 'light' ? style.container : style.containerDark}>
        <div className={style.nav}>
            <NavBar />
        </div>
        <div className={background === 'light' ? style.body : style.bodyDark}>
            <div className={style.btnGral}>
              <Button setToLight={changeToLight} setToDark={changeToDark}/>
            </div>
            <Body mode={background}/>
        </div>
    </div>
    )
}