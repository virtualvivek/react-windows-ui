import React from 'react'

const InputDate = (props) => {

  return (
    <input
      type="date"
      className="app-input-text"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

InputDate.defaultProps = {
  placeholder: "Select Date"
}

export default InputDate