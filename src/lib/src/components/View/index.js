import React from "react";

const View = (props) => {

  const setHideState = () => {
    return props.collapseOnInvisible ? 'destroy' : '';
  }

  return (
    <div
      onClick = { props.onClick }
      className = {
        props.isVisible ?
          `app-view-default`
        : `app-view-default hide ${setHideState()}`
        }
        style={{
            zIndex: props.zIndex,
            ...props.style
          }}>
        {props.children}
    </div>
  )
}

View.defaultProps = {
  zIndex: 1,
  isVisible: true,
  collapseOnInvisible: true
}

export default View;