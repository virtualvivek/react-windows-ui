import React, { forwardRef } from "react";

const InputSearchBar = forwardRef((props, ref) => {

  const {
    width,
    tooltip,
    onSubmit,
    ...otherProps
  } = props;

  return (
    <div className="app-input-search-bar" title={tooltip}>
      <input
        className="app-input-text"
        {...otherProps}
        ref={ref}
        type="search"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
        onChange={props.onChange}
        style={{ width: width }}
        placeholder={props.placeholder}
      />
      <button type="submit" onClick={() => onSubmit(props.value)}></button>
    </div>
  )
})

InputSearchBar.defaultProps = {
  onSubmit: () => {},
  placeholder: "Search here.."
}

export default InputSearchBar;