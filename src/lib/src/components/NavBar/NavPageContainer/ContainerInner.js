import React from "react";

const ContainerInner = (props) => {
  return (
    <div className="app-section-container-inner">
      {props.children}
    </div>
  )
}

export default ContainerInner;