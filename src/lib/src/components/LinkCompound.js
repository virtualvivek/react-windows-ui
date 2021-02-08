import React from 'react'
import { Link } from 'react-router-dom'


const LinkCoumpound = (props) => {
  return (
    <Link to={props.to} 
      className={props.iconStyle === 'accent' ? 
      "app-link-compound accent" : "app-link-compound" } 
      onMouseOver={props.onMouseOver}>
          {props.icon}
          <span>{props.title}</span>
          <p>{props.subtitle}</p>
    </Link>
  )
}

LinkCoumpound.defaultProps = {
  dataOff: "Off",
  dataOn: "On",
  to: "#"
}

export default LinkCoumpound
