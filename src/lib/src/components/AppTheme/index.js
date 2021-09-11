import { useEffect } from 'react'
var setAppDark = require('../utils/ThemeManager').setAppDark
var setAppLight = require('../utils/ThemeManager').setAppLight
var createAlphaPrimaryColor = require('../utils/ThemeManager').createAlphaPrimaryColor

export default function AppTheme(props) {
  useEffect(() => {
    let navSwitch = document.getElementById("app-day-night-switch");

    if(props.mode === 'dark') {
      setAppDark();
      navSwitch.checked = true;
    }
    else if(props.mode === 'light') {
      setAppLight();
      navSwitch.checked = false;
    }

    if(props.color) {
      document.documentElement.style.setProperty('--PrimaryColor', props.color)
      createAlphaPrimaryColor()
    }

  }, [props.color,props.mode]);

  return null;
}