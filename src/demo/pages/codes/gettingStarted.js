const AppConfigCSSDefault =
`:root {
  --PrimaryColor: #0078D7; /* App's primary color */
  --PrimaryColorLight: #47aeff;  /* Lighter version of --PrimaryColor for DarkMode */
}
body {
  font-family: "Segoe UI";
}
::selection {
  background-color: var(--PrimaryColor);
  color: #ffffff;
}
`;

export {
  AppConfigCSSDefault
}