import React, { useEffect, useRef, useState } from "react";
import { Appearance } from "../../_api";

const NavThemeSwitcher = () => {

  const inputRef = useRef();
  const [labelText, setLabelText] = useState("Mode");

  const toggleDayNight = () => {
    let iswitch = inputRef.current;

    if(iswitch.checked) {
      Appearance.setLightScheme();
      setLabelText("Day Mode");
    }
    else {
      Appearance.setDarkScheme();
      setLabelText("Night Mode");
    }
  }

  useEffect(() => {
    let iswitch = inputRef.current;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      iswitch.checked = false;
      setLabelText("Night Mode");
    }
    else {
      iswitch.checked = true;
      setLabelText("Day Mode");
    }
  }, [setLabelText])

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    let iswitch = inputRef.current;

    if(newColorScheme === "dark") {
      iswitch.checked = false;
      setLabelText("Night Mode");
    }
    else {
      iswitch.checked = true;
      setLabelText("Day Mode");
    }
  });

  return (
    <div className="app-navbar-theme-switcher">
      <label className="dayNight">
        <input
          ref={inputRef}
          type="checkbox"
          id="app-navbar-theme-switcher"
          onChange={toggleDayNight}
        />
        <div></div>
        <span id="app-navbar-theme-switcher-text">{labelText}</span>
      </label>
    </div>
  )
}

export default NavThemeSwitcher;