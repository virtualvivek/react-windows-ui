import React from 'react'
import { Link } from 'react-router-dom'

const InputSearchSuggestion = (props) => {

    const inputRef = React.useRef()

    const toggleVisible = (e) => {
        let iswitch = inputRef.current
        if(!e.target.value){
            iswitch.style.visibility="hidden"
        }
        else {
            iswitch.style.visibility="visible"
        }
    }

    const teams_data = props.data;
    const [teams, setTeams] = React.useState(teams_data);
    const [search, setSearch] = React.useState("");

    return (
        <div className="app-search-suggestion">
        <div className="app-search-box">
            <input 
            className="app-input-text app-input-search" 
            type="search" 
            placeholder={props.placeholder}
            value={search}
            onChange={e => {
                toggleVisible(e)
                const test = teams_data.filter(team => {
                return team.label.toLowerCase().includes(e.target.value.toLowerCase());
                });          
                setTeams(test);
                setSearch(e.target.value);
            }} 
            />
        </div>

        <ul ref={inputRef}>
            {teams.map(item => (
            <li 
            className="option" 
            key={item.label}>
                <Link to={item.link}>
                {item.icon}{item.label}
                </Link>
            </li>
            ))}
        </ul>
        </div>
        )
    }

InputSearchSuggestion.defaultProps = {
placeholder: "Search here.."
}

export default InputSearchSuggestion
