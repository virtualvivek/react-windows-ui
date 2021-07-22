import React from 'react'

const NavPageContainerRight = (props) => {

  const setPositionFixed = () => {
    return props.position === 'fixed' ? ' fixed' : '';
  }

  return (
    <div
      className={"app-section-container-right"+setPositionFixed()}>
      {props.children}
    </div>
  )
}

export default NavPageContainerRight