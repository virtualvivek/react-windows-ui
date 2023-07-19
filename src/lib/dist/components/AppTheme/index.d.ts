import React from "react";

export interface AppThemeProps {
  color ?: any;
  colorDarkMode ?: any;
  onColorChange ?: () => void;
  onSchemeChange ?: () => void;
  scheme ?: "light" | "dark" | "system" | "current";
}
declare const AppTheme: React.FC<AppThemeProps>;

export default AppTheme;