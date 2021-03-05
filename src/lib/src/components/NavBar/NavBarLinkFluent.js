import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLinkFluent = (props) => {

  const renderBadge = () => {
    return <div className="app-badge">{props.showBadge}</div>
  }

  return (
    <div data-fluent-component="true" className="app-inline">
      <div className="app-inline">
        <li className="app-fluent-navlink app-fluent-effect">
        <NavLink to={props.to} exact={props.exact}>
            {props.icon}
            
            <span>{props.text}</span>
            {props.showBadge ? renderBadge() : ""}
        </NavLink>
        </li>
      </div>
    </div>
  )
}

NavBarLinkFluent.defaultProps = {
  text: "link text",
  exact: false,
  to : "#"
}

export default NavBarLinkFluent