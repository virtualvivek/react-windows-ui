import React, { useEffect } from 'react'
import Appearance from '../Appearance'
import ThemeManager from '../utils/ThemeManager'

const AppTheme = React.memo(
  (props) => {
    const {onMount, scheme} = props;

    useEffect(() => {
      onMount();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
      if(scheme === "system") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          Appearance.setDarkScheme();
        }
      }
    },[scheme]);


    if(scheme === "system") {
      window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";

        if(newColorScheme === "dark") {
          Appearance.setDarkScheme();
        }
        else {
          Appearance.setLightScheme();
        }
      })
    }

    return <>{/* ... */}</>;
  }, (prevProps, nextProps) => {

    let navSwitch = document.getElementById("app-day-night-switch");
    if(!navSwitch) {
      navSwitch = document.createElement("input");
      navSwitch.type = "checkbox";
    }

    if(prevProps.scheme !== nextProps.scheme) {
      if(nextProps.scheme === "dark") {
        Appearance.setDarkScheme();
        navSwitch.checked = true;
        nextProps.onSchemeChange();
      }
      else if(nextProps.scheme === "light") {
        Appearance.setLightScheme();
        navSwitch.checked = false;
        nextProps.onSchemeChange();
      }  
    }

    if(prevProps.color !== nextProps.color) {
      if(nextProps.color) {
        document.documentElement.style.setProperty("--PrimaryColor", nextProps.color);
        ThemeManager.createAlphaPrimaryColor();
        nextProps.onColorChange();
      }
    }
  }
);

AppTheme.defaultProps = {
  onSchemeChange: () => {},
  onColorChange: () => {},
  onMount: () => {},
  scheme: "system"
}

export default AppTheme