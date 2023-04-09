import React, { createContext, useState } from "react";

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children}) => {
  const [theme, setTheme] = useState(null);

  const changeTheme = (newTheme) => {
    return setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeContext;