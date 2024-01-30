import React from "react";

const MenuListItem = (props) => {

  const {
    title,
    icon,
    onClick,
  } = props;

  return (
    <li className="app-menu-list-item" key={title}>
      <span onClick={onClick}>
        {icon}{title}
      </span>
    </li>
  );
};

export default MenuListItem;