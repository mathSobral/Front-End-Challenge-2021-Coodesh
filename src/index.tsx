import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "./contexts/theming";
import "./i18n/config";
import "./assets/css/index.css";
import "@fontsource/roboto";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
