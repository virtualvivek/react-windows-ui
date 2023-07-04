import React, { forwardRef } from "react";

const InputSearchBar = forwardRef((props, ref) => {
  return (
    <div className="app-input-search-bar" title={props.tooltip}>
      <input
        className="app-input-text"
        ref={ref}
        type="search"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        style={{ width: props.width }}
        placeholder={props.placeholder}
      />
      <button
        type="submit"
        onClick={() => props.onSubmit(props.value)}>
      </button>
    </div>
  )
})

InputSearchBar.defaultProps = {
  onSubmit: () => {},
  placeholder: "Search here.."
}

export default InputSearchBar;