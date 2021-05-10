import React from 'react'

const Dialog = (props) => {

  const isDropShadow = () => {
    return props.showDropShadow ? 'dropShadow' : '';
  }

  return (
    <>
    <div
      onClick = { props.onBackdropPress }
      className = {props.isVisible ?
        "app-dim-overlay show" : "app-dim-overlay"
        }>
    </div>
    <div
      className = { props.isVisible ?
        "app-dialog "+ isDropShadow() + " show" :
        "app-dialog "+ isDropShadow()
        }
      style = {{
                padding: props.padding
              }}
    >
        {props.children}
    </div>
    </>
  )
}

Dialog.defaultProps = {
  isVisible: false
}

export default Dialog