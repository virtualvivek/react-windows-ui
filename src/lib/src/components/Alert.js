import React, {useEffect} from 'react'
var createAlphaPrimaryColor = require('./utils/ThemeManager').createAlphaPrimaryColor

const Alert = (props) => {

  useEffect(()=>{
    createAlphaPrimaryColor()
  })

  return (
    <>
    <div
      className={props.isVisible ? "app-dim-overlay show" : "app-dim-overlay"}
      style={props.isVisible ? { visibility:'visible'} : {visibility : 'hidden'}}
      onClick={props.onBackdropPress}>
    </div>
    <div
      className={props.isVisible ?
        "app-alert show" : "app-alert"}>
        <h1>{props.title}</h1>
        <div className="alert-message">{props.message}</div>
        <div className="btn-container">
            {props.children}
        </div>
    </div>
    </>
  )
}

Alert.defaultProps = {
  isVisible: false
}

export default Alert