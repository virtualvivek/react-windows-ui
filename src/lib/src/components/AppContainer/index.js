import React, { useEffect } from "react";
import { Appearance } from "../../api";

const AppContainer = (props) => {

  const handleThemeEvent = (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    newColorScheme === "dark" ? Appearance.setDarkScheme(false) : Appearance.setLightScheme(false);
  };

  useEffect(() => {
    let theme = Appearance.getColorScheme();
    switch(theme) {
      case "dark": Appearance.setDarkScheme(false); break;
      case "light": Appearance.setLightScheme(false); break;
      default: {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => handleThemeEvent(e));
        return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", (e) => handleThemeEvent(e));
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