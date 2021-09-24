"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const Gauge=a=>{return/*#__PURE__*/_react.default.createElement("div",{style:{display:"inline-block",width:100*a.scale+"px",height:100*a.scale+"px"}},/*#__PURE__*/_react.default.createElement("svg",{style:{transform:"scale("+a.scale+")",transformOrigin:" 0% 0%",width:"100px",height:"100px"}},(()=>"fill"===a.type?/*#__PURE__*/_react.default.createElement("circle",{cx:"50",cy:"50",r:"45",fill:a.backgroundColor}):/*#__PURE__*/_react.default.createElement("circle",{cx:"50",cy:"50",r:"40",stroke:a.backgroundColor,strokeWidth:"5px",fill:"transparent"}))(),/*#__PURE__*/_react.default.createElement("path",{strokeLinecap:"round",strokeWidth:a.strokeWidth,stroke:a.strokeColor,style:{transition:"1s ease-in-out"},fill:"none",strokeDasharray:251.2*a.setProgress/100+",251.2",d:"M50 10\r a 40 40 0 0 1 0 80\r a 40 40 0 0 1 0 -80"}),/*#__PURE__*/_react.default.createElement("text",{x:"50",y:"50",textAnchor:"middle",dy:"7",fontSize:"17",fontWeight:"500",fill:a.valueColor},a.value),/*#__PURE__*/_react.default.createElement("text",{x:"50",y:"50",textAnchor:"middle",dy:"19",fontSize:"7",opacity:"0.7",fill:"var(--color_text_dark)"},a.info)))};Gauge.defaultProps={backgroundColor:"var(--color_light_grey)",strokeColor:"var(--PrimaryColor)",strokeWidth:5,scale:1,setProgress:0,valueColor:"var(--color_text_dark)"};var _default=Gauge;exports.default=_default;