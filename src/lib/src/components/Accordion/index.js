import React, { useState } from 'react'

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className="app-accordion-item"
      style={{
          width: props.width
      }}>
      <div
        className={props.focused ? "app-accordion-title focused"
                                  : "app-accordion-title"}
        onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div>{isActive ? props.expandIcon : props.collapseIcon}</div>
      </div>
      <div className={isActive ? "app-accordion-content show"
                               : "app-accordion-content"}>
        {props.children}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  width: 287,
  collapseIcon: <i className="icons10-angle-down"></i>,
  expandIcon: <i className="icons10-angle-up"></i>,
  focused: true
}

export default Accordion