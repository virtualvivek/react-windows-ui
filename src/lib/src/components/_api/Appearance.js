const getColorScheme = () => {
  let color = window.getComputedStyle(document.documentElement).getPropertyValue('--color_scheme');
  return color.toString();
}

const setDarkScheme = () => {
  document.body.classList.add("dark-theme");
  document.documentElement.style.setProperty('--color_scheme', 'dark');

  document.documentElement.style.setProperty('--color_bg_light', '#111111');
  document.documentElement.style.setProperty('--color_button', '#555555');
  document.documentElement.style.setProperty('--color_button_hover', '#999999');
  document.documentElement.style.setProperty('--color_day_primary_night_grey', '#403E41');
  document.documentElement.style.setProperty('--color_day_primary_night_white', '#FFFFFF');
  document.documentElement.style.setProperty('--color_grey_light', '#444444');
  document.documentElement.style.setProperty('--color_grey_light_alpha', '#444444D1');
  document.documentElement.style.setProperty('--color_link_bg_active', '#222222');
  document.documentElement.style.setProperty('--color_link_bg_hover', '#555555');
  document.documentElement.style.setProperty('--color_navbar_bg', '#403E41');
  document.documentElement.style.setProperty('--color_text_dark', '#FFFFFF');

  if(document.getElementById("app-navbar-theme-switcher")) {
    document.getElementById("app-navbar-theme-switcher").checked = false;
    document.getElementById("app-navbar-theme-switcher-text").innerHTML="Night Mode";
  }
  
  return "";
}

const setLightScheme = () => {
  document.body.classList.remove("dark-theme");
  document.documentElement.style.setProperty('--color_scheme','light');
  
  document.documentElement.style.setProperty('--color_bg_light', '');
  document.documentElement.style.setProperty('--color_button', '');
  document.documentElement.style.setProperty('--color_button_hover', '');
  document.documentElement.style.setProperty('--color_day_primary_night_grey', '');
  document.documentElement.style.setProperty('--color_day_primary_night_white', '');
  document.documentElement.style.setProperty('--color_grey_light', '');
  document.documentElement.style.setProperty('--color_grey_light_alpha', '');
  document.documentElement.style.setProperty('--color_link_bg_active', '');
  document.documentElement.style.setProperty('--color_link_bg_hover', '');
  document.documentElement.style.setProperty('--color_navbar_bg', '');
  document.documentElement.style.setProperty('--color_text_dark', '');

  if(document.getElementById("app-navbar-theme-switcher")) {
    document.getElementById("app-navbar-theme-switcher").checked = true;
    document.getElementById("app-navbar-theme-switcher-text").innerHTML="Day Mode";
  }  

  return "";
}

const Appearance = {
  getColorScheme,
  setDarkScheme,
  setLightScheme
}

export default Appearance;