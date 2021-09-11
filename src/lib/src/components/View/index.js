import React from 'react'

const View = (props) => {

  return (
    <div
      onClick = { props.onClick }
      className = {
        props.isVisible ?
        "app-view-default show" : "app-view-default"
        }
        style={{
            zIndex: props.zIndex,
            ...props.style}}>
        {props.children}
    </div>
  )
}

View.defaultProps = {
  isVisible: true,
  zIndex: 1
}

export default View