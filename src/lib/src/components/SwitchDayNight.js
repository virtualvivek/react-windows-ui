import React from 'react'
import setAppDark from './utils/setAppDark'
import setAppLight from './utils/setAppLight'


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
      <div
        dataoff="Day"
        dataon="Night">
      </div>
    </label>
  )
}


export default SwitchDayNight