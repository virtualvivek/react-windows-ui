import React, { useEffect } from 'react'
import Appearance from '../Appearance'
import ThemeManager from '../utils/ThemeManager'

const AppTheme = React.memo(
  (props) => {
    useEffect(() => {
      //console.log("Rendering Theme");
    });

    return "";
  }, (prevProps, nextProps) => {

    let navSwitch = document.getElementById("app-day-night-switch");

    if(prevProps.scheme !== nextProps.scheme) {
      if(nextProps.scheme === 'dark') {
        Appearance.setDarkScheme();
        navSwitch.checked = true;
        nextProps.onSchemeChange();
      }
      else if(nextProps.scheme === 'light') {
        Appearance.setLightScheme();
        navSwitch.checked = false;
        nextProps.onSchemeChange();
      }  
    }

    if(prevProps.color !== nextProps.color) {
      if(nextProps.color) {
        document.documentElement.style.setProperty('--PrimaryColor', nextProps.color);
        ThemeManager.createAlphaPrimaryColor();
        nextProps.onColorChange();
      }
    }
  }
);

AppTheme.defaultProps = {
  onSchemeChange: () => {},
  onColorChange: () => {}
}

export default AppTheme