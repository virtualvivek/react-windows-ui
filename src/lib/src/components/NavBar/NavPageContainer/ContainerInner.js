import React from "react";

const ContainerInner = (props) => {
  return (
    <div className="app-section-cntr-inner">
      {props.children}
    </div>
  )
}

export default ContainerInner;