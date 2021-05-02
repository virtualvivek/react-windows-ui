import React from 'react'
import { Link } from 'react-router-dom'

const LinkCompound = (props) => {

  const setFocused = () =>{
    return props.focused ? ' focused' : '';
  }
  return (
    <Link
      to={props.to}
      className={
          props.linkStyle === 'border' ? "app-link-compound primary"+setFocused()
        : "app-link-compound"+setFocused()
        }
      style={{
        margin: props.margin,
        display: props.display
      }}  
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