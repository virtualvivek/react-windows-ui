import React from 'react'

const toggleDayNight = () => {
    let iswitch = document.getElementById("switch");

    if(iswitch.checked) {
      document.documentElement.style.setProperty('--color_light_bg','#111');
      document.documentElement.style.setProperty('--color_dark_text','#FFF');
      document.documentElement.style.setProperty('--color_nav','#403E41');
      document.documentElement.style.setProperty('--color_light_grey','#444');
      document.documentElement.style.setProperty('--color_link_bg_hover','#555');
      document.documentElement.style.setProperty('--color_link_bg_active','#222');
      document.documentElement.style.setProperty('--color_button','#555555');
      document.documentElement.style.setProperty('--color_button_hover','#999');
      document.documentElement.style.setProperty('--color_button_active','#222');
      document.documentElement.style.setProperty('--color_button_active_border','#EEE');
      document.documentElement.style.setProperty('--color_accent_light','#FFF');
      document.documentElement.style.setProperty('--color_accent_dark','#403E41');
    }
    else{
      document.documentElement.style.setProperty('--color_light_bg','');
      document.documentElement.style.setProperty('--color_dark_text','');
      document.documentElement.style.setProperty('--color_nav','');
      document.documentElement.style.setProperty('--color_light_grey','');
      document.documentElement.style.setProperty('--color_link_bg_hover','');
      document.documentElement.style.setProperty('--color_link_bg_active','');
      document.documentElement.style.setProperty('--color_button','');
      document.documentElement.style.setProperty('--color_button_hover','');
      document.documentElement.style.setProperty('--color_button_active','');
      document.documentElement.style.setProperty('--color_button_active_border','');
      document.documentElement.style.setProperty('--color_accent_light','');
      document.documentElement.style.setProperty('--color_accent_dark','');
    }
}

const SwitchDayNight = () => {
  return (
    <label className="app-switch">
        <input type="checkbox"
          onChange={toggleDayNight} id="switch"
         />
        <div dataoff="Day" dataon="Night"></div>
    </label>
  )
}


export default SwitchDayNight
