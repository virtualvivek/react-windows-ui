import React, { useEffect,useRef } from 'react';
import { Appearance } from '../_api';

const SwitchDayNight = () => {

  const inputRef = useRef();

  const toggleDayNight = () => {
    let iswitch = inputRef.current;

    if(iswitch.checked) { Appearance.setDarkScheme() }
    else { Appearance.setLightScheme() }
  }

  useEffect(() => {
    let iswitch = inputRef.current;
    if (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) {
      iswitch.checked = true;
    }
  })

  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    let iswitch = inputRef.current;

    if(newColorScheme === "dark") {
      iswitch.checked = true;
    }
    else {
      iswitch.checked = false;
    }
  });

  return (
    <label className="app-switch">
      <input
        type="checkbox"
        onChange={toggleDayNight}
        ref={inputRef}
        id="app-day-night-switch"
      />
      <div
        dataoff="Day"
        dataon="Night">
      </div>
    </label>
  )
}

export default SwitchDayNight;