import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

const SubMenu = (props) => {

  const {
    title,
    icon,
    onClick,
    children
  } = props;

  const view = useCallback(() => (
    <ul className="app-menu-list" aria-hidden={"false"}>
      {children}
    </ul>
  ), [children]);
  

  useEffect(() => {
    const viewElement = document.createElement("div");
    ReactDOM.render(view(), viewElement);
    // Append the element to the parent
    document.body.appendChild(viewElement); // Step 3
    // Cleanup
    return () => {
      ReactDOM.unmountComponentAtNode(viewElement);
      document.body.removeChild(viewElement);
    };
  }, [view]);

  

  return (
    <li className="app-menu-list-item" key={title}>
      <span onClick={onClick} data-win-toggle="dropdown">
        {icon}{title}
      </span>
    </li>
  );
};

export default SubMenu;