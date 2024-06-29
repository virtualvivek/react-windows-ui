import React from "react";

const MenuItem = (props) => {
  return (
    <li key={props.label} className="cmdbar-menu-list-item">
      <span
        onClick={props.onClick} 
        {...(props.children && { "data-win-toggle": "dropdown" })}>
        {props.icon}{props.label}
      </span>
      {props.children}
    </li>
  )
}

MenuItem.defaultProps = {
  onClick: () => {}
}

export default MenuItem;