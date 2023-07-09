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
    <div className="app-select-menu" title={tooltip}>
      <select
        {...otherProps}
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
    </div>
  )
}

SelectNative.defaultProps = {
  data: []
}

export default SelectNative;