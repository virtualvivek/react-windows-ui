const getColorScheme = () => {
  let color = window.getComputedStyle(document.documentElement).getPropertyValue('color-scheme');
  return color.toString();
}

const setDarkScheme = () => {
  document.body.classList.add("dark-theme");
  document.documentElement.setAttribute("data-theme", "dark");

  if(document.getElementById("app-navbar-theme-switcher")) {
    document.getElementById("app-navbar-theme-switcher").checked = false;
    document.getElementById("app-navbar-theme-switcher-text").innerHTML="Night Mode";
  }
  
  return "";
}

const setLightScheme = () => {
  document.body.classList.remove("dark-theme");
  document.documentElement.setAttribute("data-theme", "light");

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