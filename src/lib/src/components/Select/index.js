import React, { useState,useEffect, useMemo, useRef } from "react";
import useOutSideClick from "../utils/hooks/useOutSideClick";
import getScreenOffset from "../utils/getScreenOffset";

const Select = (props) => {
  const data_default = [];

  const [isOpen, setOpen] = useState(false);
  const [ilabel, setILabel] = useState("Select");
  const [isReverse, setReverse] = useState("");
  const [items, setItem] = useState(data_default);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    //Check if any default value is given
    if(props.defaultValue) {
      let defaultIndex = items.findIndex(x => x.value === props.defaultValue);
      let defaultLabel = items.find(x => x.value === props.defaultValue).label;
      
      setSelectedItem(defaultIndex)
      setILabel(defaultLabel)
    }
    else {
      setILabel(items[0].label)
    }

    setItem(props.data)
  }, [props.data,props.defaultValue,items])

  useMemo(() => {
    setItem(props.data)
  }, [props.data])
  
  
  const handleItemClick = (value) => {
    //get index of selecting value
    let id = items.findIndex(x => x.value === value);

    setILabel(value);
    setSelectedItem(id);
    toggleDropdown();
    props.onChange(value);
  }

  const toggleDropdown = () => {
    setOpen(!isOpen);
    getScreenOffset(wrapperRef) ? setReverse("reverse") :  setReverse("");
  }

  // Click outside Code using custom hook
  const wrapperRef = useRef(null);
  //useOutSideClick(wrapperRef, () => console.log('OUTSIDE CLICKED'));
  useOutSideClick(wrapperRef, () => setOpen(false));

  
  return (
    <div className="app-select-styled react" ref={wrapperRef}>
      <div
        className="app-select-header"
        onClick={toggleDropdown}>
        {ilabel}
        <i className="icons10-angle-down"></i>
      </div>
      <div className={`app-select-body ${isOpen && 'show'} ${isReverse}`}>
        {items.map((item, index) => (
          <div
            className={`select-item ${index === selectedItem && 'selected'}`}
            onClick={() => handleItemClick(item.value)}
            key={index}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

Select.defaultProps = {
  onChange: () => {}
}

export default Select;