
var createAlphaAccentColor = function() {
    let alphaColor = window.getComputedStyle(document.documentElement).getPropertyValue('--AppColor');
    alphaColor = alphaColor.trim();
    alphaColor = alphaColor+'9C';
    document.documentElement.style.setProperty('--alpha_c', alphaColor);
}
exports.createAlphaAccentColor = createAlphaAccentColor

var setAppDark = function() {
    var meta = document.getElementById('statusBarColor');
    meta.parentNode.removeChild(meta);
    document.head.innerHTML += '<meta name="theme-color" content="#403E41" id="statusBarColor" />';
    document.documentElement.style.setProperty('--color_light_bg','#111');
    document.documentElement.style.setProperty('--color_dark_text','#FFF');
    document.documentElement.style.setProperty('--color_nav','#403E41');
    document.documentElement.style.setProperty('--color_light_grey','#444');
    document.documentElement.style.setProperty('--color_link_bg_hover','#555');
    document.documentElement.style.setProperty('--color_link_bg_active','#222');
    document.documentElement.style.setProperty('--color_button','#555555');
    document.documentElement.style.setProperty('--color_button_hover','#999');
    document.documentElement.style.setProperty('--color_button_active','#222');
    document.documentElement.style.setProperty('--color_button_active_border','#EEE');
    document.documentElement.style.setProperty('--color_accent_light','#FFF');
    document.documentElement.style.setProperty('--color_accent_dark','#403E41');
}
exports.setAppDark = setAppDark

var setAppLight = function() {
    var meta = document.getElementById('statusBarColor');
    meta.parentNode.removeChild(meta);
    document.head.innerHTML += '<meta name="theme-color" content="#EEE" id="statusBarColor" />';
    document.documentElement.style.setProperty('--color_light_bg','');
    document.documentElement.style.setProperty('--color_dark_text','');
    document.documentElement.style.setProperty('--color_nav','');
    document.documentElement.style.setProperty('--color_light_grey','');
    document.documentElement.style.setProperty('--color_link_bg_hover','');
    document.documentElement.style.setProperty('--color_link_bg_active','');
    document.documentElement.style.setProperty('--color_button','');
    document.documentElement.style.setProperty('--color_button_hover','');
    document.documentElement.style.setProperty('--color_button_active','');
    document.documentElement.style.setProperty('--color_button_active_border','');
    document.documentElement.style.setProperty('--color_accent_light','');
    document.documentElement.style.setProperty('--color_accent_dark','');
}
exports.setAppLight = setAppLight
