import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { AppTheme, SplashScreen, NavBar, NavBarLink,
        NavBarSubMenu, NavSearchSuggestion } from '../lib/src'

import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import ColorsDocs from './docs/Colors_docs'
import Texts from './pages/Texts'
import Tables from './pages/Tables'
import Icons from './pages/Icons'

import NavBarDocs from './docs/Navigation_docs/NavBar_docs'
import NavBarSubMenuDocs from './docs/Navigation_docs/NavBarSubMenu_docs'
import NavPageContainerDocs from './docs/Navigation_docs/NavPageContainer_docs'

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

import _404Layout from './layouts/404Layout'
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
      filteredData: NavBarItem
    }
  }

  componentDidMount(){
    this.setState({ showSplash: false})
  }

  render() {
  return (
    <>
    <Router basename={'/'}> {/* basename={process.env.PUBLIC_URL} */}

      <SplashScreen
        //duration={1200}
        isVisible={this.state.showSplash}
        title={"react-windows-ui"}
      />

      <AppTheme
        scheme="system"
      />

      <NavBar
        title="React Windows UI"
       //mobileHasIcons={true}
        shadowOnScroll={true}>

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

      <NavBarLink
        exact={true}
        to="/"
        text="Home"
        img={Img2}
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
          to="/navbarsubmenu"
          text="NavBarSubMenu"
          icon={<i className="icons10-angle-down"></i>}
        />
        <NavBarLink
          to="/navpagecontainer"
          text="NavPageContainer"
          icon={<i className="icons10-columns"></i>}
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

        <h1>Layouts</h1>
        <div className="app-hr"></div>

        <NavBarLink
          to="/404layout"
          text="404Layout"
          icon={<i className="icons10-terminal"></i>}
        />
          
      </NavBar>

      <Switch>
        <Route path="/" component={Home}  exact />
        <Route path='/getting_started' component={GettingStarted} />

        <Route path='/colors' component={ColorsDocs} />

        <Route path='/navbar' component={NavBarDocs} />
        <Route path='/navbarsubmenu' component={NavBarSubMenuDocs} />
        <Route path='/navpagecontainer' component={NavPageContainerDocs} />

        <Route path='/accordion' component={AccordionDocs} />
        <Route path='/alerts' component={AlertDocs} />
        <Route path='/apptheme' component={AppThemeDocs} />
        <Route path='/appearance' component={AppearanceDocs} />
        <Route path='/avatarview' component={AvatarViewDocs} />
        <Route path='/buttons' component={ButtonsDocs} />
        <Route path='/cards' component={CardDocs} />
        <Route path='/checkbox' component={CheckboxDocs} />
        <Route path='/colorpicker' component={ColorPickerDocs} />
        <Route path='/commandbar' component={CommandBarDocs} />
        <Route path='/dialogs' component={DialogDocs} />
        <Route path='/gauges' component={GaugeDocs} />
        <Route path='/imageview' component={ImageViewDocs} />
        <Route path='/input_group' component={InputGroupDocs} />
        <Route path='/inputsearch' component={InputSearchDocs} />
        <Route path='/links' component={LinkDocs} />
        <Route path='/linkcompound' component={LinkCompoundDocs} />
        <Route path='/listitem' component={ListItemDocs} />
        <Route path='/loaders' component={LoadersDocs} />
        <Route path='/menubar' component={MenuBarDocs} />
        <Route path='/progressbar' component={ProgressBarDocs} />
        <Route path='/radio_button' component={RadioButtonDocs} />
        <Route path='/selectbox' component={SelectBoxDocs} />
        <Route path='/sliderbar' component={SliderBarDocs} />
        <Route path='/switch' component={SwitchDocs} />
        <Route path='/tableview' component={TableViewDocs} />
        <Route path='/view_' component={ViewDocs} />

        <Route path='/texts' component={Texts} />
        <Route path='/tables' component={Tables} />
        <Route path='/icons' component={Icons} />
        
        <Route path='/AboutLayout' component={AboutLayout} />
        <Route path='/BlogLayout' component={BlogLayout} />
        <Route path='/contactslayout' component={ContactsLayout} />
        <Route path='/404layout' component={_404Layout} />
        <Route path='/LoginLayout' component={LoginLayout} />

        <Route path='/AppJsDefault' component={AppJsDefault} />
        <Route path='/AppJsSearchable' component={AppJsSearchable} />
        <Route path='/PageJsDefault' component={PageJsDefault} />
        <Route path='/PageJsSplit' component={PageJsSplit} />

        <Route path='/boilerplate_external' component={() => { 
          window.location.href = 'https://github.com/virtualvivek/react-windows-ui-boilerplate';
          return null;
        }} />
        <Route path='/apptheme_external' component={() => { 
          window.location.href = 'https://github.com/virtualvivek/react-windows-ui/blob/main/src/demo/docs/AppTheme_docs/index.js';
          return null;
        }} />
        <Route path='/fluent_icons_external' component={() => { 
          window.location.href = 'https://github.com/microsoft/fluentui-system-icons';
          return null;
        }} />
        
      </Switch>
    </Router>
  </>
    )
  }
}

export default App