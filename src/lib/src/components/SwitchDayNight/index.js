import React from 'react'
import Appearance from '../Appearance'

const SwitchDayNight = () => {

  const inputRef = React.useRef()

  const toggleDayNight = () => {
    let iswitch = inputRef.current

    if(iswitch.checked) { Appearance.setDarkScheme() }
    else { Appearance.setLightScheme() }
  }

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

export default SwitchDayNight