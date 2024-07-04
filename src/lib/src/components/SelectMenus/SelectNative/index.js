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
    <select
      className="ui-menu-title"
      {...otherProps}
      name={name}
      title={tooltip}
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}>
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