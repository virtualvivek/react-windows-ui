"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const Checkbox=a=>/*#__PURE__*/_react.default.createElement("label",{className:"app-checkbox",title:a.tooltip},/*#__PURE__*/_react.default.createElement("input",{type:"checkbox",name:a.name,value:a.value,disabled:a.disabled,onChange:a.onChange,defaultChecked:a.defaultChecked})," "+a.label);Checkbox.defaultProps={disabled:!1,label:""};var _default=Checkbox;exports.default=_default;