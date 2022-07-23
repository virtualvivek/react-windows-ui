import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AppTheme, SplashScreen, NavBar, NavBarLink,
        NavBarSubMenu, NavSearchSuggestion, NavThemeSwitcher } from '../lib/src'

import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import ColorsDocs from './docs/Colors_docs'
import Texts from './pages/Texts'
import Tables from './pages/Tables'
import Icons from './pages/Icons'

import NavBarDocs from './docs/Navigation_docs/NavBar_docs'
import NavBarLinkDocs from './docs/Navigation_docs/NavBarLink_docs'
import NavBarSubMenuDocs from './docs/Navigation_docs/NavBarSubMenu_docs'
import NavPageContainerDocs from './docs/Navigation_docs/NavPageContainer_docs'
import SplashScreenDocs from './docs/Navigation_docs/SplashScreen_docs'

import AccordionDocs from './docs/Accordion_docs'
import AlertDocs from './docs/Alert_docs'
import AppThemeDocs from './docs/AppTheme_docs'
import AppearanceDocs from './docs/Appearance_docs'
import AvatarViewDocs from './docs/AvatarView_docs'
import ButtonsDocs from './docs/Buttons_docs'
import CardDocs from './docs/Card_docs'
import CheckboxDocs from './docs/Checkbox_docs'
import ColorPickerDocs from './docs/ColorPicker_docs'
import CommandBarDocs from './docs/CommandBar_docs'
import DialogDocs from './docs/Dialog_docs'
import GaugeDocs from './docs/Gauge_docs'
import ImageViewDocs from './docs/ImageView_docs'
import InputGroupDocs from './docs/InputGroup_docs'
import InputSearchDocs from './docs/InputSearch_docs'
import LinkDocs from './docs/Link_docs'
import LinkCompoundDocs from './docs/LinkCompound_docs'
import ListItemDocs from './docs/ListItem_docs'
import LoadersDocs from './docs/LoadersDocs'
import MenuBarDocs from './docs/MenuBar_docs'
import ProgressBarDocs from './docs/ProgressBar_docs'
import RadioButtonDocs from './docs/RadioButton_docs'
import SelectBoxDocs from './docs/SelectBox_docs'
import SliderBarDocs from './docs/SliderBar_docs'
import SwitchDocs from './docs/Switch_docs'
import TableViewDocs from './docs/TableView_docs'
import ViewDocs from './docs/View_docs'

import AboutLayout from './layouts/AboutLayout'
import BlogLayout from './layouts/BlogLayout'
import ContactsLayout from './layouts/ContactsLayout'
import LoginLayout from './layouts/LoginLayout'

import AppJsDefault from './templates/appjs-default'
import AppJsSearchable from './templates/appjs-searchable'
import PageJsDefault from './templates/pagejs-default'
import PageJsSplit from './templates/pagejs-split'

import NavBarItem from './NavBarItems.json'

import Img2 from './assets/illustration/mountain.jpg'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showSplash: true,
      data: NavBarItem,
      currentTitle: "Home",
      filteredData: NavBarItem
    }
  }

  componentDidMount() {
    this.setState({ showSplash: false});

    window.onpopstate = ()=> {
      const hash = window.location.href;
      if(hash.indexOf('getting_started')>-1) this.setState({currentTitle: "Getting Started"});
      if(hash.indexOf('colors')>-1) this.setState({currentTitle: "Colors"});
      if(hash.indexOf('accordion')>-1) this.setState({currentTitle: "Accordion"});
      if(hash.indexOf('alerts')>-1) this.setState({currentTitle: "Alerts"});
      if(hash.indexOf('apptheme')>-1) this.setState({currentTitle: "AppTheme"});
      if(hash.indexOf('appearance')>-1) this.setState({currentTitle: "Appearance"});
      if(hash.indexOf('avatarview')>-1) this.setState({currentTitle: "Avatarview"});
      if(hash.indexOf('buttons')>-1) this.setState({currentTitle: "Buttons"});
      if(hash.indexOf('apptheme')>-1) this.setState({currentTitle: "AppTheme"});
      
    }
  }

  render() {
  return (
    <>
    <Router basename={'/'}> {/* basename={process.env.PUBLIC_URL} */}

      <SplashScreen
        //duration={1200}
        isVisible={this.state.showSplash}
        title={"react-windows-ui"}
        // logo={<img src={Img2} width={100} height={100} alt="SplashScreen"/>}
      />

      <AppTheme
        scheme="system"
      />

      <NavBar
        title="React Windows UI"
        shadowOnScroll={true}
        titleBarMobile={
          <div style={{display: "flex", justifyContent: "space-between", width: "calc(100% - 60px)"}}>
            <span className="app-navbar-name">React-windows-ui</span>
            <span className="app-navbar-name">{this.state.currentTitle}</span>
          </div>}>

        <NavSearchSuggestion
          placeholder="Search Docs v4.0.x"
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

        <NavThemeSwitcher/>

      <NavBarLink
        exact
        to="/"
        text="Home"
        imgSrc={Img2}
      />
      <NavBarLink
        to="/getting_started"
        text="Getting Started"
        icon={<i className="icons10-terminal"></i>}
      />

      <NavBarLink
        to="/colors"
        text="Colors"
        icon={<i className="icons10-color-palette"></i>}
      />


      <NavBarSubMenu title="Navigation">
        <NavBarLink
          to="/navbar"
          text="NavBar"
          icon={<i className="icons10-map"></i>}
        />
        <NavBarLink
          to="/navbarlink"
          text="NavBarLink"
          icon={<i className="icons10-link"></i>}
        />
        <NavBarLink
          to="/navbarsubmenu"
          text="NavBarSubMenu"
          icon={<i className="icons10-angle-down"></i>}
        />
        <NavBarLink
          to="/navpagecontainer"
          text="NavPageContainer"
          icon={<i className="icons10-columns"></i>}
        />
        <NavBarLink
          to="/splashscreen"
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


      {/* If you don't want to add NavSearchBar simply add <NavBarLink /> like below  */}

      {/* <NavBarLink
        to="/getting_started"
        text="Getting Started"
        icon={<i className="icons10-terminal"></i>}
      /> */}
          
      </NavBar>

      <Routes>
        <Route path="/" element={<Home/>}  exact />
        <Route path='/getting_started' element={<GettingStarted/>} />

        <Route path='/colors' element={<ColorsDocs/>} />

        <Route path='/navbar' element={<NavBarDocs/>} />
        <Route path='/navbarlink' element={<NavBarLinkDocs/>} />
        <Route path='/navbarsubmenu' element={<NavBarSubMenuDocs/>} />
        <Route path='/navpagecontainer' element={<NavPageContainerDocs/>} />
        <Route path='/splashscreen' element={<SplashScreenDocs/>} />

        <Route path='/accordion' element={<AccordionDocs/>} />
        <Route path='/alerts' element={<AlertDocs/>} />
        <Route path='/apptheme' element={<AppThemeDocs/>} />
        <Route path='/appearance' element={<AppearanceDocs/>} />
        <Route path='/avatarview' element={<AvatarViewDocs/>} />
        <Route path='/buttons' element={<ButtonsDocs/>} />
        <Route path='/cards' element={<CardDocs/>} />
        <Route path='/checkbox' element={<CheckboxDocs/>} />
        <Route path='/colorpicker' element={<ColorPickerDocs/>} />
        <Route path='/commandbar' element={<CommandBarDocs/>} />
        <Route path='/dialogs' element={<DialogDocs/>} />
        <Route path='/gauges' element={<GaugeDocs/>} />
        <Route path='/imageview' element={<ImageViewDocs/>} />
        <Route path='/input_group' element={<InputGroupDocs/>} />
        <Route path='/inputsearch' element={<InputSearchDocs/>} />
        <Route path='/links' element={<LinkDocs/>} />
        <Route path='/linkcompound' element={<LinkCompoundDocs/>} />
        <Route path='/listitem' element={<ListItemDocs/>} />
        <Route path='/loaders' element={<LoadersDocs/>} />
        <Route path='/menubar' element={<MenuBarDocs/>} />
        <Route path='/progressbar' element={<ProgressBarDocs/>} />
        <Route path='/radio_button' element={<RadioButtonDocs/>} />
        <Route path='/selectbox' element={<SelectBoxDocs/>} />
        <Route path='/sliderbar' element={<SliderBarDocs/>} />
        <Route path='/switch' element={<SwitchDocs/>} />
        <Route path='/tableview' element={<TableViewDocs/>} />
        <Route path='/view_' element={<ViewDocs/>} />

        <Route path='/texts' element={<Texts/>} />
        <Route path='/tables' element={<Tables/>} />
        <Route path='/icons' element={<Icons/>} />
        
        <Route path='/AboutLayout' element={<AboutLayout/>} />
        <Route path='/BlogLayout' element={<BlogLayout/>} />
        <Route path='/contactslayout' element={<ContactsLayout/>} />
        <Route path='/LoginLayout' element={<LoginLayout/>} />

        <Route path='/AppJsDefault' element={<AppJsDefault/>} />
        <Route path='/AppJsSearchable' element={<AppJsSearchable/>} />
        <Route path='/PageJsDefault' element={<PageJsDefault/>} />
        <Route path='/PageJsSplit' element={<PageJsSplit/>} />

        <Route path='/boilerplate_external' element={() => { 
          window.location.href = 'https://github.com/virtualvivek/react-windows-ui-boilerplate';
          return null;
        }} />
        <Route path='/apptheme_external' element={() => { 
          window.location.href = 'https://github.com/virtualvivek/react-windows-ui/blob/main/src/demo/docs/AppTheme_docs/index.js';
          return null;
        }} />
        <Route path='/fluent_icons_external' element={() => { 
          window.location.href = 'https://github.com/microsoft/fluentui-system-icons';
          return null;
        }} />
        
      </Routes>
    </Router>
  </>
    )
  }
}

export default App