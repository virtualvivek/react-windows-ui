"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const NavBarLinkUser=a=>/*#__PURE__*/_react.default.createElement("li",null,/*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink,{className:"app-nav-user",to:a.to,exact:a.exact},/*#__PURE__*/_react.default.createElement("img",{src:a.img,alt:a.imgAlt}),/*#__PURE__*/_react.default.createElement("span",null,a.text)));NavBarLinkUser.defaultProps={text:"link text",exact:!1,to:"#",imgAlt:"image"};var _default=NavBarLinkUser;exports.default=_default;