import React, { useState, useEffect, useMemo, useRef } from "react";
import { ScrollView, getScreenOffset } from "../../../api";
import { useOutSideClick } from "../../../hooks";

const Select = (props) => {
  const {
    data,
    trigger,
    tooltip,
    defaultValue
  } = props;

  const data_default = [];
  const [iValue, setIValue] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isReverse, setReverse] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [ilabel, setILabel] = useState("Select");
  const [items, setItem] = useState(data_default);

  useEffect(() => {
    //Check if any default value is given --
    if(defaultValue) {
      let defaultLabel = items.find(x => x.value === defaultValue).label;
      setIValue(defaultValue);
      setILabel(defaultLabel);
    } else {
      setILabel(items[0].label);
      setIValue(items[0].value);
    }
  }, [data, defaultValue, items]);

  useMemo(() => setItem(data), [data]);

  useMemo(() => { if(!isOpen) { ScrollView.enableScroll(); } }, [isOpen]);
  
  const handleItemClick = (value, label) => {
    setILabel(label);
    setIValue(value);
    toggleDropdown();
    props.onChange(value);
  }

  const toggleDropdown = () => {
    !isShown ? setItem(data) : setIsShown(true);
    setOpen(!isOpen);
    getScreenOffset(wrapperRef) ? setReverse(" reverse") : setReverse("");
    ScrollView.disableScroll();
  }


  const wrapperRef = useRef(null);
  //useOutSideClick(wrapperRef, () => console.log('OUTSIDE CLICKED'));
  useOutSideClick(wrapperRef, () => setOpen(false));

  return (
    <div
      ref={wrapperRef}
      onClick={toggleDropdown}
      className="ui-menu-select">
      {
        trigger
         ? <>{trigger}</>
         : <span className="ui-menu-title" title={tooltip}>{ilabel}</span>
      }
      <ul className={`ui-menu-list${isOpen ? " show":""}${isReverse}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`ui-menu-list-item${item.value === iValue ? " selected":""}`}
            onClick={() => handleItemClick(item.value, item.label)}>
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