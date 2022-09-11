import React from "react";

const InputSearchBar = (props) => {
  return (
    <div className="app-input-search-bar" title={props.tooltip}>
      <input
        {...props}
        className="app-input-text"
        type="search"
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
      />
      <button
        type="submit"
        onClick={props.onSubmit}>
      </button>
    </div>
  )
}

InputSearchBar.defaultProps = {
  placeholder: "Search here..",
  onSubmit: () => {}
}

export default InputSearchBar;