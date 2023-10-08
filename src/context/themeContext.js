import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [hasJustTriggered, setTriggered] = useState(false);

  //light Header, Wrapper and Contact Me Section Bg Color
  // const bgColur = "#38cf74 ";
  const bgColur = theme === "light" ? "#FF9B9B" : "#B2A4FF";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setTriggered(true);
    setTimeout(() => {
      setTriggered(false);
    }, 900);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, bgColur, hasJustTriggered }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
