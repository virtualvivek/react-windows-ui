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

<h1 align="center"></h1>

<table>
  <thead>
    <tr>
      <th>Windows 10 Style</th>
      <th>Windows 11 Style</th>
    </tr>
  </thead>
  <tbody>
<tr>
<td><img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_promo.png" width="350" alt="react-windows-ui"/></td>
<td><img src="https://github.com/virtualvivek/react-windows-ui/blob/main/markdown/md_img_promo.png" width="350" alt="react-windows-ui"/></td>
</tr>
<tr>
<td>

```js
import "react-windows-ui.min.css";
```

</td>
<td>
	
```js
import "react-windows-ui-11.min.css";
```

</td>
</tr>
</tbody>
</table>


# Demo & Docs
https://virtualvivek.github.io/react-windows-ui/

# Getting Started
You can use `cra-template` to initialize project or use `boilerplate`.

```js
npx create-react-app MyApp --template windows-ui
```

# [Boilerplate](https://github.com/virtualvivek/react-windows-ui-boilerplate)


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


# Links
Here are some useful links.

* [NPM CRA-Template](https://www.npmjs.com/package/cra-template-windows-ui)
* [NPM React-Windows-UI Library](https://www.npmjs.com/package/react-windows-ui)


# Find this project useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/react-windows-ui/stargazers) for this repository. :star:


# License

**`react-windows-ui`** is licensed under **`MIT license`**. View [license](https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE).<br>
Copyright (c) 2021 [**Vivek Verma**](https://github.com/virtualvivek)
