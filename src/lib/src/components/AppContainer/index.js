import React, { useEffect } from "react";
import { Appearance } from "../../api";

const AppContainer = (props) => {

  const handleThemeEvent = (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    newColorScheme === "dark" ? Appearance.setDarkScheme() : Appearance.setLightScheme();
  };

  useEffect(() => {
    let theme = Appearance.getColorScheme();
    switch(theme) {
      case "dark": Appearance.setDarkScheme(); break;
      case "light": Appearance.setLightScheme(); break;
      default: {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => handleThemeEvent(e));
        return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleThemeEvent );
      }
    }
  }, []);

  return (
    <div className="container-flex-row" style={props.style}>
      {props.children}
    </div>
  );
}

export default AppContainer;