import React, { forwardRef, useImperativeHandle, useRef } from "react";
import SubMenuListItem from "./SubMenuListItem";

function SubMenuList(props, myRef) {
  const inputRef = useRef(null);

  useImperativeHandle(myRef, () => ({
    toggleShow: () => {
      inputRef.current.classList.toggle("show");
    }
  }));

  return (
    <ul
      ref={inputRef}
      onClick={props.onItemClick}
      className="app-cmdbar-menu-list cmdbar-submenu">
      {/* If there are multiple sub child if li */}
      {Array.isArray(props.listData.children)
      ? <>
        { props.listData.children.map((child_, index) => {
            return [
              child_.type === SubMenuListItem && (
                <SubMenuListItem
                  key={index}
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
          ? <SubMenuListItem
              label={props.listData.children.props.label}
              icon={props.listData.children.props.icon}
            />
          : <></>
      }
      </ul>
  )
}

export default forwardRef(SubMenuList);