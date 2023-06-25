const getColorScheme = () => {
  let color = localStorage.getItem("lc_storage_theme_key") ? localStorage.getItem("lc_storage_theme_key") : "system";
  return color.toString();
}

const setDarkScheme = () => {
  document.body.classList.add("dark-theme");
  document.documentElement.setAttribute("data-theme", "dark");

  if(document.getElementById("app-navbar-theme-switcher")) {
    document.getElementById("app-navbar-theme-switcher").checked = true;
  }
  localStorage.setItem("lc_storage_theme_key", "dark");
  return "";
}

const setLightScheme = () => {
  document.body.classList.remove("dark-theme");
  document.documentElement.setAttribute("data-theme", "light");

  if(document.getElementById("app-navbar-theme-switcher")) {
    document.getElementById("app-navbar-theme-switcher").checked = false;
  }
  localStorage.setItem("lc_storage_theme_key", "light");
  return "";
}

const setSystemScheme = () => {
  localStorage.setItem("lc_storage_theme_key", "system");
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkScheme();
  } else {
    setLightScheme();
  }
  return "";
}

const Appearance = {
  getColorScheme,
  setDarkScheme,
  setLightScheme,
  setSystemScheme
}

export default Appearance;