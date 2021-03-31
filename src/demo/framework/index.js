import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {  NavBar, NavBarLink,
          SystemThemeFollower, RegisterFluentEffect } from '../../lib'
import Home from './pages/Home'
import Layouts from './pages/Layouts'
import Inputs from './pages/Inputs'
import Texts from './pages/Texts'
import Buttons from './pages/Buttons'
import Links from './pages/Links'
import ProgressControls from './pages/ProgressControls'
import Themes from './pages/Themes'
import Gauges from './pages/Gauges'
import Lists from './pages/Lists'
import Icons from './pages/Icons'
import Images from './pages/Images'
import Dialogs from './pages/Dialogs'

import _404Layout from './layouts/404Layout'

import AboutLayout from './layouts/AboutLayout'
import CardLayout from './layouts/CardLayout'
import CommanBarLayout from './layouts/CommandBarLayout'
import ContactsLayout from './layouts/ContactsLayout'
import LoginLayout from './layouts/LoginLayout'

import ListLayout from './layouts/ListLayout'

const Framework = () => {
  return (
    <>
     <Router basename="react-windows-ui">

     <SystemThemeFollower/>

     {/* Register the fluent effect before using NavBarLinkFluent */}
     <RegisterFluentEffect/>

        <NavBar 
          title="React Windows UI"
          titleShort={<i className="icons10-windows"></i>}
       // titleShort="R" render text or icons
       // mobileHasIcons={true}
          shadowOnScroll={true}
          >

          {/* <NavBarLinkFluent
            to="/"
            exact={true}
            text="Home"
            icon={<i className="icons10-home"></i>}
          /> */}

          <NavBarLink
            to="/"
            exact={true}
            text="Home"
            icon={<i className="icons10-home"></i>}
          />

          <NavBarLink
            to="/layouts"
            text="Layouts"
            icon={<i className="icons10-parallel-tasks"></i>}
          />

          <NavBarLink
            to="/inputs"
            text="Inputs"
            icon={<i className="icons10-keyboard"></i>}
          />

          <NavBarLink
            to="/texts"
            text="Texts"
            icon={<i className="icons10-align-left"></i>}
          />
         
          <NavBarLink
            to="/buttons"
            text="Buttons"
            showBadge={7}
            icon={<i className="icons10-controller"></i>}
          />

          <NavBarLink
            to="/images"
            text="Images"
            icon={<i className="icons10-picture"></i>}
          />
                    
          <NavBarLink
            to="/dialogs"
            text="Dialogs"
            icon={<i className="icons10-notification-image"></i>}
          />

          <NavBarLink
            to="/links"
            text="Links"
            icon={<i className="icons10-link"></i>}
          />
                    
          <NavBarLink
            to="/progress"
            text="Progress Controls"
            icon={<i className="icons10-bar-chart"></i>}
          />

          <NavBarLink
            to="/themes"
            text="Themes"
            icon={<i className="icons10-color-palette"></i>}
          />

          <NavBarLink
            to="/gauges"
            text="Gauges"
            icon={<i className="icons10-gauge"></i>}
          />
                    
          <NavBarLink
            to="/icons"
            text="Icons"
            icon={<i className="icons10-deathly-hallows"></i>}
          />
                
                   
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
          <Route path='/layouts' component={Layouts} />
          <Route path='/inputs' component={Inputs} />
          <Route path='/texts' component={Texts} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/images' component={Images} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/links' component={Links} />
          <Route path='/progress' component={ProgressControls} />
          <Route path='/themes' component={Themes} />
          <Route path='/gauges' component={Gauges} />
          <Route path='/lists' component={Lists} />
          <Route path='/icons' component={Icons} />
          
          <Route path='/AboutLayout' component={AboutLayout} />
          <Route path='/CommandBarLayout' component={CommanBarLayout} />
          <Route path='/contactslayout' component={ContactsLayout} />
          <Route path='/cardlayout' component={CardLayout} />
          <Route path='/404layout' component={_404Layout} />
          <Route path='/LoginLayout' component={LoginLayout} />
          <Route path='/ListLayout' component={ListLayout} />
        </Switch>
      </Router> 
    </>
  )
}

export default Framework
