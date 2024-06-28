import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

const Link = (props) => {
  return (
    <LinkRouter
      to={props.to}
      className="ui-link"
      style={props.style}
      {...props}>
      {props.children}
    </LinkRouter>
  )
}

Link.defaultProps = {
  to: "#"
}

export default Link