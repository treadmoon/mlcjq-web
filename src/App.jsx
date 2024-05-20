import React from "react";
import { Outlet } from "react-router-dom";
import "./App.less";

import Head from "./layout/head";
import Foot from "./layout/foot";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="section">
          <ThemeContext.Provider value={themes.dark}>
            <Outlet />
          </ThemeContext.Provider>
        </div>
        <div className="navbar">
          <Head />
        </div>
      </div>
      <div className="foot">
        <Foot />
      </div>
    </div>
  );
}

export default App;
