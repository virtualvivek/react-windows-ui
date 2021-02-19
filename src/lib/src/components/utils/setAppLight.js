const setAppLight = () => {
    var meta = document.getElementById('statusBarColor')
    meta.parentNode.removeChild(meta)
    document.head.innerHTML += '<meta name="theme-color" content="#EEE" id="statusBarColor" />'
    document.documentElement.style.setProperty('--color_light_bg','')
    document.documentElement.style.setProperty('--color_dark_text','')
    document.documentElement.style.setProperty('--color_nav','')
    document.documentElement.style.setProperty('--color_light_grey','')
    document.documentElement.style.setProperty('--color_light_grey_alpha','')
    document.documentElement.style.setProperty('--color_link_bg_hover','')
    document.documentElement.style.setProperty('--color_link_bg_active','')
    document.documentElement.style.setProperty('--color_button','')
    document.documentElement.style.setProperty('--color_button_hover','')
    document.documentElement.style.setProperty('--color_button_active','')
    document.documentElement.style.setProperty('--color_button_active_border','')
    document.documentElement.style.setProperty('--color_accent_light','')
    document.documentElement.style.setProperty('--color_accent_dark','')
}

export default setAppLight