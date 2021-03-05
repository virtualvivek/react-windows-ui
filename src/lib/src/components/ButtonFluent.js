import React from 'react'

const ButtonFluent = (props) => {
  return (
    <div
      data-fluent-component="true"
      style={{
        display: props.display
      }}>
        <div className="app-fluent-btn-container">
            <button
              className="app-fluent-btn app-fluent-effect app-button"
              onSubmit={props.onSubmit}
              onClick={props.onClick}>
                <span style={{
                    padding: '5px 15px'
                  }}>
                  {props.value}
                </span>
            </button>
        </div>
    </div>
  )
}

ButtonFluent.defaultProps = {
  value: "Submit",
  display: 'inline-block'
}

export default ButtonFluent