import React, { useState, useRef, useMemo } from "react";
import { useOutSideClick } from "../../hooks";
import { getScreenOffset, ScrollView } from "../../api";

const MenuBar = (props) => {

  const [menubar, setMenubar] = useState(false);
  const [isReverse, setReverse] = useState("");

  // # Click Outside Register Code
  const wrapperRef = useRef(null);
  useOutSideClick(wrapperRef, () => setMenubar(false));
  //--------------------------------------------------------------------

  const toggleMenuBar = () => {
    setMenubar(!menubar);
    ScrollView.disableScroll();
    getScreenOffset(wrapperRef) ? setReverse("reverse") :  setReverse("");
  }

  useMemo(() => {
    if(!menubar) { ScrollView.enableScroll(); }
  }, [menubar]);


  const teams_data = props.data;
  const [teams, setTeams] = useState(teams_data);
  const [search, setSearch] = useState("");


  return (
    <div className="app-dropdown-menu" onClick={toggleMenuBar} ref={wrapperRef}>
      <span className="app-dropdown-title">{props.label}</span>
      <ul className={ menubar ? `app-dropdown-list show ${isReverse}` : "app-dropdown-list"}>
        {props.showSearchBar && (
        <div className="app-input-search-box" onClick={(e) => {e.stopPropagation()}}>
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
          <li className="app-dropdown-list-item" key={item.label}>
            <span onClick={item.onClick}>
              {item.icon}{item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

MenuBar.defaultProps = {
  data: [],
  label: "Select",
  showSearchBar: false,
  searchPlaceholder: "search here.."
}

export default MenuBar;