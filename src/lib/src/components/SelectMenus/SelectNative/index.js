import React from "react";

const SelectNative = (props) => {
  const {
    data,
    name,
    tooltip,
    disabled,
    onChange,
    onClick,
    ...otherProps
  } = props;

  return (
    <select className="app-menu-title"
      {...otherProps}
      title={tooltip}
      name={name}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}>
      {data.map(item => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

SelectNative.defaultProps = {
  data: []
}

export default SelectNative;