import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {

  const renderEndComp = () => {
    if(props.ItemEndComponent) {
      return <button>Hi</button>
    }
  }

  return (
    <li className="app-list-item">
      <Link
        to={props.to}
        style={
          props.borderBottom ? { borderBottom: "" } : { borderBottom: "0" }
            }>
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
          {/* <div>
            { props.ItemEndComponent && (<>{props.ItemEndComponent}</>) }
          </div> */}
      </Link>
      { props.ItemEndComponent && (<>{props.ItemEndComponent}</>) }
    </li>
  )
}

ListItem.defaultProps = {
  to : "#",
  imgAlt: "image",
  borderBottom: true
}

export default ListItem;