import React from 'react'
import { Link } from 'react-router-dom'

const LinkCompound = (props) => {
  return (
    <Link
      to={props.to}
      className={props.linkStyle === 'border' ?
      "app-link-compound primary" : "app-link-compound" }
      onMouseOver={props.onMouseOver}>
          {props.icon}
          <span>{props.title}</span>
          <p>{props.subtitle}</p>
    </Link>
  )
}

LinkCompound.defaultProps = {
  to: "#"
}

export default LinkCompound