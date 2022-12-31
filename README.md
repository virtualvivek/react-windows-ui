<p align="center"> 
  <img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_header.png" width="250" /> 
</p>
<h1 align="center">react-windows-ui</h1>

<p align="center">Build full featured <b>Windows fluent UI</b> apps using <b>ReactJS</b>.</p>

<p align="center"><a href="https://virtualvivek.github.io/react-windows-ui/" target="_blank">Explore Project Docs »</a></p>
<p align="center"><a href="https://virtualvivek.github.io/react-windows-ui?win10/">Win10 Theme</a> · <a href="https://virtualvivek.github.io/react-windows-ui/">Win11 Theme</a></p>

<table align="center">
  <tr>
    <th colspan="2">Themes</th>
  </tr>
  <tr align="center">
    <td>Windows 10</td>
    <td>Windows 11</td>
  </tr>
	<tr align="center">
	<td><img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_promo_win10.png" width="260" alt="react-windows-ui"/></td>
	<td><img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_promo_win11.png" width="260" alt="react-windows-ui"/></td>
	</tr>
	<tr>
		<td>
		<code>import "react-windows-ui.min.css"</code>
		</td>
		<td>
		<code>import "react-windows-ui-11.min.css"</code>
		</td>
	</tr>
</table>

<h1 align="center"></h1>

# Status
<p>
  <a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/circleci/build/github/virtualvivek/react-windows-ui?style=flat&logo=circleci&token=346e79ab71a8d9c3bad22bacbebc7d7c50dae520" alt="Build" />
  </a>
  <a href="https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat&color=blue" alt="License: MIT" />
  </a>
	<a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/github/package-json/v/virtualvivek/react-windows-ui?style=flat&color=CB3837&logo=npm&logoColor=ffffff&label=npm"
      alt="Version" />
  </a>
  <a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
    <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui.min.css?style=flat&color=1572B6&logo=css3&logoColor=ffffff&label=react-windows-ui.min.css" alt="react-windows-ui.min.css" />
  </a>
  <a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
    <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui-11.min.css?style=flat&color=1d7fa3&logo=css3&logoColor=ffffff&label=react-windows-ui-11.min.css" alt="react-windows-ui-11.min.css" />
  </a>
	<a href="https://github.com/virtualvivek/react-windows-ui-boilerplate/">
    <img src="https://img.shields.io/github/package-json/v/virtualvivek/react-windows-ui-boilerplate?style=flat&color=ED163A&logo=webpack&logoColor=ffffff&label=boilerplate" alt="Boilerplate" />
  </a>
	<a href="https://www.npmjs.com/package/cra-template-windows-ui">
    <img src="https://img.shields.io/npm/v/cra-template-windows-ui?style=flat&color=7B16FF&logo=react&logoColor=ffffff&label=cra-template" alt="CRA Template" />
  </a>
</p>

# Getting Started
Install with `cra-template` to initialize project.

```js
npx create-react-app MyApp --template windows-ui
```

# [Boilerplate](https://github.com/virtualvivek/react-windows-ui-boilerplate)


# Manual Installation
Install either manually into your porject.
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


# Quick Links
Here are some useful links.

* [NPM CRA-Template](https://www.npmjs.com/package/cra-template-windows-ui)
* [NPM React-Windows-UI Library](https://www.npmjs.com/package/react-windows-ui)


# Find this project useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/react-windows-ui/stargazers) for this repository. :star:


# License

**`react-windows-ui`** is licensed under **`MIT license`**. View [license](https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE).<br>
Copyright (c) 2021-22 [**virtualvivek**](https://github.com/virtualvivek).
