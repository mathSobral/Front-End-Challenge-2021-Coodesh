import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "./contexts/theming";
import "./i18n/config";
import "./assets/css/index.css";
import "@fontsource/roboto";
import Routes from "./routes";

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
