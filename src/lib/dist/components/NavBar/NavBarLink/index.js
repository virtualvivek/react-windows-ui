"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const NavBarLink=a=>{return/*#__PURE__*/_react.default.createElement("li",null,/*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink,{to:a.to,exact:a.exact},a.icon,/*#__PURE__*/_react.default.createElement("span",null,a.text),a.showBadge?(()=>/*#__PURE__*/_react.default.createElement("div",{className:"app-badge"},a.showBadge))():""))};NavBarLink.defaultProps={text:"link text",exact:!1,to:"#"};var _default=NavBarLink;exports.default=_default;