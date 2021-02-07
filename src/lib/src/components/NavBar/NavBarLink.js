import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLink = (props) => {

  const renderBadge = () => {
    return <div className="app-badge">5</div>
  }

  return (
    <li>
      <NavLink to={props.to} exact={props.exact}>
        {props.icon}
        {props.showBadge ? renderBadge() : ""}
        <span>{props.text}</span>
        
      </NavLink>
    </li>
  )
}

NavBarLink.defaultProps = {
  text: "link text",
  exact: false,
  to : "#"
}

export default NavBarLink
