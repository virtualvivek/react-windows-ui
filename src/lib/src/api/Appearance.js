const getColorScheme = () => {
  let color = localStorage.getItem("lc_storage_theme_key") ? localStorage.getItem("lc_storage_theme_key") : "system";
  return color.toString();
}

const setDarkScheme = (saveChanges = true) => {
  document.body.classList.add("dark-theme");
  document.documentElement.setAttribute("data-theme", "dark");

  if(document.getElementById("ui-navbar-theme-switch")) {
    document.getElementById("ui-navbar-theme-switch").checked = true;
  }
  if(saveChanges) { localStorage.setItem("lc_storage_theme_key", "dark"); }
  return "";
}

const setLightScheme = (saveChanges = true) => {
  document.body.classList.remove("dark-theme");
  document.documentElement.setAttribute("data-theme", "light");

  if(document.getElementById("ui-navbar-theme-switch")) {
    document.getElementById("ui-navbar-theme-switch").checked = false;
  }
  if(saveChanges) { localStorage.setItem("lc_storage_theme_key", "light"); }
  return "";
}

const setSystemScheme = () => {
  localStorage.setItem("lc_storage_theme_key", "system");
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkScheme(false);
  } else {
    setLightScheme(false);
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