import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = (props) => {
  return (
    <li className="app-list-item">
      <Link
        to={props.to}
        style={
          props.borderBottom ? { borderBottom: "" } : { borderBottom: "0" }
            }>
          <img
            src={ props.img }
            alt={ props.imgAlt }
            style={ props.img ?
                  { display: "", borderRadius: props.imgBorderRadius } :
                  { display : "none" }
                  }>
          </img>
          <div>
            <span className="app-list-title">{props.title}</span>
            <p className="app-list-subtitle">{props.subtitle}</p>
          </div>
          <p className="app-list-info">{props.info}</p>
      </Link>
    </li>
  )
}

ListItem.defaultProps = {
  to : "#",
  imgAlt: "image",
  borderBottom: true
}

export default ListItem