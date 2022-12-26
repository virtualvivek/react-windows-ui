import React from "react";
import { Link } from "react-router-dom";

const SubMenuItem = (props) => {
  return (
    <li
      key={props.label}
      className="cmdbar-menu-list-item">
        <Link
          onClick={props.onClick}
          to={props.link ? props.link : "#"}>
          {props.icon}{props.label}
        </Link>
    </li>
  )
}

SubMenuItem.defaultProps = {
  value: "Submit",
  disabled: false
}

export default SubMenuItem;