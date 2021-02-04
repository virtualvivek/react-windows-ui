import React from 'react'
import { Link } from 'react-router-dom'


const ListItem = (props) => {
  return (
    <li className="app-list-item">
        <Link to={props.to}>
            {props.icon}
            <img 
              src={props.img}
              alt={"Dummy text"}
              style={props.img ? { display:''} : {display : 'none'}}></img>
            <div>
                <span className="app-list-title">{props.title}</span>
                <p className="app-list-subtitle">{props.subtitle}</p>
            </div>
            <p className="app-list-info">{props.info}</p>
        </Link>
    </li>
  )
}

ListItem.defaultProps = {
  to : "#"
}


export default ListItem
