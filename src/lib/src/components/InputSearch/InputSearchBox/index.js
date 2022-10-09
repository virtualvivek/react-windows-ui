import React from "react";

const InputSearchBox = (props) => {
  return (
    <div className="app-input-search-box" title={props.tooltip}>
      <input
        {...props}
        style={{ width: props.width }}
        className="app-input-text"
        type="search"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
      />
    </div>
  )
}

InputSearchBox.defaultProps = {
  placeholder: "Search here.."
}

export default InputSearchBox;