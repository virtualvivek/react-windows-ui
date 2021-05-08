import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const MenuBar = (props) => {

  const [menubar, setMenubar] = useState(false)
  const showMenuBar = () => setMenubar(!menubar)



  //----------------------------------------------------------------
  // Step 1. Out Side click detector code
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                //alert("You clicked outside of me!");
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
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  //--------------------------------------------------------------------


  const teams_data = props.data
  const [teams, setTeams] = React.useState(teams_data)
  const [search, setSearch] = React.useState("")



  return (
    <div
      className="app-select-styled menubar"
      onClick={showMenuBar}
      ref={wrapperRef}>
        <span>{props.label}</span>
        <ul className={ menubar ? 'show' : ''}>
          <div className="app-search-box"
            onClick={(e)=> {e.stopPropagation()}}>
              <input
                className="app-input-text app-input-search"
                type="search"
                placeholder={props.searchPlaceholder}
                value={search}
                onChange={e => {
                  const test = teams_data.filter(team => {
                    return team.label.toLowerCase().includes(e.target.value.toLowerCase())
                  })
                  setTeams(test)
                  setSearch(e.target.value)
                }}
              />
          </div>
          {teams.map(item => (
          <li
            className="option"
            key={item.label}>
              <Link to={item.link} onClick={item.onClick}>
                {item.icon}{item.label}
              </Link>
          </li>
          ))}
      </ul>
    </div>
  )
}

MenuBar.defaultProps = {
    data:[],
    searchPlaceholder: "search here.."
  }

export default MenuBar