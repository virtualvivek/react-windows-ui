const createAlphaPrimaryColor = () => {
  let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--PrimaryColor')
  alphaColor = alphaColor.trim()
  alphaColor = alphaColor+'9C'
  document.documentElement.style.setProperty('--color_primary_alpha', alphaColor)
  
  return ''
}

const ThemeManager = {
  createAlphaPrimaryColor: createAlphaPrimaryColor
}
export default ThemeManager;