import React, { useState,useEffect, useMemo, useRef } from "react";
import { ScrollView, getScreenOffset } from "../_api";
import { useOutSideClick } from "../_hooks";

const Select = (props) => {
  const data_default = [];

  const [isOpen, setOpen] = useState(false);
  const [isReverse, setReverse] = useState("");
  const [ilabel, setILabel] = useState("Select");
  const [items, setItem] = useState(data_default);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    //Check if any default value is given
    if(props.defaultValue) {
      let defaultIndex = items.findIndex(x => x.value === props.defaultValue);
      let defaultLabel = items.find(x => x.value === props.defaultValue).label;
      
      setSelectedItem(defaultIndex);
      setILabel(defaultLabel);
    }
    else {
      setILabel(items[0].label);
    }

    setItem(props.data);
  }, [props.data, props.defaultValue, items]);

  useMemo(() => { setItem(props.data); }, [props.data]);

  useMemo(() => { if(!isOpen) { ScrollView.enableScroll(); } }, [isOpen]);
  
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
    ScrollView.disableScroll();
    getScreenOffset(wrapperRef) ? setReverse("reverse") : setReverse("");
  }


  const wrapperRef = useRef(null);
  //useOutSideClick(wrapperRef, () => console.log('OUTSIDE CLICKED'));
  useOutSideClick(wrapperRef, () => setOpen(false));

  return (
    <div className="app-dropdown-menu app-select" ref={wrapperRef} onClick={toggleDropdown}>
      <span>{ilabel}</span>
      <ul className={`app-dropdown-list ${isOpen && 'show'} ${isReverse}`}>
        {items.map((item, index) => (
        <li
          className={`app-dropdown-list-item${index === selectedItem ? ' selected':''}`}
          key={index}
          onClick={() => handleItemClick(item.value)}>
            <span>{item.icon}{item.label}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

Select.defaultProps = {
  onChange: () => {}
}

export default Select;