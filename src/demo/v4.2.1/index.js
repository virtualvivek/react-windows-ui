import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppTheme, SplashScreen, NavBar, NavBarLink,
        NavBarSubMenu, NavBarSearchSuggestion, NavBarThemeSwitch, Dialog } from './_lib'

import { Home, GettingStarted } from './pages'
import { AppearanceDocs, AppThemeDocs, ClassesDocs, FGCntrDocs, ColorsDocs, Icons } from './utilities'

import { NavBarDocs, NavBarLinkDocs, NavBarSubMenuDocs, NavPageContainerDocs, SplashScreenDocs,
        AccordionDocs, AlertDocs, AvatarViewDocs, ButtonsDocs,
        CheckboxDocs, ColorPickerDocs, CommandBarDocs, DialogDocs, ImageViewDocs,
        InputGroupDocs, InputSearchDocs, LinkDocs, LinkCompoundDocs, ListItemDocs, LoadersDocs,
        MenuBarDocs, ProgressBarDocs, RadioButtonDocs, SelectBoxDocs, SliderBarDocs, SwitchDocs,
        TableViewDocs } from './components'

import { lib_version } from './values'
import NavBarItem from './index_itms.json'
import Img2 from '../assets/illustration/mountain.jpg'
import GithubIcon from "../assets/static/GithubIcon"

import './_lib/config/app-config.css'
import './_lib/icons/fonts/fonts.min.css'
import './_lib/react-windows-ui-11.min.css'

class AppFourTwoOne extends React.Component {

  constructor() {
    super();
    this.state = {
      showSplash: true,
      data: NavBarItem,
      filteredData: NavBarItem
    }
  }

  componentDidMount() {
    this.setState({ showSplash: false});
  }

  toggleDialog = () => {
    if(this.state.showDialog)
            this.setState({showDialog: false});
    else    this.setState({showDialog: true});
  }

  onBranchChange = () => {
    this.toggleDialog();
    setTimeout(() => { window.location.reload(); }, 500);
  }

  render() {
  return (
    <>
      <SplashScreen
        // duration={1200}
        isVisible={this.state.showSplash}
        title={"react-windows-ui"}
        // logo={<img src={Img2} width={100} height={100} alt="SplashScreen"/>}
      />

      <AppTheme
        scheme="system"
      />

      <Dialog
        isVisible={this.state.showDialog}
        onBackdropPress={this.toggleDialog}>
          <Dialog.Body>
            <div style={{flexDirection: "column", display:"flex"}}>
            <Link
              to="/v4.2.2/home"
              onClick={this.onBranchChange}
              className="docs-btn-branch-dialog-txt">
              ‣  version 4.2.2
            </Link>
            <Link
              to="#"
              onClick={this.toggleDialog}
              className="docs-btn-branch-dialog-txt">
                ‣  version 4.2.1
            </Link>
            <Link
              to="/v4.2.0/home"
              onClick={this.onBranchChange}
              className="docs-btn-branch-dialog-txt">
              ‣  version 4.2.0
            </Link>
            </div>
          </Dialog.Body>
      </Dialog>

      <NavBar
        // collapsed
        title={<>React Win UI &nbsp;
          <Link to="#" className="docs-btn-branch-selector" onClick={this.toggleDialog}>
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

        <NavBarSearchSuggestion
          placeholder={`Search Docs v${lib_version}`}
          tooltip="Search Docs"
          data={[
            {label: 'home', link: '#', icon: <i className="icons10-home"></i>},
            {label: 'alert', link: 'alerts'},
            {label: 'accordion', link: 'accordion'},
            {label: 'apperarance', link: 'appearance'},
            {label: 'avatarview', link: 'avatarview'},
            {label: 'buttons', link: 'buttons'},
            {label: 'checkbox', link: 'checkbox'},
            {label: 'commandbar', link: 'commandbar'},
            {label: 'dialogs', link: 'dialogs'},
            {label: 'icons', link: 'icons'},
            {label: 'imageview', link: 'imageview'},
            {label: 'inputtext', link: 'input_group'},
            {label: 'inputsearch', link: 'inputsearch'},
            {label: 'menubar', link: 'menubar'},
            {label: 'select', link: 'selectbox'}
          ]}
        />

        <NavBarThemeSwitch/>

        <NavBarLink
          exact
          to="home"
          text="Home"
          imgSrc={Img2}
        />
        <NavBarLink
          to="getting_started"
          text="Getting Started"
          icon={<i className="icons10-terminal"></i>}
        />

        <NavBarSubMenu title="Navigation">
          <NavBarLink
            to="navbar"
            text="NavBar"
            icon={<i className="icons10-map"></i>}
          />
          <NavBarLink
            to="navbarlink"
            text="NavBarLink"
            icon={<i className="icons10-link"></i>}
          />
          <NavBarLink
            to="navbarsubmenu"
            text="NavBarSubMenu"
            icon={<i className="icons10-angle-down"></i>}
          />
          <NavBarLink
            to="navpagecontainer"
            text="NavPageContainer"
            icon={<i className="icons10-columns"></i>}
          />
          <NavBarLink
            to="splashscreen"
            text="SplashScreen"
            icon={<i className="icons10-window"></i>}
          />
        </NavBarSubMenu>

        <h1>Utilities</h1>
        <div className="app-hr"></div>      
        
        <NavBarLink
          to="apptheme"
          text="AppTheme"
          icon={<i className="icons10-fantasy"></i>}
        />
        <NavBarLink
          to="appearance"
          text="Appearance"
          icon={<i className="icons10-sun"></i>}
        />
        <NavBarLink
          to="utilities"
          text="Classes"
          icon={<i className="icons10-puzzle"></i>}
        />
        <NavBarLink
          to="colors"
          text="Colors"
          icon={<i className="icons10-color-palette"></i>}
        />


        <h1>Components</h1>
        <div className="app-hr"></div>

        {this.state.filteredData.map((item, key) => {
          return <NavBarLink
                    key={key}
                    to={item.to}
                    exact={item.exact}
                    text={item.text}
                    icon={<i className={item.icon}></i>}
                    showBadge={item.showBadge}
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
          <Route path='fg_cntr_demo' element={<FGCntrDocs/>} />

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
          <Route path='inputsearch' element={<InputSearchDocs/>} />
          <Route path='links' element={<LinkDocs/>} />
          <Route path='linkcompound' element={<LinkCompoundDocs/>} />
          <Route path='listitem' element={<ListItemDocs/>} />
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
      </>
    )
  }
}

export default AppFourTwoOne