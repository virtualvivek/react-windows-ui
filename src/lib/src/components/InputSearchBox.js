import React from 'react'

const InputSearchBox = (props) => {
  return (
    <div className="app-search-box" title={props.tooltip}>
      <input
        className="app-input-text app-input-search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

InputSearchBox.defaultProps = {
  placeholder: "Search here.."
}

export default InputSearchBox