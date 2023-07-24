"use strict";require("core-js/modules/es.weak-map.js"),require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_MenuItem=_interopRequireDefault(require("./MenuItem"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function MenuList(a,b){const c=(0,_react.useRef)(null);return(0,_react.useImperativeHandle)(b,()=>({toggleShow:()=>{c.current.classList.toggle("show")}})),/*#__PURE__*/_react.default.createElement("ul",{ref:c,onClick:a.onItemClick,className:"app-cmdbar-menu-list cmdbar-submenu"},Array.isArray(a.listData.children)?/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,a.listData.children.map((a,b)=>[a.type===_MenuItem.default&&/*#__PURE__*/_react.default.createElement(_MenuItem.default,{key:b,icon:a.props.icon,label:a.props.label})]))// If there is only single child of sub child li
:a.listData.children?/*#__PURE__*/_react.default.createElement(_MenuItem.default,{label:a.listData.children.props.label,icon:a.listData.children.props.icon}):/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null))}var _default=/*#__PURE__*/(0,_react.forwardRef)(MenuList);exports.default=_default;