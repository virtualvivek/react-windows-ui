import React from 'react'

const InputSearchBox = (props) => {
  return (
    <div className="app-search-box" title={props.tooltip}>
      <input
        className="app-input-text"
        type="search"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}

InputSearchBox.defaultProps = {
  placeholder: "Search here.."
}

export default InputSearchBox