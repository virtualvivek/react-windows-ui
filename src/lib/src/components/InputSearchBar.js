import React from 'react'


const Switch = (props) => {
  return (
    <div className="app-search-bar"> 
        <input 
          className="app-input-text app-input-search" 
          type="search" 
          placeholder={props.placeholder}/>
        <button type="submit" onClick={props.onClick}></button>
    </div>
  )
}

Switch.defaultProps = {
  placeholder: "Search here.."
}

export default Switch
