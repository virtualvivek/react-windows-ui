import React, { useEffect, useRef, useState } from "react";
import { Appearance } from "../../_api";

const NavBarThemeSwitch = () => {

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

  const themeListener = (e) => {
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
  }

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", themeListener);
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", themeListener);
    };
  }, []);

  return (
    <label className="app-navbar-theme-switch">
      <input
        ref={inputRef}
        type="checkbox"
        onChange={toggleDayNight}
        id="app-navbar-theme-switch"
      />
      <div className="app-navbar-theme-switch-view"></div>
      <span id="app-navbar-theme-switch-text">{labelText}</span>
    </label>
  )
}

export default NavBarThemeSwitch;