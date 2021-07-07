import React, { createContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider as JssThemeProvider } from "react-jss";
import { MuiThemeProvider, useMediaQuery } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { lightScheme, darkScheme } from "../constants/schemes";

const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: React.ReactNode;
}
/**
 * The ThemeProvider is a wrapper to JssThemeProvider that allows switch themes.
 * */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [selectedTheme, setSelectedTheme] = useState(lightScheme);

  /**
   * Load last selected theme or the prefered color scheme.
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("@rhisa/lastTheme");

    if (savedTheme) {
      setSelectedTheme(savedTheme === "light" ? lightScheme : darkScheme);
    } else {
      setSelectedTheme(prefersDarkMode ? darkScheme : lightScheme);
    }
  }, [prefersDarkMode]);

  /**
   * Switch the theme mode between light, dark or an auto value based on css prefers-color-scheme.
   */
  function switchTheme(themingMode: string) {
    if (themingMode === "light" || themingMode === "dark") {
      setSelectedTheme(themingMode === "light" ? lightScheme : darkScheme);
      localStorage.setItem("@rhisa/lastTheme", themingMode);
    } else {
      setSelectedTheme(prefersDarkMode ? darkScheme : lightScheme);
      localStorage.removeItem("@rhisa/lastTheme");
    }
  }

  /**
   * Generate a theme to be used on Material-ui components.
   */
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
