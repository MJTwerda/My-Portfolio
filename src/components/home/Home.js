import React from "react";
import NavBar from "../navBar/NavBar";
import Body from "../body/Body";
import Button from "../buttonMod/Button";

import style from './Home.module.css';
import useTheme from '../../hooks/useTheme';

export default function Home() {
    const { theme, changeTheme } = useTheme();
    const styles = makeStyles(theme);

  return(
    <div style={styles.container}>
      <div className={style.nav}>
        <NavBar />
      </div>

      <div style={styles.bodyContainer}>
        <div className={style.btnGral}>
          <Button changeTheme={changeTheme} />
        </div>

        <Body mode={theme}/>
      </div>
    </div>
  )
};

const makeStyles = (currentTheme) => ({
  container: {
    display: 'flex',
    backgroundColor: currentTheme === 'light' ? 'whitesmoke' : 'black'
  },
  bodyContainer: {
    paddingLeft: '165px',
    paddingTop: '40px',
    boxSizing: 'border-box',
    backgroundColor: currentTheme === 'light' ? 'whitesmoke' : 'black'
  }
})