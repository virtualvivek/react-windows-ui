import React from "react";

const NavBarLink = (props) => {

  const {
    icon,
    text,
    href,
    active,
    imgSrc,
    imgAlt,
    onClick,
    showBadge,
    imgBorderRadius,
    badgeBackgroundColor
  } = props;

  const renderBadge = () => {
    if(showBadge > 0 || showBadge !== "") {
      return <div className="app-badge"
              style={{backgroundColor: badgeBackgroundColor}}>
                {showBadge}
            </div>;
    }
    return <></>;
  }

  const renderImg = () => {
    return imgSrc ?
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{borderRadius: imgBorderRadius}}
      />
      : ""
  }

  return (
    <li className="app-navbar-list-item">
      <a
        {...(active && { "aria-current": "page", className: "active", "aria-selected": "true" })}
        onClick={onClick}
        href={href}>
        {icon}
        {renderImg()}
        <span>{text}</span>
        {showBadge ? renderBadge() : ""}
      </a>
    </li>
  )
}

NavBarLink.defaultProps = {
  text: "Nav Link",
  onClick: () => {},
}

export default NavBarLink;