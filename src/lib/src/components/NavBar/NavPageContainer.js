import React from 'react'

const NavPageContainer = (props) => {

  return (
    <div className={props.hasPadding ?
      "app-section-container has-padding" : "app-section-container"}>
      {props.children}
    </div>
  )
}

export default NavPageContainer