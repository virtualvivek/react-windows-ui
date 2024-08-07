import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLink = (props) => {

  const renderBadge = () => {
    return <div className="app-badge">{props.showBadge}</div>;
  }

  const renderImg = () => {
    return props.imgSrc ?
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        style={{borderRadius:props.imgBorderRadius}} />
        : ""
  }

  return (
    <li className="app-navbar-list-item">
      <NavLink to={props.to} exact={`${props.exact}`}>
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