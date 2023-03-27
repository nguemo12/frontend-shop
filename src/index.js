import React from "react";
import ReactDOM from "react-dom";

import { DarkModeContextProvider } from "./context/darkModeContext";
import App from "./App";
import Login from "./Login";



ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Login />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
