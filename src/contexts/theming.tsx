import React, { createContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider as JssThemeProvider } from "react-jss";
import { MuiThemeProvider, useMediaQuery } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { lightScheme, darkScheme } from "../constants/schemes";

const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [selectedTheme, setSelectedTheme] = useState(lightScheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("@pharma/lastTheme");

    if (savedTheme) {
      setSelectedTheme(savedTheme === "light" ? lightScheme : darkScheme);
    } else {
      setSelectedTheme(prefersDarkMode ? darkScheme : lightScheme);
    }
  }, [prefersDarkMode]);

  function switchTheme(themingMode: string) {
    if (themingMode === "light" || themingMode === "dark") {
      setSelectedTheme(themingMode === "light" ? lightScheme : darkScheme);
      localStorage.setItem("@pharma/lastTheme", themingMode);
    } else {
      setSelectedTheme(prefersDarkMode ? darkScheme : lightScheme);
      localStorage.removeItem("@pharma/lastTheme");
    }
  }

  const muiTheme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
          fontSize: 16,
        },
        palette: {
          background: {
            default: selectedTheme.background0,
          },
          primary: {
            main: selectedTheme.primary0,
          },
          secondary: {
            main: selectedTheme.primary0,
          },
          text: {
            primary: selectedTheme.textPrimary,
            secondary: selectedTheme.textSecondary,
          },
        },
      }),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <JssThemeProvider theme={selectedTheme}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </JssThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
