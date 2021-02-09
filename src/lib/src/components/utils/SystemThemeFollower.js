
var setAppDark = require('./ThemeManager').setAppDark
var setAppLight = require('./ThemeManager').setAppLight

const SystemThemeFollower = () => {

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
        setAppDark()
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? "dark" : "light";
        newColorScheme === "dark" ? setAppDark() : setAppLight()
    })

    return ""

}

export default SystemThemeFollower