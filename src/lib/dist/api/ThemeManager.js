"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.string.trim.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.replace.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.parse-int.js");const createAlphaPrimaryColor=()=>{let a=window.getComputedStyle(document.documentElement).getPropertyValue("--PrimaryColor");return a=a.trim(),a+="9C",document.documentElement.style.setProperty("--color-primary-alpha",a),""},createLightPrimaryColor=(a,b)=>"#"+a.replace(/^#/,"").replace(/../g,a=>("0"+Math.min(255,Math.max(0,parseInt(a,16)+b)).toString(16)).substr(-2)),ThemeManager={createAlphaPrimaryColor,createLightPrimaryColor};var _default=ThemeManager;exports.default=_default;