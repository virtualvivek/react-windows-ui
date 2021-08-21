<p align="center"> 
  <img src="markdown/md_img_header.png" width="410" /> 
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
  
  <a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/badge/Live Demo-Here-green.svg?color=00C244&style=flat-square&logo=PyTorchLightning"
      alt="Live Demo" />
  </a>
  
  <a href="https://www.npmjs.com/package/react-windows-ui">
    <img src="https://img.shields.io/badge/npm-package-green.svg?style=flat-square&logo=npm&color=f55a42"
      alt="npmJS" />
  </a>

</p>



<p align="center"><img src="markdown/md_img_promo.png" width="600" /></p>

<h1 align="center">Adaptive UI</h1>

<p align="center"><img src="markdown/md_img_adaptive.gif" width="652" /></p>

# Demo ⚡
https://virtualvivek.github.io/react-windows-ui/


# Installation
```ruby
$ npm install react-windows-ui
```

# Getting Started

```js
// Be sure to include styles at some point, probably during your bootstraping
import 'react-windows-ui/config/app-config.css'
import 'react-windows-ui/dist/react-windows-ui.min.css'
import 'react-windows-ui/icons/fonts/fonts.min.css'
```
### app-config

‣ `app-config.css` file contains the `PrimaryColor`, `Fontfamily` used by the app. <br>
‣ You can import default `app-config` using this file <a href="src/lib/config/app-config.css">app-config.css</a>.<br>
_OR_ <br>
Create your own like this

```css
:root {
  --PrimaryColor: #6632a8;  /* Change color you like */
}
body {
  font-family: "Segoe UI";  /* Change fontfamily you like */
}
```

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
<img src="markdown/md_img_boilerplate_screen.JPG" width="800" />

You can initialize you Repo with this `Template` <br>
<img src="markdown/md_img_template_boilerplate.JPG" width="650" />

OR <br>
**Clone as a Repository:**
[virtualvivek/react-windows-ui-boilerplate](https://github.com/virtualvivek/react-windows-ui-boilerplate)

## Run Demo Locally
```ruby
$ git clone https://github.com/virtualvivek/react-windows-ui.git
$ cd react-windows-ui
$ npm install
$ npm start
```

<h1 align="center">Windows 11 Styles.css</h1>
<p align="center"><img src="markdown/md_promo_w11.png" width="500" /></p>

```js
// include windows 11 styles at some point, probably during your bootstraping
...
import 'react-windows-ui/dist/react-windows-ui-sunvalley.min.css'
...
```

# RTL Support
Distribute layout direction from Right to Left.
```js
// include rtl styles at some point, probably during your bootstraping
...
import 'react-windows-ui/dist/react-windows-ui-rtl.min.css'
...
```


# Links

<table>
<thead>
<tr>
  <th align="left">Name</th>
  <th align="left">Details</th>
  <th align="left">Link</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Example Codes</td>
  <td>Components implementation <code>demo</code></td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/demo/">Example LINK</a></td>
</tr>
<tr>
  <td>Library Source Directory</td>
  <td>Folder publish to <code>npm</code></td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib">Library LINK</a></td>
</tr>
<tr>
  <td>Library SCSS Source</td>
  <td>Style <code>scss</code> source code</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/source/stylesheet">SCSS LINK</a></td>
</tr>
<tr>
  <td>Library SunValley SCSS Source</td>
  <td>SunValley Styles <code>scss</code> source code</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/source/stylesheet-sunvalley">SCSS LINK</a></td>
</tr>
<tr>
  <td>TypeScript Type Definitions</td>
  <td>Typescript <code>index.d.ts</code> import file</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/blob/main/src/lib/src/index.d.ts">D.TS LINK</a></td>
</tr>
</tbody>
</table>

---

# Details

<a href="https://www.npmjs.com/package/react-windows-ui">
  <img src="https://img.shields.io/badge/package-npm-red.svg?style=for-the-badge&logo=npm&color=f55a42" alt="npmJS" />
</a>
<br>
<a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
  <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui.min.css?style=for-the-badge&logo=windows&color=1572B6&label=react-windows-ui.min.css"
       alt="react-windows-ui.min.css" />
</a>
<br>
<a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
  <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui-sunvalley.min.css?style=for-the-badge&logo=microsoft&color=0078D4&label=react-windows-ui-sunvalley.min.css"
       alt="react-windows-ui-sunvalley.min.css" />
</a>
<br>
<a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib/dist">
  <img src="https://img.shields.io/github/size/virtualvivek/react-windows-ui/src/lib/dist/react-windows-ui-rtl.min.css?style=for-the-badge&logo=LineageOS&color=167C80&label=react-windows-ui-rtl.min.css"
       alt="react-windows-ui-rtl.min.css" />
</a>

# Find this library useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/react-windows-ui/stargazers) for this repository. :star:



# License

**`react-windows-ui`** is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE).<br>
Copyright (c) 2021 [**Vivek Verma**](https://github.com/virtualvivek)
