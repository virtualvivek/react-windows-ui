import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, NavBarLink, NavSearchBox, SystemThemeFollower,
         RegisterFluentEffect,TransitionToLeft } from '../lib/src'

import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import Inputs from './pages/Inputs'
import Texts from './pages/Texts'
import ProgressControls from './pages/ProgressControls'
import Tables from './pages/Tables'
import Icons from './pages/Icons'
import Themes from './pages/Themes'

import AccordionDocs from './docs/Accordion_docs'
import AlertDocs from './docs/Alert_docs'
import AvatarViewDocs from './docs/AvatarView_docs'
import ButtonsDocs from './docs/Buttons_docs'
import CardDocs from './docs/Card_docs'
import DialogDocs from './docs/Dialog_docs'
import GaugeDocs from './docs/Gauge_docs'
import ImageViewDocs from './docs/ImageView_docs'
import LinkDocs from './docs/Link_docs'
import LinkCompoundDocs from './docs/LinkCompound_docs'
import ListItemDocs from './docs/ListItem_docs'
import LoadersDocs from './docs/LoadersDocs'
import MenuBarDocs from './docs/MenuBar_docs'
import ProgressBarDocs from './docs/ProgressBar_docs'

import _404Layout from './layouts/404Layout'
import AboutLayout from './layouts/AboutLayout'
import BlogLayout from './layouts/BlogLayout'
import CommanBarLayout from './layouts/CommandBarLayout'
import ContactsLayout from './layouts/ContactsLayout'
import LoginLayout from './layouts/LoginLayout'

import AppJsDefault from './templates/appjs-default'
import AppJsSearchable from './templates/appjs-searchable'
import PageJsDefault from './templates/pagejs-default'
import PageJsSplit from './templates/pagejs-split'

import NavBarItem from './NavBarItems.json'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: NavBarItem,
      filteredData: NavBarItem
    }
  }

  handleInputSearch = event => {
    const query = event.target.value
    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.text.toLowerCase().includes(query.toLowerCase())
      })
      return {
        query,
        filteredData
      }
    })
  }


  render() {
  return (
    <>
    <Router basename="react-windows-ui">

      <TransitionToLeft />

      <SystemThemeFollower/>

      {/* Register the fluent effect before using NavBarLinkFluent */}
      <RegisterFluentEffect/>

      <NavBar 
        title="React Windows UI"
        titleShort={<i className="icons10-windows"></i>}
      //titleShort="R" render text or icons
      //mobileHasIcons={true}
        shadowOnScroll={true}>

        {/* <NavBarLinkFluent
          to="/"
          exact={true}
          text="Home"
          icon={<i className="icons10-home"></i>}
        /> */}

      <NavSearchBox
        placeholder="Search the docs v2.0.9"
        onChange={this.handleInputSearch}/>
      <NavBarLink
        exact={true}
        to="/"
        text="Home"
        icon={<i className="icons10-home"></i>}
      />
      <NavBarLink
        to="/getting_started"
        text="Getting Started"
        icon={<i className="icons10-terminal"></i>}
      />

      <h1>Preview</h1>
      <div className="app-hr"></div>

      

      <NavBarLink
        to="/inputs"
        text="Inputs"
        icon={<i className="icons10-keyboard"></i>}
      />

      <h1>Docs</h1>
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

        <Route path='/inputs' component={Inputs} />

        <Route path='/accordion' component={AccordionDocs} />
        <Route path='/alerts' component={AlertDocs} />
        <Route path='/avatarview' component={AvatarViewDocs} />
        <Route path='/buttons' component={ButtonsDocs} />
        <Route path='/cards' component={CardDocs} />
        <Route path='/dialogs' component={DialogDocs} />
        <Route path='/gauges' component={GaugeDocs} />
        <Route path='/imageview' component={ImageViewDocs} />
        <Route path='/links' component={LinkDocs} />
        <Route path='/linkcompound' component={LinkCompoundDocs} />
        <Route path='/listitem' component={ListItemDocs} />
        <Route path='/loaders' component={LoadersDocs} />
        <Route path='/menubar' component={MenuBarDocs} />
        <Route path='/progressbar' component={ProgressBarDocs} />

        <Route path='/texts' component={Texts} />
        <Route path='/progress' component={ProgressControls} />
        <Route path='/tables' component={Tables} />
        <Route path='/icons' component={Icons} />
        <Route path='/themes' component={Themes} />
        
        <Route path='/AboutLayout' component={AboutLayout} />
        <Route path='/BlogLayout' component={BlogLayout} />
        <Route path='/CommandBarLayout' component={CommanBarLayout} />
        <Route path='/contactslayout' component={ContactsLayout} />
        <Route path='/404layout' component={_404Layout} />
        <Route path='/LoginLayout' component={LoginLayout} />

        <Route path='/AppJsDefault' component={AppJsDefault} />
        <Route path='/AppJsSearchable' component={AppJsSearchable} />
        <Route path='/PageJsDefault' component={PageJsDefault} />
        <Route path='/PageJsSplit' component={PageJsSplit} />
      </Switch>
    </Router>
  </>
    )
  }
}

export default App