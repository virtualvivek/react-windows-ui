import React, { useRef } from "react";
import { Appearance } from "../../../api";

const NavBarThemeSwitch = (props) => {

  const inputRef = useRef();
  const toggleDayNight = () => {
    let isDark = inputRef.current.checked ? "dark" : "light";
    isDark === "dark" ? Appearance.setDarkScheme() : Appearance.setLightScheme();
    props.onChange(isDark);
  }

  return (
    <label className="ui-navbar-theme-switch" >
      <input
        ref={inputRef}
        type="checkbox"
        onClick={toggleDayNight}
        // onChange={toggleDayNight}
        id="ui-navbar-theme-switch"
      />
      <div className="ui-navbar-theme-switch-icon"></div>
    </label>
  )
}

NavBarThemeSwitch.defaultProps = {
  onChange: () => {}
}

export default NavBarThemeSwitch;