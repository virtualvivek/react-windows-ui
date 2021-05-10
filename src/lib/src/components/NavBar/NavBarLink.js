import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLink = (props) => {

  const renderBadge = () => {
    return <div className="app-badge">{props.showBadge}</div>
  }

  return (
    <li>
      <NavLink to={props.to} exact={props.exact}>
        {props.icon}
        <span>{props.text}</span>
        {props.showBadge ? renderBadge() : ""}
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