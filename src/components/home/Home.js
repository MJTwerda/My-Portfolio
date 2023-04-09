import React from "react";
import NavBar from "../navBar/NavBar";
import Body from "../body/Body";
import Button from "../buttonMod/Button";

import style from './Home.module.css';
import useTheme from '../../hooks/useTheme';

export default function Home() {
    const { theme, changeTheme } = useTheme();

  return(
    <div className={theme === 'light' ? style.container : style.containerDark}>
      <div className={style.nav}>
        <NavBar />
      </div>

      <div className={theme === 'light' ? style.bodyContainer : style.bodyContainerDark}>
        <div className={style.btnGral}>
          <Button changeTheme={changeTheme} />
        </div>

        <Body mode={theme}/>
      </div>
    </div>
  )
};
