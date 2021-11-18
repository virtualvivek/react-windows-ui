const getColorScheme = () => {
  let color = window.getComputedStyle(document.documentElement)
  .getPropertyValue('--color_scheme')
  return color.toString()
}

const setDarkScheme = () => {
  document.documentElement.style.setProperty('--color_scheme','dark')
  document.documentElement.style.setProperty('--color_bg_light','#111111')
  document.documentElement.style.setProperty('--color_text_dark','#FFFFFF')
  document.documentElement.style.setProperty('--color_nav','#403E41')
  document.documentElement.style.setProperty('--color_light_grey','#444444')
  document.documentElement.style.setProperty('--color_light_grey_alpha','#444444D1')
  document.documentElement.style.setProperty('--color_link_bg_hover','#555555')
  document.documentElement.style.setProperty('--color_link_bg_active','#222222')
  document.documentElement.style.setProperty('--color_button','#555555')
  document.documentElement.style.setProperty('--color_button_hover','#999999')
  document.documentElement.style.setProperty('--color_primary_light','#FFFFFF')
  document.documentElement.style.setProperty('--color_primary_dark','#403E41')
  
  return ''
}

const setLightScheme = () => {
  document.documentElement.style.setProperty('--color_scheme','light')
  document.documentElement.style.setProperty('--color_bg_light','')
  document.documentElement.style.setProperty('--color_text_dark','')
  document.documentElement.style.setProperty('--color_nav','')
  document.documentElement.style.setProperty('--color_light_grey','')
  document.documentElement.style.setProperty('--color_light_grey_alpha','')
  document.documentElement.style.setProperty('--color_link_bg_hover','')
  document.documentElement.style.setProperty('--color_link_bg_active','')
  document.documentElement.style.setProperty('--color_button','')
  document.documentElement.style.setProperty('--color_button_hover','')
  document.documentElement.style.setProperty('--color_primary_light','')
  document.documentElement.style.setProperty('--color_primary_dark','')

  return ''
}

const Appearance = {   
  getColorScheme: getColorScheme,
  setDarkScheme: setDarkScheme,
  setLightScheme: setLightScheme,
}

export default Appearance;