const AppearanceImportCode =
`import { Appearance } from "react-windows-ui";`;

const AppearanceUsageCode =
`const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    Appearance.setLightScheme()
    // Do action on dark color scheme
}`;

const AppearanceGetColorSchemeCode =
`static getColorScheme(); // "light", "dark", "system"`;

const AppearanceSetDarkSchemeCode =
`static setDarkScheme();`;

const AppearanceSetLightSchemeCode =
`static setLightScheme();`;

const AppearanceSetSystemSchemeCode =
`static setSystemScheme();`;

export {
  AppearanceImportCode,
  AppearanceUsageCode,
  AppearanceGetColorSchemeCode,
  AppearanceSetDarkSchemeCode,
  AppearanceSetLightSchemeCode,
  AppearanceSetSystemSchemeCode
}