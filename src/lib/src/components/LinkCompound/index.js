import React from 'react'
import { Link } from 'react-router-dom'

const LinkCompound = (props) => {

  const setFocused = () =>{
    return props.focused ? ' focused' : '';
  }
  const setImg = () =>{
    return props.img ? <img src={props.img} alt={props.imgAlt}/> : '';
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
      title={props.tooltip}
      target={props.target}>
          {props.icon}
          {setImg()}
          <span>{props.title}</span>
          <p>{props.subtitle}</p>
    </Link>
  )
}

LinkCompound.defaultProps = {
  to: "#",
  imgAlt: 'image'
}

export default LinkCompound