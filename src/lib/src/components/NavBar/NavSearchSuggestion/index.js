import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useOutSideClick from "../../utils/hooks/useOutSideClick";

const NavSearchSuggestion = (props) => {

  const dialogRef = useRef(null);
  const listRef = useRef(null);

  const [menubar, setMenubar] = useState(false);
  const [is_ulist, setUList] = useState("hide");
  const showMenuBar = () => setMenubar(!menubar);

  const teams_data = props.data;
  const [teams, setTeams] = React.useState(teams_data);
  const [search, setSearch] = React.useState("");  
  
  useOutSideClick(dialogRef, () => setMenubar(false));

  useOutSideClick(listRef, () => setUList("hide"));
  
  const toggleVisible = (e) => {
    !e.target.value ? setUList("hide") : setUList("show");
  }

  const _onClickUL = () => {
    setSearch("");
    setUList("hide");
  }


  return (
    <div className="app-nav-search" title={props.tooltip}>  
    <div className="app-search-box">
      <input
        className="app-input-text app-input-search"
        type="search"
        value={search}
        placeholder={props.placeholder}
        onChange={(e) => {
          toggleVisible(e)
          const test = teams_data.filter(team => {
            return team.label.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setTeams(test);
          setSearch(e.target.value);
        }}
      />
    </div>
    <div
      onClick={showMenuBar}
      className="app-search-dialog-trigger">
      <i className="icons10-search"></i>
    </div>
    <div
      className={ menubar ? "app-search-dialog show" : "app-search-dialog"}
      ref={dialogRef}>
        <i className="icons10-search"></i>
        <input
          className="app-input-text app-input-search"
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
        <button onClick={showMenuBar}>
          <i className="icons10-cross"></i>
        </button>
    </div>
      <ul
        className={is_ulist}
        ref={listRef}
        onClick={()=> _onClickUL()}>
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

NavSearchSuggestion.defaultProps = {
  placeholder: "Search here.."
}

export default NavSearchSuggestion;