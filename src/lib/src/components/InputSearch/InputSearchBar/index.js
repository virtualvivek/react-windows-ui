import React from "react";

const InputSearchBar = (props) => {
  return (
    <div className="app-input-search-bar" title={props.tooltip}>
      <input
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
      <button
        type="submit"
        onClick={() => props.onSubmit(props.value)}>
      </button>
    </div>
  )
}

InputSearchBar.defaultProps = {
  placeholder: "Search here..",
  onSubmit: () => {}
}

export default InputSearchBar;