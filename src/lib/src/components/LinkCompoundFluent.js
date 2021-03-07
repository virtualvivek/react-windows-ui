import React from 'react'
import { Link } from 'react-router-dom'

const LinkCompoundFluent = (props) => {
  return (
    <div
      data-fluent-component="true"
      style={{
        display: props.display
      }}>
      <div className="app-fluent-btn-container">
        <div className="app-fluent-link app-fluent-effect">
        <Link
        to={props.to}
        className={props.linkStyle === 'border' ?
        "app-link-compound accent" : "app-link-compound" }
        onMouseOver={props.onMouseOver}>
            {props.icon}
            <span>{props.title}</span>
            <p>{props.subtitle}</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

LinkCompoundFluent.defaultProps = {
  to: "#",
  display: 'inline-block'
}

export default LinkCompoundFluent