import React from "react";
import { render } from "react-dom";
import App from "./App";
import MyThemeProvider from "./context";
render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>,
  document.getElementById("app")
);
