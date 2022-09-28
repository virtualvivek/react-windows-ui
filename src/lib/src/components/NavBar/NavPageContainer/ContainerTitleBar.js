import React from "react";

const ContainerTitleBar = (props) => {
  return (
    <div className="app-section-container-titlebar">
      {props.children}
    </div>
  )
}

export default ContainerTitleBar;