import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwitchDayNight from '../SwitchDayNight'

const NavBar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div 
      id="app-nav-wrap" 
      className={sidebar ? 'toggled' : ''}
      ref={props.ref}>           
        <nav className="animate">       
          <div>
            {props.goBack ? 
            <Link to={props.goBack} className="app-back"></Link> 
            : 
            ''}
            <span className="app-name">{props.title}</span>
            <span className="app-name-short">{props.titleShort}</span>
          </div>
          <div>
            <Link to="#" className="app-nav-toggle" onClick={showSidebar}></Link>
            <SwitchDayNight/>
          </div>
          <ul
            className={props.mobileHasIcons ?  "app-mobile-has-icons" : ""  }>
           {props.children}
          </ul>
        </nav>
      </div>	 
  );
}

export default NavBar
