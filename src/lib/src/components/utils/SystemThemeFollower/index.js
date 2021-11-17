import { useEffect } from 'react'
import Appearance from '../../Appearance'

const SystemThemeFollower = () => {

  let navSwitch = document.getElementById("app-day-night-switch");
  if(!navSwitch) {
    navSwitch = document.createElement("input");
    navSwitch.type = "checkbox";
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")
      .matches) {
      Appearance.setDarkScheme();
      navSwitch.checked = true;
    }
  })

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
    e => {
    const newColorScheme = e.matches ? "dark" : "light";

    if(newColorScheme === "dark") {
      Appearance.setDarkScheme();
      navSwitch.checked = true;
    }
    else {
      Appearance.setLightScheme();
      navSwitch.checked = false;
    }
  });

  return ""
}

export default SystemThemeFollower