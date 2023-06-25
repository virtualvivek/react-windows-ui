import React, { useRef } from "react";
import { Appearance } from "../../../api";

const NavBarThemeSwitch = () => {
  const inputRef = useRef();
  const toggleDayNight = () => {
    let iswitch = inputRef.current;
    iswitch.checked ? Appearance.setDarkScheme() : Appearance.setLightScheme();
  }

  return (
    <label className="app-navbar-theme-switch">
      <input
        ref={inputRef}
        type="checkbox"
        onChange={toggleDayNight}
        id="app-navbar-theme-switch"
      />
      <div className="app-navbar-theme-switch-icon"></div>
    </label>
  )
}

export default NavBarThemeSwitch;