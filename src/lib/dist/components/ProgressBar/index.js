"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.object.assign.js");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}const ProgressBar=a=>{let{color:b,width:c,height:d,tooltip:e,setProgress:f=0}=a;return/*#__PURE__*/_react.default.createElement("div",{title:e,className:"ui-progress-bar".concat("hidden"===f?"hide":""),style:{height:d,width:c}},/*#__PURE__*/_react.default.createElement("span",_extends({role:"progressbar"},"indeterminate"===f&&{className:"indeterminate"},{style:{width:"indeterminate"===f?"":f+"%",backgroundColor:b}})))};var _default=ProgressBar;exports.default=_default;