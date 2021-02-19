const setAppDark = () => {
    var meta = document.getElementById('statusBarColor')
    meta.parentNode.removeChild(meta)
    document.head.innerHTML += '<meta name="theme-color" content="#403E41" id="statusBarColor" />'
    document.documentElement.style.setProperty('--color_light_bg','#111111')
    document.documentElement.style.setProperty('--color_dark_text','#FFFFFF')
    document.documentElement.style.setProperty('--color_nav','#403E41')
    document.documentElement.style.setProperty('--color_light_grey','#444444')
    document.documentElement.style.setProperty('--color_light_grey_alpha','#444444D1')
    document.documentElement.style.setProperty('--color_link_bg_hover','#555555')
    document.documentElement.style.setProperty('--color_link_bg_active','#222222')
    document.documentElement.style.setProperty('--color_button','#555555')
    document.documentElement.style.setProperty('--color_button_hover','#999999')
    document.documentElement.style.setProperty('--color_button_active','#222222')
    document.documentElement.style.setProperty('--color_button_active_border','#EEEEEE')
    document.documentElement.style.setProperty('--color_accent_light','#FFFFFF')
    document.documentElement.style.setProperty('--color_accent_dark','#403E41')
}

export default setAppDark