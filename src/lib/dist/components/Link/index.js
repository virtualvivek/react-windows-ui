"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.object.assign.js");var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}const Link=a=>/*#__PURE__*/_react.default.createElement(_reactRouterDom.Link,_extends({to:a.to,className:"app-link",style:a.style},a),a.children);Link.defaultProps={to:"#"};var _default=Link;exports.default=_default;