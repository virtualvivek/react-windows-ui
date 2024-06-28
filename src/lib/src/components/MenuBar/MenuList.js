import React from "react";

const MenuList = (props) => {

  const {
    children,
  } = props;

  return (
    <ul className="ui-menu-list">
      {children}
    </ul>
  );
};

export default MenuList;