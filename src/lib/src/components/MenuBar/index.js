import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useOutSideClick from '../utils/hooks/useOutSideClick'

const MenuBar = (props) => {

  const [menubar, setMenubar] = useState(false)
  const showMenuBar = () => setMenubar(!menubar)

  // # Click Outside Register Code
  const wrapperRef = useRef(null)
  useOutSideClick(wrapperRef, () => setMenubar(false));
  //--------------------------------------------------------------------


  const teams_data = props.data
  const [teams, setTeams] = useState(teams_data)
  const [search, setSearch] = useState("")


  return (
    <div
      className="app-select-styled menubar"
      onClick={showMenuBar}
      ref={wrapperRef}>
      <span>{props.label}</span>
      <ul className={ menubar ? 'show' : ''}>
        {props.showSearchBar && (
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
        )}
        {teams.map(item => (
        <li
          className="option"
          key={item.label}>
          <Link
            to={item.link ? item.link : "#"}
            onClick={item.onClick}>
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
  label: "Select",
  searchPlaceholder: "search here..",
  showSearchBar: false
}

export default MenuBar