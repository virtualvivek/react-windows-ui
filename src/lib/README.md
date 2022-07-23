<p align="center"> 
  <img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_header.png" width="402" /> 
</p>
<h1 align="center">react-windows-ui</h1>

<p align="center">Build full featured <b>Windows fluent UI</b> apps using <b>ReactJS</b>.</p>

<p align="center">
	
  <a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/circleci/build/github/virtualvivek/react-windows-ui?style=flat-square&logo=circleci&token=346e79ab71a8d9c3bad22bacbebc7d7c50dae520"
      alt="Build" />
  </a>
	
  <a href="https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat-square&color=blue"
      alt="License: MIT" />
  </a>
  
  <a href="https://github.com/virtualvivek/react-windows-ui/releases">
    <img src="https://img.shields.io/npm/v/react-windows-ui?color=31b57e&label=version&logo=git&logoColor=ffffff&style=flat-square"
      alt="Version" />
  </a>
  
   <a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
    <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui.min.css?style=flat-square&logo=css3&color=1572B6&label=react-windows-ui.min.css" alt="react-windows-ui.min.css" />
  </a>
   
</p>

<a href="https://virtualvivek.github.io/react-windows-ui/" target="_blank"><p align="center"><img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_promo.png" width="652" /></p></a>


# Demo ⚡
https://virtualvivek.github.io/react-windows-ui/

# Getting Started
It will setup everything and then don't require below manual method.

```js
npx create-react-app MyAppName --template windows-ui
```

# Manual Setup
If you don't want to go with the above `create-react-app` then use the below manual method.

```ruby
npm install react-windows-ui
```
```js
// Be sure to include styles at some point, probably during your bootstraping
import 'react-windows-ui/config/app-config.css'
import 'react-windows-ui/dist/react-windows-ui.min.css'
import 'react-windows-ui/icons/fonts/fonts.min.css'
```
# Configuration

**app-config.css** file contains the **`PrimaryColor`**, **`Fontfamily`** used by the app. <br>
You can either import it from <a href="src/lib/config/app-config.css">app-config.css</a>.<br>
OR <br>
Create your own like this
<details>
  <summary><b>app-config.css</b></summary><br>
  
```css
:root {
  --PrimaryColor: #0078D7; /* Change of your choice */
  --PrimaryColorLight: #47aeff;  /* Lighter version of --PrimaryColor for DarkMode */
}
body {
  font-family: "Segoe UI";
}
::selection {
  color: #ffffff;
  background-color: var(--PrimaryColor);
}
```
</details>



# Usage

```js
import { Button, InputText } from 'react-windows-ui';

const App = () => (
  <>
    <Button type="primary" value="Press Me" />
    <InputText placeholder="Enter a text" />
  </>
);
```

# [Boilerplate](https://github.com/virtualvivek/react-windows-ui-boilerplate)
<img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_boilerplate_screen.JPG" width="540" />


# Run Demo Locally
```php
$ git clone https://github.com/virtualvivek/react-windows-ui.git
$ cd react-windows-ui
$ npm install
$ npm start
```


# RTL Support
Distribute layout direction from Right to Left.
```js
// include rtl styles at some point, probably during your bootstraping

import 'react-windows-ui/dist/react-windows-ui-rtl.min.css'
```


# Links
Here are some useful links.

* [NPM CRA-Template](https://www.npmjs.com/package/cra-template-windows-ui)
* [NPM React-Windows-UI Lib](https://www.npmjs.com/package/react-windows-ui)



# Find this library useful? :heart:
Support it by joining [stargazers](https://github.com/virtualvivek/react-windows-ui/stargazers) for this repository. :star:


# License

`react-windows-ui` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE).<br>
Copyright (c) 2021 [Vivek Verma](https://github.com/virtualvivek)
