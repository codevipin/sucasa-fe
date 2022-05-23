import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, ReactNode, useState } from "react";

type ThemeModeContextType = () => void;

export const ThemeModeUpdateContext = createContext<ThemeModeContextType>(
  () => {}
);
export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}
const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setDarkMode] = useState(ThemeMode.LIGHT);
  const darkTheme = createTheme({
    palette: {
      mode: themeMode === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT,
    },
  });

  const toggleTheme = () => {
    setDarkMode((prevDarkTheme) =>
      prevDarkTheme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    );
  };

  return (
    <ThemeModeUpdateContext.Provider value={toggleTheme}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
    </ThemeModeUpdateContext.Provider>
  );
};
export default ThemeModeProvider;
