import React from "react";

// eslint-disable-next-line
const isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;

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
    badgeBackgroundColor,
    allowJavaScriptUrls = true
  } = props;

  if (isJavaScriptProtocol.test(href) && !allowJavaScriptUrls) {
    console.warn(`NavBarLink has blocked a javascript: URL as a security precaution`);
    return null;
  }

  const renderBadge = () => {
    if(showBadge > 0 || showBadge !== "") {
      return <div
              className="ui-badge"
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
    <li className="ui-navbar-list-item">
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