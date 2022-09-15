<p align="center"> 
  <img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_header.png" width="280" /> 
</p>

<h1 align="center">react-windows-ui</h1>

<p align="center">Build full featured <b>Windows fluent UI</b> apps using <b>ReactJS</b>.</p>

<p align="center">
	 
  <a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/circleci/build/github/virtualvivek/react-windows-ui?style=flat-square&logo=circleci&token=346e79ab71a8d9c3bad22bacbebc7d7c50dae520"
      alt="Build" />
  </a>
	
  <a href="https://github.com/virtualvivek/react-windows-ui/releases">
    <img src="https://img.shields.io/npm/v/react-windows-ui?color=31b57e&label=version&logo=git&logoColor=ffffff&style=flat-square"
      alt="Version" />
  </a>
  
  <a href="https://www.npmjs.com/package/react-windows-ui" target="_blank">
    <img src="https://img.shields.io/badge/npm-package-green.svg?style=flat-square&logo=npm&color=CB3837"
      alt="npmJS" />
  </a>
	
  <a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
    <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui.min.css?style=flat-square&logo=css3&color=1572B6&label=react-windows-ui.min.css" alt="react-windows-ui.min.css" />
  </a>

</p>


<a href="https://virtualvivek.github.io/react-windows-ui/" target="_blank"><p align="center"><img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_promo.png" width="580" alt="react-windows-ui" /></p></a>


# Demo & Docs
https://virtualvivek.github.io/react-windows-ui/

# Getting Started
You can use `cra-template` to initialize project or use `boilerplate`.

```js
npx create-react-app MyApp --template windows-ui
```

# [Boilerplate](https://github.com/virtualvivek/react-windows-ui-boilerplate)
<img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_boilerplate_screen.JPG" width="400" />


# Manual Installation
If you don't want `cra` or `boilerplate` you can manually install it on your porject.
<details>
<summary><b>See Manual Method</b></summary>
<br/>

```ruby
npm install react-windows-ui
```
```js
// Be sure to include styles at some point, probably during your bootstraping
import "react-windows-ui/config/app-config.css";
import "react-windows-ui/dist/react-windows-ui.min.css";
import "react-windows-ui/icons/fonts/fonts.min.css";
``` 
</details>


# Configuration

**app-config.css** file contains the **`PrimaryColor`**, **`Fontfamily`** used by the app. <br/><br/>
By `default` project uses <a href="src/lib/config/app-config.css">app-config.css</a>.<br>
Or `create` your own config file with custom PrimaryColor/Fontfamily like this below:

<details>
  <summary><b>app-config.css</b></summary><br/>
  
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
import { Button, InputText } from "react-windows-ui";

const App = () => (
  <>
    <Button type="primary" value="Press Me" />
    <InputText placeholder="Enter a text" />
  </>
);
```

# Run Demo Locally
```html
git clone https://github.com/virtualvivek/react-windows-ui.git
cd react-windows-ui
npm install
npm start
```


# View Docs for specific version
Head to the desired version [Release](https://github.com/virtualvivek/react-windows-ui/releases/). <br/>
Download the Release and start exploring !
```html
cd to-your-downloaded-version
npm install
npm start
```


# Links
Here are some useful links.

* [NPM CRA-Template](https://www.npmjs.com/package/cra-template-windows-ui)
* [NPM React-Windows-UI Library](https://www.npmjs.com/package/react-windows-ui)


# RTL Support
Distribute layout direction from Right to Left.
```js
// include rtl styles at some point, probably during your bootstraping
import "react-windows-ui/dist/react-windows-ui-rtl.min.css";
```

# Find this library useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/react-windows-ui/stargazers) for this repository. :star:


# License

**`react-windows-ui`** is licensed under **`MIT license`**. View [license](https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE).<br>
Copyright (c) 2021 [**Vivek Verma**](https://github.com/virtualvivek)
