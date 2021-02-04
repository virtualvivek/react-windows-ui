import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLink = (props) => {
  return (
    <li>
      <NavLink to={props.to} exact={props.exact}>
        {props.icon}
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
