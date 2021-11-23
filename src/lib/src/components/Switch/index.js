import React from 'react'

const Switch = (props) => {

  const showData = () => {
    return props.labelOn === "" ? <div dataoff="" dataon=""></div>
          : <div dataoff={props.labelOff} dataon={props.labelOn}></div>;
  }

  return (
    <label
      className="app-switch"
      title={props.tooltip}
      style={props.labelOn === ""
      ? { marginRight: 0 }
      : { marginRight: "" }}>
      <input
        type="checkbox"
        defaultChecked={props.defaultChecked}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      { showData() }
    </label>
  )
}

Switch.defaultProps = {
  labelOff: "Off",
  labelOn: "On"
}

export default Switch