import React from 'react'
import { Link } from 'react-router-dom'

const LinkCompound = (props) => {

  const setFocused = () => {
    return props.focused ? "focused" : "";
  }
  const setImg = () =>{
    return props.img ? <img src={props.img} alt={props.imgAlt}/> : <></>;
  }
  return (
    <Link
      className={
        props.type === "border"
        ? `app-link-compound primary ${setFocused()}`
        : `app-link-compound ${setFocused()}`
      }
      to={props.to}
      style={props.style}
      target={props.target}
      title={props.tooltip}
      onClick={props.onClick}>
        <div className="app-link-compound-container">
          {props.icon}
          {setImg()}
          <div className="app-link-compound-subcontainer">
            <span>{props.title}</span>
            <p>{props.subtitle}</p>
          </div>
        </div>
    </Link>
  )
}

LinkCompound.defaultProps = {
  to: "#",
  imgAlt: "image",
  onClick: () => {},
}

export default LinkCompound;