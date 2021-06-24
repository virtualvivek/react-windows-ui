import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwitchDayNight from '../../SwitchDayNight'

const NavBar = (props) => {
  
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const [isScrolling, setScrolling] = useState(false)
  
  const scrollEvent = (e) => { 
    // console.log(e.target.scrollTop)
    if(e.target.scrollTop < 50) {
      setScrolling(false)
    }
    else {
      setScrolling(true)
    }
  }

  return (
    <div
      className={sidebar ? 'app-nav-wrap toggled' : 'app-nav-wrap'}
      ref={props.ref}
      id="app-nav-wrap-id"> 
        <nav
          className="animate"
          onScroll={scrollEvent}>
          <div>
            {props.goBack ?
            <Link to={props.goBack} className="app-back"></Link>
            :
            ''}
            <span className="app-name">{props.title}</span>
            <span className="app-name-short">{props.titleShort}</span>
          </div>
          <div
            style={props.shadowOnScroll ?
                isScrolling ?
                { boxShadow:'0 6px 8px -8px var(--color_link_bg_hover)'}
                : {boxShadow : ''}
                : {boxShadow:''}
              }>
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