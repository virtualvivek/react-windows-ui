import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {

  const [itemEndActive, setItemEndActive] = useState(false);

  const onItemEndHover = () => {
    if (props.ItemEndComponent && props.ItemEndComponent.type !== "p") {
      setItemEndActive(true);
    }
  }

  const onItemEndUnHover = () => { setItemEndActive(false); }

  return (
    <li className={itemEndActive ? "app-list-item pointer-none" : "app-list-item"}>
      <Link
        to={props.to}
        style={props.borderBottom ? { borderBottom: "" } : { borderBottom: "0" }}>
          <img
            src={ props.imgSrc }
            alt={ props.imgAlt }
            style={ props.imgSrc
                  ? { display: "", borderRadius: props.imgBorderRadius }
                  : { display : "none" }
                  }
          />
          <div className="app-list-item-container">
            <span className="app-list-title">{props.title}</span>
            <p className="app-list-subtitle">{props.subtitle}</p>
          </div>
      </Link>
      <div
        style={{flex: 0.2}}
        onMouseEnter={onItemEndHover}
        onMouseLeave={onItemEndUnHover}>
        { props.ItemEndComponent && (<>{props.ItemEndComponent}</>) }
      </div>
    </li>
  )
}

ListItem.defaultProps = {
  to : "#",
  imgAlt: "image",
  borderBottom: true
}

export default ListItem;