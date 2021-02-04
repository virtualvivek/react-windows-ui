const ThemeManager = () => {

let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--AppColor');
alphaColor = alphaColor.trim();
alphaColor = alphaColor+'9C';
document.documentElement.style.setProperty('--alpha_c', alphaColor);

return ""
}


export default ThemeManager
