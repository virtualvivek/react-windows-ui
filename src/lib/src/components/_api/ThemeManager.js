const createAlphaPrimaryColor = () => {
  let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue("--PrimaryColor");
  alphaColor = alphaColor.trim();
  alphaColor = alphaColor+"9C";
  document.documentElement.style.setProperty("--color-primary-alpha", alphaColor);
  
  return "";
}

const createLightPrimaryColor = (color, amount) => {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

const ThemeManager = {
  createAlphaPrimaryColor,
  createLightPrimaryColor
}
export default ThemeManager;