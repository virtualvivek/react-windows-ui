import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOutSideClick } from "../../../hooks";

const NavBarSearchSuggestion = (props) => {
  const listRef = useRef(null);
  
  const teams_data = props.data;
  const [is_ulist, setUList] = useState("hide");
  const [search, setSearch] = React.useState("");
  const [teams, setTeams] = React.useState(teams_data);

  useOutSideClick(listRef, () => setUList("hide"));
  
  const toggleVisible = (e) => {
    !e.target.value ? setUList("hide") : setUList("show");
  }

  const _onClickUL = () => {
    setSearch(""); setUList("hide");
  }

  return (
    <div className="app-nav-search" title={props.tooltip}>  
    <div className="app-input-search-box">
      <input
        className="app-input-text"
        type="search"
        value={search}
        placeholder={props.placeholder}
        onChange={(e) => {
          toggleVisible(e)
          const test = teams_data.filter(team => {
            return team.label.toLowerCase()
            .includes(e.target.value.toLowerCase());
          });
          setTeams(test);
          setSearch(e.target.value);
        }}
      />
    </div>
    <ul
      className={is_ulist}
      ref={listRef}
      onClick={_onClickUL}>
      {teams.map((item) => (
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

NavBarSearchSuggestion.defaultProps = {
  data: [],
  placeholder: "Search here.."
}

export default NavBarSearchSuggestion;