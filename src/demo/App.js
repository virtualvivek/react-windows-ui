import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, NavBarLink, NavSearchBox, SystemThemeFollower,
         RegisterFluentEffect,TransitionToLeft } from '../lib/src'

import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import Inputs from './pages/Inputs'
import Texts from './pages/Texts'
import Links from './pages/Links'
import ProgressControls from './pages/ProgressControls'
import Tables from './pages/Tables'
import Gauges from './pages/Gauges'
import Lists from './pages/Lists'
import Icons from './pages/Icons'
import Themes from './pages/Themes'
import Images from './pages/Images'
import Dialogs from './pages/Dialogs'

import AccordionDocs from './docs/Accordion_docs'
import AlertDocs from './docs/Alert_docs'
import AvatarViewDocs from './docs/AvatarView_docs'
import ButtonsDocs from './docs/Buttons_docs'

import _404Layout from './layouts/404Layout'
import AboutLayout from './layouts/AboutLayout'
import BlogLayout from './layouts/BlogLayout'
import CardLayout from './layouts/CardLayout'
import CommanBarLayout from './layouts/CommandBarLayout'
import ContactsLayout from './layouts/ContactsLayout'
import LoginLayout from './layouts/LoginLayout'
import ListLayout from './layouts/ListLayout'

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
          to="/lists"
          text="Lists"
          icon={<i className="icons10-list"></i>}
        />

        <NavBarLink
          to="/cardlayout"
          text="Cards"
          icon={<i className="icons10-film"></i>}
        />

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

        <Route path='/texts' component={Texts} />
        {/* <Route path='/buttons' component={Buttons} /> */}
        <Route path='/images' component={Images} />
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/links' component={Links} />
        <Route path='/progress' component={ProgressControls} />
        <Route path='/tables' component={Tables} />
        <Route path='/gauges' component={Gauges} />
        <Route path='/lists' component={Lists} />
        <Route path='/icons' component={Icons} />
        <Route path='/themes' component={Themes} />
        
        <Route path='/AboutLayout' component={AboutLayout} />
        <Route path='/BlogLayout' component={BlogLayout} />
        <Route path='/CommandBarLayout' component={CommanBarLayout} />
        <Route path='/contactslayout' component={ContactsLayout} />
        <Route path='/cardlayout' component={CardLayout} />
        <Route path='/404layout' component={_404Layout} />
        <Route path='/LoginLayout' component={LoginLayout} />
        <Route path='/ListLayout' component={ListLayout} />

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