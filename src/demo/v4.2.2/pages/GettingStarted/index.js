import React, { useState } from "react";
import { NavPageContainer} from "../../_lib";
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { UIAppJS, NavBarSearch, NavBarThemeSwitch, NavBarSubMenu,
        NavBarLink, NavBarLinkImg, NavBarTitle, PageContainer } from "./codes/gettingStarted";
import "./css/desktop.css";
import Img1 from "../../../assets/illustration/mountain.jpg";
import { NavBarProps, NavBarLinkProps, SubMenuProps,
        ThemeSwitchProps, NavBarSearchProps, PageContainerProps } from "./props";

const GettingStarted = () => {

  const [uiTemplate, setUITemplate] = useState(UIAppJS);
  const [uiTitle, setUITitle] = useState("App.js");
  const [uiProps, setUIProps] = useState(NavBarProps);

  const setUI = (title) => {
    switch(title) {
      case "App.js": {
        setUITemplate(UIAppJS);
        setUITitle("App.js");
        setUIProps(NavBarProps);
        break;
      }
      case "NavBarSearch": {
        setUITemplate(NavBarSearch);
        setUITitle("NavBarSearch");
        setUIProps(NavBarSearchProps);
        break;
      }
      case "NavBarThemeSwitch": {
        setUITemplate(NavBarThemeSwitch);
        setUITitle("NavBarThemeSwitch");
        setUIProps(ThemeSwitchProps);
        break;
      }
      case "NavBarSubMenu": {
        setUITemplate(NavBarSubMenu);
        setUITitle("NavBarSubMenu");
        setUIProps(SubMenuProps);
        break;
      }
      case "NavBarLink": {
        setUITemplate(NavBarLink);
        setUITitle("NavBarLink");
        setUIProps(NavBarLinkProps);
        break;
      }
      case "NavBarLinkImg": {
        setUITemplate(NavBarLinkImg);
        setUITitle("NavBarLinkImg");
        setUIProps(NavBarLinkProps);
        break;
      }
      case "NavBarTitle": {
        setUITemplate(NavBarTitle);
        setUITitle("NavBarTitle");
        setUIProps(<></>);
        break;
      }
      case "PageContainer": {
        setUITemplate(PageContainer);
        setUITitle("PageContainer");
        setUIProps(PageContainerProps);
        break;
      }
      default: break;
    }
  }

  return (
    <NavPageContainer hasPadding animateTransition>

      <h2>{uiTitle}</h2>

      <div className="template-container">
        <div className="template-desktop">
          <div className="template-navbar">
            <div
              className={`temp-navitem temp-header ${uiTitle === "App.js" ?? true}`}
              onClick={() => setUI("App.js")}>
              <span className="temp-toggler">≡</span><span>App.js</span>
            </div>
            <div
              className={`temp-navitem temp-navsearch ${uiTitle === "NavBarSearch" ?? true}`}
              onClick={() => setUI("NavBarSearch")}>
              <span>Search</span><i className="icons10-search"></i>
            </div>
            <div
              className={`temp-navitem temp-navlink ${uiTitle === "NavBarThemeSwitch" ?? true}`}
              onClick={() => setUI("NavBarThemeSwitch")}>
              <i className="icons10-sun"></i><span>Day Mode</span>
            </div>
            <div
              className={`temp-navitem temp-navlink ${uiTitle === "NavBarSubMenu" ?? true}`}
              onClick={() => setUI("NavBarSubMenu")}>
              <span>SubMenu</span><i className="icons10-angle-down"></i>
            </div>
            <span
              className={`temp-title ${uiTitle === "NavBarTitle" ?? true}`}
              onClick={() => setUI("NavBarTitle")}>Title</span>
            <div
              className={`temp-navitem temp-navlink temp-navitem-active ${uiTitle === "NavBarLink" ?? true}`}
              onClick={() => setUI("NavBarLink")}>
              <i className="icons10-puzzle"></i><span>Page 1</span>
            </div>
            <div
              className={`temp-navitem temp-navlink ${uiTitle === "NavBarLinkImg" ?? true}`}
              onClick={() => setUI("NavBarLinkImg")}>
              <img src={Img1} alt="img" className="temp-navimg" /><span>Page 2</span>
            </div>
          </div>
          <div
            className={`template-page-container ${uiTitle === "PageContainer" ?? true}`}
            onClick={() => setUI("PageContainer")}>
            <span>Page Container</span>
          </div>
        </div>
        <div className="temp-divider"></div>
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            className="code code-container getting-started">
            {uiTemplate}
          </SyntaxHighlighter>
        </div>
      </div>
      <div>
        {uiProps}
      </div>
      <br/><br/>
    </NavPageContainer>
  )
}

export default GettingStarted;