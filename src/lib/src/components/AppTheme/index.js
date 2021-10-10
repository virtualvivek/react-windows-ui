import { useEffect } from 'react'
import Appearance from '../Appearance'
import ThemeManager from '../utils/ThemeManager'

const AppTheme = (props) => {

  useEffect(() => {
    let navSwitch = document.getElementById("app-day-night-switch");

    if(props.scheme === 'dark') {
      Appearance.setDarkScheme();
      navSwitch.checked = true;
    }
    else if(props.scheme === 'light') {
      Appearance.setLightScheme();
      navSwitch.checked = false;
    }

    if(props.color) {
      document.documentElement.style.setProperty('--PrimaryColor', props.color)
      ThemeManager.createAlphaPrimaryColor()
    }

  }, [props.color,props.scheme]);

  return null;
}

export default AppTheme