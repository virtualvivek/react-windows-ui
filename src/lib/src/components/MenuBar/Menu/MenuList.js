import React, { forwardRef, useImperativeHandle, useRef } from "react";
import MenuItem from "./MenuItem";

function MenuList(props, myRef) {
  const inputRef = useRef(null);

  useImperativeHandle(myRef, () => ({
    toggleShow: () => { inputRef.current.classList.toggle("show"); }
  }));

  return (
    <ul
      ref={inputRef}
      onClick={props.onItemClick}
      className="ui-menu-list-dialog">
      {/* If there are multiple sub child if li */}
      {Array.isArray(props.listData.children)
      ? <>
        { props.listData.children.map((child_, index) => {
            return [
              child_.type === MenuItem && (
                <MenuItem
                  key={index+props.label}
                  icon={child_.props.icon}
                  label={child_.props.label}
                />
              )
            ]
          })
        }
        </>
        // If there is only single child of sub child li
        : props.listData.children
          ? <MenuItem
              label={props.listData.children.props.label}
              icon={props.listData.children.props.icon}
            />
          : <></>
      }
      </ul>
  )
}

export default forwardRef(MenuList);