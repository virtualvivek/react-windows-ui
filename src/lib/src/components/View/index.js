import React from 'react'

const View = (props) => {

  const setAnimFade = () => {
    return props.animationType === 'fade' ? 'fade' : '';
  }

  return (
    <div
      onClick = { props.onClick }
      className = {
        props.isVisible ?
          `app-view-default ${setAnimFade()}`
        : `app-view-default hide ${setAnimFade()}`
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
  isVisible: true,
  zIndex: 1
}

export default View