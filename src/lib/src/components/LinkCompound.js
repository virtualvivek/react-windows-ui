import React from 'react'
import { Link } from 'react-router-dom'


const LinkCoumpound = (props) => {
  return (
    <Link to={props.to} 
      className={props.iconStyle === 'accent' ? 
      "app-link-compound accent" : "app-link-compound" } 
      onMouseOver={props.onMouseOver}>
      {props.children}
          <span>App Volume and device preference</span>
          <p>Customise app volumes or devices they use</p>
    </Link>
  )
}

LinkCoumpound.defaultProps = {
  dataOff: "Off",
  dataOn: "On",
  to: "#"
}

export default LinkCoumpound
