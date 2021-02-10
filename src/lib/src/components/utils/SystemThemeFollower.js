var setAppDark = require('./ThemeManager').setAppDark
var setAppLight = require('./ThemeManager').setAppLight

const SystemThemeFollower = () => {

    let navSwitch = document.getElementById("app-day-night-switch")

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
        setAppDark()
        navSwitch.checked = true
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        
        const newColorScheme = e.matches ? "dark" : "light";

        if(newColorScheme === "dark") {
            setAppDark()
            navSwitch.checked = true
        }
        else {
            setAppLight()
            navSwitch.checked = false
        }
    })

    return ""

}

export default SystemThemeFollower