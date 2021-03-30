import React from 'react'

const Switch = (props) => {
const showData = () => {
  if(props.textOn === ""){
    return <div dataoff="" dataon=""></div>
  }
  else
    return <div dataoff={props.textOff} dataon={props.textOn}></div>
  }

  return (
    <label
      className="app-switch"
      style={
        props.textOn === "" ? { marginRight: 0 } : { marginRight: '' }
      }>
      <input
        type="checkbox"
        defaultChecked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      { showData() }
    </label>
  )
}

Switch.defaultProps = {
  textOff: "Off",
  textOn: "On"
}

export default Switch