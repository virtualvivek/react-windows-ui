import React from 'react'

const Card = (props) => {
  return (
    <div
        className={
            props.hoverable ?
            "app-card-default hoverable" :
            props.focused ?
            "app-card-default focused" :
            "app-card-default"}
        style={{
            display: props.display,
            padding: props.padding,
            margin: props.margin,
            maxWidth: props.maxWidth
            }}>
        {props.children}
    </div>
  )
}

Card.defaultProps = {
  hoverable: false
}

export default Card