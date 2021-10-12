import React, {useState} from "react";
//import Home from "./components/home/Home";
import NavBar from './components/navBar/NavBar';
import Body from "./components/body/Body";
import Button from './components/buttonMod/Button';

import style from './App.module.css';

function App() {
  const [background, setBackground] = useState('light');

  function changeToDark() {
    setBackground('dark');
  }
  function changeToLight() {
    setBackground('light');
  }

  return(
    <div className={style.container}>
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

export default App;
