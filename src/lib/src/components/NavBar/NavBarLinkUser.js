import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarLinkUser = (props) => {
  return (
    <li>
      <NavLink
        className="app-nav-user"
        to={props.to}
        exact={props.exact}>
          <img
            src={props.img}
            alt={props.imgAlt} />
          <span>{props.text}</span>
      </NavLink>
    </li>
  )
}

NavBarLinkUser.defaultProps = {
  text: "link text",
  exact: false,
  to : "#",
  imgAlt: "image"
}

export default NavBarLinkUser