import React, { createContext, useState } from "react";

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children}) => {
  const [theme, setTheme] = useState(null);

  const changeTheme = (newTheme) => {
    setTimeout(() => {
      setTheme(newTheme);
      document.body.classList.add('fade');
      setTimeout(() => {
        document.body.classList.remove('fade');
      }, 1000);
    }, 20);
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeContext;