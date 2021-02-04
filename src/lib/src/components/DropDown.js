import React from 'react'


const Dropdown = (props) => {
  return (
    <div className="app-select-styled dropdown">
        <ul>
            {props.data.map(item => (
            <li class="option">
                <a href={item.link}>{item.label}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}

Dropdown.defaultProps = {
    data:[]
  }

export default Dropdown
