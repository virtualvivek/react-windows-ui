import React from 'react'

const StickyHeader = (props) => {
  return (
    <div
      className="app-sticky-header"
      style={{
        top: props.stickOffset,
        fontSize: props.fontSize,
        color: props.color,
        zIndex: props.zIndex,
        lineHeight: 1,
        fontWeight: 500
      }}>
      <span>{props.title}</span>
    </div>
  )
}

StickyHeader.defaultProps = {
  stickOffset: 0,
  title: "",
  fontSize: 20,
  zIndex: 1
}

export default StickyHeader