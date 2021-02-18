var setAppDark = require('./ThemeManager').setAppDark
var setAppLight = require('./ThemeManager').setAppLight

const SystemThemeFollower = () => {

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    {
        setAppDark();
        let navSwitch = document.getElementById("app-day-night-switch");
        navSwitch.checked = true;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        
        const newColorScheme = e.matches ? "dark" : "light";
        let navSwitch = document.getElementById("app-day-night-switch");

        if(newColorScheme === "dark") {
            setAppDark();
            navSwitch.checked = true;
        }
        else {
            setAppLight();
            navSwitch.checked = false;
        }
    })

    return ""

}

export default SystemThemeFollower