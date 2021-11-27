import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLink = (props) => {

  const renderBadge = () => {
    return <div className="app-badge">{props.showBadge}</div>;
  }

  const renderImg = () => {
    return props.img ?
      <img
        src={props.img}
        alt={props.imgAlt}
        style={{borderRadius:props.imgBorderRadius}} />
        : ""
  }

  return (
    <li className="app-nav-list-item">
      <NavLink to={props.to} exact={props.exact}>
        {props.icon}
        {renderImg()}
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

export default NavBarLink;