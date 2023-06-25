const AppConfigCSSDefault =
`:root {
  --PrimaryColor: #0078D7; /* App's primary color */
  --PrimaryColorLight: #47aeff;  /* Lighter version of --PrimaryColor for DarkMode */
}
body {
  font-family: "Segoe UI";
}
::selection {
  color: #ffffff;
  background-color: var(--PrimaryColor);
}
`;

export {
  AppConfigCSSDefault
}