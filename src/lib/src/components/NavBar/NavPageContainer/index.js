import React from 'react'

const NavPageContainer = (props) => {

  const setTransition = () => {
    return props.animateTransition ? " transition" : "";
  }

  return (
    <div
      className={ props.hasPadding
                ? "app-section-container has-padding"+setTransition()
                : "app-section-container"+setTransition()
                }
      id="app-section-container-id">
      {props.children}
    </div>
  )
}

export default NavPageContainer