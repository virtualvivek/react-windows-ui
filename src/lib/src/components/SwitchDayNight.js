import React from 'react'
var setAppDark = require('./utils/ThemeManager').setAppDark
var setAppLight = require('./utils/ThemeManager').setAppLight


const SwitchDayNight = () => {

  const inputRef = React.useRef()

  const toggleDayNight = () => {
    let iswitch = inputRef.current

    if(iswitch.checked) {
      setAppDark()
    }
    else{
      setAppLight()
    }
  }


  return (
    <label className="app-switch">
        <input
          type="checkbox"
          onChange={toggleDayNight}
          ref={inputRef}
          id="app-day-night-switch"
         />
        <div dataoff="Day" dataon="Night"></div>
    </label>
  )
}


export default SwitchDayNight
