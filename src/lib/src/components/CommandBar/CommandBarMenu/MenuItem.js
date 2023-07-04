import React from "react";

const MenuItem = (props) => {
  return (
    <li
      key={props.label}
      className="cmdbar-menu-list-item">
        <span onClick={props.onClick}>
        {props.icon}{props.label}
        </span>
    </li>
  )
}

MenuItem.defaultProps = {
  onClick: () => {}
}

export default MenuItem;