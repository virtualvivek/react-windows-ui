import React, { useEffect } from "react";
import { Appearance } from "../../api";

const AppTheme = React.memo(
  (props) => {
    const {scheme} = props;

    useEffect(() => {
      switch(scheme) {
        case "dark": Appearance.setDarkScheme(); break;
        case "light": Appearance.setLightScheme(); break;
        case "system": Appearance.setSystemScheme(); break;
        default: break;
      }
    }, [scheme]);

    return <>{/* ... */}</>;
  }, (prevProps, nextProps) => {

    if(prevProps.scheme !== nextProps.scheme) {
      switch(nextProps.scheme) {
        case "dark": Appearance.setDarkScheme(); break;
        case "light": Appearance.setLightScheme(); break;
        case "system": Appearance.setSystemScheme(); break;
        default: break;
      }
      nextProps.onSchemeChange();
    }

    if(prevProps.color !== nextProps.color) {
      if(nextProps.color) {
        document.documentElement.style.setProperty("--PrimaryColor", nextProps.color);
        if(nextProps.colorDarkMode) {
          document.documentElement.style.setProperty("--PrimaryColorLight", nextProps.colorDarkMode);
        } else {
          document.documentElement.style.setProperty("--PrimaryColorLight", nextProps.color);
        }
        nextProps.onColorChange();
      }
    }
  }
);

AppTheme.defaultProps = {
  onColorChange: () => {},
  onSchemeChange: () => {},
}

export default AppTheme;