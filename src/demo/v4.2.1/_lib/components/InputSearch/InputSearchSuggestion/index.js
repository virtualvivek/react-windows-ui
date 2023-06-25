import React from "react";
import { Link } from "react-router-dom";

const InputSearchSuggestion = (props) => {

  const inputRef = React.useRef();

  const _onChange = (e) => {
    setSearchVal(e.target.value);
    let iswitch = inputRef.current;
    if(!e.target.value || !inputRef.current.hasChildNodes()) {
      iswitch.style.visibility="hidden";
    }
    else {
      iswitch.style.visibility="visible";
    }
    props.onChange();
  }

  const search_data = props.data;
  const [teams, setTeams] = React.useState(search_data);
  const [search_val, setSearchVal] = React.useState("");

  return (
    <div className="app-input-search-suggestion" title={props.tooltip}>
      <div className="app-input-search-box">
        <input
          type="search"
          value={search_val}
          style={{ width: props.width }}
          disabled={props.disabled}
          onClick={props.onClick}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          placeholder={props.placeholder}
          className="app-input-text app-input-search"
          onChange={(e) => {
            _onChange(e)
            const lst_data = search_data.filter(team => {
              return team.label.toLowerCase().includes(e.target.value.toLowerCase());
            });
            setTeams(lst_data);
          }}
        />
      </div>
      <ul ref={inputRef} style={{ width: props.width }}>
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

InputSearchSuggestion.defaultProps = {
  placeholder: "Search here..",
  onChange: () => {}
}

export default InputSearchSuggestion;