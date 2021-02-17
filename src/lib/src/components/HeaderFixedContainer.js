import React from 'react'

const HeaderFixedContainer = (props) => {

  return (
    <div
      className="app-header-fixed-container"
      style={{
        width:'100%',
        zIndex: props.zIndex,
      }}>
        {props.children}
    </div>
  )
}

HeaderFixedContainer.defaultProps = {
  zIndex: 2,
}

export default HeaderFixedContainer
