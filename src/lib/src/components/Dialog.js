import React from 'react'
var createAlphaAccentColor = require('./utils/ThemeManager').createAlphaAccentColor

const Dialog = (props) => {
  
  createAlphaAccentColor()

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
