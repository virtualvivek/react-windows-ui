import React from "react";

const CommandBarButton = (props) => {
  return (
    <button
      className="app-cmdbar-button"
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.icon}
      <span>{props.value}</span>
    </button>
  )
}

CommandBarButton.defaultProps = {
  value: "Title"
}

export default CommandBarButton;