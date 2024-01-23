import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AppContainer, SplashScreen, NavBar, NavBarLink,
        NavBarSubMenu, NavBarThemeSwitch, Dialog, InputSearchBox } from "./_lib";
import {
  Home,
  GettingStarted,

  AppThemeDocs,
  AppearanceDocs,
  ClassesDocs,
  ColorsDocs,

  NavBarDocs,
  NavBarLinkDocs,
  NavBarSubMenuDocs,
  NavPageContainerDocs,
  SplashScreenDocs,

  AccordionDocs,
  AlertDocs,
  AvatarViewDocs,
  ButtonsDocs,
  CheckboxDocs,
  ColorPickerDocs,
  CommandBarDocs,
  DialogDocs,
  Icons,
  ImageViewDocs,
  InputGroupDocs,
  LinkDocs,
  LoadersDocs,
  MenuBarDocs,
  ProgressBarDocs,
  RadioButtonDocs,
  SelectBoxDocs,
  SliderBarDocs,
  SwitchDocs,
  TableViewDocs
} from "./pages";

import { lib_version } from "./values";
import NavBarItem from "./navbar_items.json";
import Img2 from "../assets/illustration/mountain.jpg";
import GithubIcon from "../assets/static/GithubIcon";

import "./_lib/config/app-config.css";
import "./_lib/react-windows-ui.min.css";
import "./_lib/icons/winui-icons.min.css";

const AppFourTwoTwo = () => {

  const navigate = useNavigate();
  const [route, setRoute] = useState("home");
  const [showSplash, setSplash] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => setSplash(false), []);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  }

  const onBranchChange = () => {
    toggleDialog();
    setTimeout(() => { window.location.reload(); }, 500);
  }

  const _navigate = (route) => {
    navigate(route);
    setRoute(route);
  }

  return (
    <AppContainer>
      <SplashScreen
        isVisible={showSplash}
        title={"react-windows-ui"}
      />

      <Dialog
        isVisible={showDialog}
        onBackdropPress={toggleDialog}>
          <Dialog.Body>
            <div style={{flexDirection: "column", display: "flex"}}>
            <Link
              to="#"
              onClick={toggleDialog}
              className="docs-btn-branch-dialog-txt">
                <b>‣  version 4.2.2</b>
            </Link>
            <Link
              to="/v4.2.1/home"
              onClick={onBranchChange}
              className="docs-btn-branch-dialog-txt">
                ‣  version 4.2.1
            </Link>
            <Link
              to="/v4.2.0/home"
              onClick={onBranchChange}
              className="docs-btn-branch-dialog-txt">
              ‣  version 4.2.0
            </Link>
            </div>
          </Dialog.Body>
      </Dialog>

      <NavBar
        // collapsed
        title={<>React Win UI
          <Link to="#" className="docs-btn-branch-selector" onClick={toggleDialog}>
            <span>v{lib_version}&nbsp;<i className="icons10-angle-down"></i></span>
          </Link>
        </>}
        shadowOnScroll={true}
        titleBarMobile={
          <div style={{display: "flex", justifyContent: "space-between", width: "calc(100% - 60px)", alignItems: "center"}}>
            <span className="app-navbar-name">React-windows-ui</span>
            <span className="app-navbar-name">
              <a className="app-link" target="_blank" rel="noopener noreferrer" href="https://github.com/virtualvivek/react-windows-ui/">
                <GithubIcon width={25} height={25}/>
              </a>
            </span>
          </div>}>

        <InputSearchBox
          placeholder={`Search Docs v${lib_version}`}
          suggest={[
            {text: "home", onClick: () => alert("Hi"), icon: <i className="icons10-home"></i>},
            {text: "alert", link: 'alerts'},
            {text: "accordion", link: 'accordion'},
            {text: "apperarance", link: 'appearance'},
            {text: "avatarview", link: 'avatarview'},
            {text: "buttons", link: 'buttons'},
            {text: "checkbox", link: 'checkbox'},
            {text: "commandbar", link: 'commandbar'},
            {text: "dialogs", link: 'dialogs'},
            {text: "icons", link: 'icons'},
            {text: "imageview", link: 'imageview'},
            {text: "inputtext", link: 'input_group'},
            {text: "menubar", link: 'menubar'},
            {text: "select", link: 'selectbox'}
          ]}
        />

        <NavBarThemeSwitch />

        <NavBarLink
          text="Home"
          imgSrc={Img2}
          active={route === "home" ?? true}
          onClick={() => _navigate("home")}
        />
        <NavBarLink
          text="Getting Started"
          active={route === "getting_started" ?? true}
          onClick={() => _navigate("getting_started")}
          icon={<i className="icons10-navigation"></i>}
        />

        <NavBarSubMenu title="Utilities">
          <NavBarLink
            text="AppTheme"
            active={route === "apptheme" ?? true}
            onClick={() => _navigate("apptheme")}
            icon={<i className="icons10-fantasy"></i>}
          />
          <NavBarLink
            text="Appearance"
            active={route === "appearance" ?? true}
            onClick={() => _navigate("appearance")}
            icon={<i className="icons10-sun"></i>}
          />
          <NavBarLink
            text="Classes"
            active={route === "utilities" ?? true}
            onClick={() => _navigate("utilities")}
            icon={<i className="icons10-puzzle"></i>}
          />
          <NavBarLink
            text="Colors"
            active={route === "colors" ?? true}
            onClick={() => _navigate("colors")}
            icon={<i className="icons10-color-palette"></i>}
          />
        </NavBarSubMenu>        

        <h1>Components</h1>
        <div className="app-hr"></div>

        {NavBarItem.map((item, key) => {
          return <NavBarLink
                    key={key}
                    text={item.text}
                    exact={item.exact}
                    showBadge={item.showBadge}
                    active={route === item.to ?? true}
                    onClick={() => _navigate(item.to)}
                    icon={<i className={item.icon}></i>}
                  />
                })
        }
            
        </NavBar>

        <Routes>
          <Route path="home" element={<Home/>}  exact />
          <Route path='getting_started' element={<GettingStarted/>} />

          {/* Utilities */}

          <Route path='colors' element={<ColorsDocs/>} />
          <Route path='utilities' element={<ClassesDocs/>} />

          <Route path='navbar' element={<NavBarDocs/>} />
          <Route path='navbarlink' element={<NavBarLinkDocs/>} />
          <Route path='navbarsubmenu' element={<NavBarSubMenuDocs/>} />
          <Route path='navpagecontainer' element={<NavPageContainerDocs/>} />
          <Route path='splashscreen' element={<SplashScreenDocs/>} />

          {/* Components */}

          <Route path='accordion' element={<AccordionDocs/>} />
          <Route path='alerts' element={<AlertDocs/>} />
          <Route path='apptheme' element={<AppThemeDocs/>} />
          <Route path='appearance' element={<AppearanceDocs/>} />
          <Route path='avatarview' element={<AvatarViewDocs/>} />
          <Route path='buttons' element={<ButtonsDocs/>} />
          <Route path='checkbox' element={<CheckboxDocs/>} />
          <Route path='colorpicker' element={<ColorPickerDocs/>} />
          <Route path='commandbar' element={<CommandBarDocs/>} />
          <Route path='dialogs' element={<DialogDocs/>} />
          <Route path='imageview' element={<ImageViewDocs/>} />
          <Route path='input_group' element={<InputGroupDocs/>} />
          <Route path='links' element={<LinkDocs/>} />
          <Route path='loaders' element={<LoadersDocs/>} />
          <Route path='menubar' element={<MenuBarDocs/>} />
          <Route path='progressbar' element={<ProgressBarDocs/>} />
          <Route path='radio_button' element={<RadioButtonDocs/>} />
          <Route path='selectbox' element={<SelectBoxDocs/>} />
          <Route path='sliderbar' element={<SliderBarDocs/>} />
          <Route path='switch' element={<SwitchDocs/>} />
          <Route path='tableview' element={<TableViewDocs/>} />

          <Route path='icons' element={<Icons/>} />
        </Routes>
    </AppContainer>
  )
}

export default AppFourTwoTwo;