import React, { useState, useEffect, useRef } from 'react'

const NavSearchBox = (props) => {

  const [menubar, setMenubar] = useState(false);
  const showMenuBar = () => setMenubar(!menubar);

  //----------------------------------------------------------------
  // Step 1. Out Side click detector code
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenubar(menubar)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  // Step 2. Out Side click Register
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  //--------------------------------------------------------------------


  return (
    <>  
    <div className="app-search-box">
      <input
        className="app-input-text app-input-search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
    <div
      onClick={showMenuBar}
      className="app-search-dialog-trigger">
      <i className="icons10-search"></i>
    </div>
    <div
      className={ menubar ? "app-search-dialog show" : "app-search-dialog"}
      ref={wrapperRef}>
        <i className="icons10-search"></i>
        <input
          className="app-input-text app-input-search"
          type="search"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <button onClick={showMenuBar}>
          <i className="icons10-cross"></i>
        </button>
    </div>
    </>
  )
}

NavSearchBox.defaultProps = {
  placeholder: "Search here.."
}

export default NavSearchBox