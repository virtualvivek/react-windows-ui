import React from 'react'

const Dialog = (props) => {

  return (
    <>
    <div 
      onClick={props.onBackdropPress}
      className={props.isVisible ? 
      "app-dim-overlay show" : "app-dim-overlay"}>       
    </div>
    <div 
      className={props.isVisible ? 
      "app-dialog show" : "app-dialog"}> 
       {props.children}
    </div>
    </>
  )
}

Dialog.defaultProps = {
  isVisible: false
}

export default Dialog
