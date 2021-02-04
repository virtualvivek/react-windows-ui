import React from 'react'

const Dialog = (props) => {

  const dialogOverlayRef = React.useRef()
  const dialogRef = React.useRef()

  // const toggleDialog = () =>{
  //   let dialogOverlay = dialogOverlayRef.current;
  //   let dialog = dialogRef.current;
  //   if (dialogOverlay.className === "app-dim-overlay light show") {
  //     dialogOverlay.className = "app-dim-overlay"
  //     dialog.className = "app-dialog"
  //   }
  // }

  return (
    <>
    <div 
      ref={dialogOverlayRef} 
      onClick={props.onBackdropPress}
      className={props.isVisible ? 
      "app-dim-overlay show" : "app-dim-overlay"}>       
    </div>
    <div 
      ref={dialogRef}
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
