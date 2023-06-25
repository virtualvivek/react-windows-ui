import React from "react";

const ContainerInner = (props) => {
  return (
    <div className="app-page-container-inner">
      {props.children}
    </div>
  )
}

export default ContainerInner;