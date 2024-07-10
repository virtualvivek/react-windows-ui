"use strict";const _excluded=["src","alt","objectFit","tooltip","width","height","margin","padding","borderRadius","isLoading"];require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.weak-map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _react=_interopRequireWildcard(require("react")),_LoaderBusyWrapper=_interopRequireDefault(require("../_common/LoaderBusyWrapper"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}const ImageView=a=>{const{src:b,alt:c,objectFit:d,tooltip:e,width:f,height:g,margin:h,padding:i,borderRadius:j,isLoading:k}=a,l=_objectWithoutProperties(a,_excluded),[m,n]=(0,_react.useState)(!1),o=()=>/*#__PURE__*/_react.default.createElement("div",{className:"ui-img-view-loader"},/*#__PURE__*/_react.default.createElement("div",{className:"ui-loader-busy light animate"},/*#__PURE__*/_react.default.createElement(_LoaderBusyWrapper.default,null))),p=()=>{n(!0)};return/*#__PURE__*/_react.default.createElement("div",{className:"ui-img-view-container",title:e,style:{width:f,height:g,margin:h,padding:i,borderRadius:j}},/*#__PURE__*/_react.default.createElement("img",_extends({className:"ui-img-view",src:b,alt:c},l,{style:{objectFit:d}// onLoad={() => setLoad(true)}
,onLoad:()=>{p(),a.onLoad()},onError:()=>{p(),a.onError()}})),k?o():"",m?"":o())};ImageView.defaultProps={width:124,height:124,alt:"image",isLoading:!1,objectFit:"cover",onLoad:()=>{},onError:()=>{}};var _default=ImageView;exports.default=_default;