import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {NavBar,NavBarLink} from '../../../lib'
import Home from './pages/Home'
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

const Framework = () => {
  return (
    <>
     <Router basename="framework">
        <NavBar 
          title="React Windows UI"
          mobileHasIcons={true}>

          <NavBarLink 
            to="/home" 
            exact={true} 
            text="Form Elements"
            icon={<i className="icons10-grid-3"></i>}
          /> 

          <NavBarLink 
            to="/texts" 
            text="Texts"
            icon={<i className="icons10-keyboard"></i>}
          />           
         
          <NavBarLink 
            to="/buttons" 
            text="Buttons"
            showBadge={5}
            icon={<i className="icons10-controller"></i>}
          />

          <NavBarLink 
            to="/links" 
            text="Links"
            icon={<i className="icons10-clip"></i>}
          />
                    
          <NavBarLink 
            to="/progress" 
            text="Progress Controls"
            icon={<i className="icons10-bar-chart"></i>}
          />

          <NavBarLink 
            to="/themes" 
            text="Themes"
            icon={<i className="icons10-personalize"></i>}
          />

          <NavBarLink 
            to="/gauges" 
            text="Gauges"
            icon={<i className="icons10-chevron-up-round"></i>}
          />
                    
          <NavBarLink 
            to="/icons" 
            text="Icons"
            icon={<i className="icons10-deathly-hallows"></i>}
          />
                    
          <NavBarLink 
            to="/images" 
            text="Images"
            icon={<i className="icons10-collection"></i>}
          />
                    
          <NavBarLink 
            to="/dialogs" 
            text="Dialogs"
            icon={<i className="icons10-notification-image"></i>}
          />
                   
          <h1>Layouts</h1>
          <div className="app-hr"></div>

          <NavBarLink 
            to="/lists" 
            text="Lists"
            icon={<i className="icons10-list"></i>}
          />

          <NavBarLink 
            to="/404layout" 
            text="404Layout"
            icon={<i className="icons10-terminal"></i>}
          />
            
        </NavBar>

        <Switch>
          <Route path="/home" component={Home}  exact />
          <Route path='/texts' component={Texts} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/links' component={Links} />
          <Route path='/progress' component={ProgressControls} />
          <Route path='/themes' component={Themes} />
          <Route path='/gauges' component={Gauges} />
          <Route path='/lists' component={Lists} />
          <Route path='/icons' component={Icons} />
          <Route path='/images' component={Images} />
          <Route path='/dialogs' component={Dialogs} />

          <Route path='/404layout' component={_404Layout} />
        </Switch>
      </Router> 
    </>
  )
}

export default Framework
