import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppTheme, SplashScreen, NavBar, NavBarLink,
        NavBarSubMenu, NavBarSearchSuggestion, NavBarThemeSwitch, Dialog } from './_lib'

import Home from './_pages/Home'
import GettingStarted from './_pages/GettingStarted'
import Texts from './_pages/Texts'
import Tables from './_pages/Tables'
import Icons from './_pages/Icons'

import NavBarDocs from './Navigation_docs/NavBar_docs'
import NavBarLinkDocs from './Navigation_docs/NavBarLink_docs'
import NavBarSubMenuDocs from './Navigation_docs/NavBarSubMenu_docs'
import NavPageContainerDocs from './Navigation_docs/NavPageContainer_docs'
import SplashScreenDocs from './Navigation_docs/SplashScreen_docs'

import AccordionDocs from './Accordion_docs'
import AlertDocs from './Alert_docs'
import AppThemeDocs from './AppTheme_docs'
import AppearanceDocs from './Appearance_docs'
import AvatarViewDocs from './AvatarView_docs'
import ButtonsDocs from './Buttons_docs'
import CardDocs from './Card_docs'
import CheckboxDocs from './Checkbox_docs'
import ColorsDocs from './Colors_docs'
import ColorPickerDocs from './ColorPicker_docs'
import CommandBarDocs from './CommandBar_docs'
import DialogDocs from './Dialog_docs'
import GaugeDocs from './Gauge_docs'
import ImageViewDocs from './ImageView_docs'
import InputGroupDocs from './InputGroup_docs'
import InputSearchDocs from './InputSearch_docs'
import LinkDocs from './Link_docs'
import LinkCompoundDocs from './LinkCompound_docs'
import ListItemDocs from './ListItem_docs'
import LoadersDocs from './LoadersDocs'
import MenuBarDocs from './MenuBar_docs'
import ProgressBarDocs from './ProgressBar_docs'
import RadioButtonDocs from './RadioButton_docs'
import SelectBoxDocs from './SelectBox_docs'
import SliderBarDocs from './SliderBar_docs'
import SwitchDocs from './Switch_docs'
import TableViewDocs from './TableView_docs'
import ViewDocs from './View_docs'

import AppJsDefault from './_templates/appjs-default'
import AppJsSearchable from './_templates/appjs-searchable'
import PageJsDefault from './_templates/pagejs-default'
import PageJsSplit from './_templates/pagejs-split'

import NavBarItem from './index_nav_items.json'
import Img2 from '../assets/illustration/mountain.jpg'
import GithubIcon from "../assets/static/GithubIcon"

import '../../lib/config/app-config.css'
import '../../lib/dist/react-windows-ui.min.css'

import { lib_version } from './values'

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
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  render() {
  return (
    <>
      <SplashScreen
        //duration={1200}
        isVisible={this.state.showSplash}
        title={"react-windows-ui"}
        // logo={<img src={Img2} width={100} height={100} alt="SplashScreen"/>}
      />

      <AppTheme
        scheme="system"
      />

      <Dialog style={{flexDirection: "column", display:"flex", padding: 5}}
        isVisible={this.state.showDialog}
        onBackdropPress={this.toggleDialog}>
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
      </Dialog>

      <NavBar
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
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/virtualvivek/react-windows-ui/">
                <GithubIcon width={25} height={25}/>
              </a>
            </span>
          </div>}>

        <NavBarSearchSuggestion
          placeholder={`Search Docs v${lib_version}`}
          tooltip="Search Docs"
          data={[
            {label: 'home', link: '#', icon: <i className="icons10-home"></i>},
            {label: 'alert', link: '/alerts'},
            {label: 'accordion', link: '/accordion'},
            {label: 'apperarance', link: '/appearance'},
            {label: 'avatarview', link: '/avatarview'},
            {label: 'buttons', link: '/buttons'},
            {label: 'checkbox', link: '/checkbox'},
            {label: 'commandbar', link: '/commandbar'},
            {label: 'dialogs', link: '/dialogs'},
            {label: 'gauges', link: '/gauges'},
            {label: 'icons', link: '/icons'},
            {label: 'imageview', link: '/imageview'},
            {label: 'inputtext', link: '/input_group'},
            {label: 'inputsearch', link: '/inputsearch'},
            {label: 'menubar', link: '/menubar'},
            {label: 'select', link: '/selectbox'}
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

      <NavBarLink
        to="colors"
        text="Colors"
        icon={<i className="icons10-color-palette"></i>}
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

        <Route path='colors' element={<ColorsDocs/>} />

        <Route path='navbar' element={<NavBarDocs/>} />
        <Route path='navbarlink' element={<NavBarLinkDocs/>} />
        <Route path='navbarsubmenu' element={<NavBarSubMenuDocs/>} />
        <Route path='navpagecontainer' element={<NavPageContainerDocs/>} />
        <Route path='splashscreen' element={<SplashScreenDocs/>} />

        <Route path='accordion' element={<AccordionDocs/>} />
        <Route path='alerts' element={<AlertDocs/>} />
        <Route path='apptheme' element={<AppThemeDocs/>} />
        <Route path='appearance' element={<AppearanceDocs/>} />
        <Route path='avatarview' element={<AvatarViewDocs/>} />
        <Route path='buttons' element={<ButtonsDocs/>} />
        <Route path='cards' element={<CardDocs/>} />
        <Route path='checkbox' element={<CheckboxDocs/>} />
        <Route path='colorpicker' element={<ColorPickerDocs/>} />
        <Route path='commandbar' element={<CommandBarDocs/>} />
        <Route path='dialogs' element={<DialogDocs/>} />
        <Route path='gauges' element={<GaugeDocs/>} />
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
        <Route path='view_' element={<ViewDocs/>} />

        <Route path='texts' element={<Texts/>} />
        <Route path='tables' element={<Tables/>} />
        <Route path='icons' element={<Icons/>} />

        <Route path='AppJsDefault' element={<AppJsDefault/>} />
        <Route path='AppJsSearchable' element={<AppJsSearchable/>} />
        <Route path='PageJsDefault' element={<PageJsDefault/>} />
        <Route path='PageJsSplit' element={<PageJsSplit/>} />

        <Route path='/boilerplate_external' element={() => {
          window.location.href = 'https://github.com/virtualvivek/react-windows-ui-boilerplate';
          return null;
        }} />
        <Route path='/apptheme_external' element={() => {
          window.location.href = 'https://github.com/virtualvivek/react-windows-ui/blob/main/src/demo/docs/AppTheme_docs/index.js';
          return null;
        }} />
        
      </Routes>
  </>
    )
  }
}

export default AppFourTwoOne