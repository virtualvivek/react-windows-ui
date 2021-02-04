import React from 'react'

const Button = (props) => {

  const renderLoader = () => {

    return <div
    className={
      props.type ==="primary" ?  "app-loader-busy small light" 
    : props.type ==="danger" ? "app-loader-busy small light"
    : props.type ==="success" ? "app-loader-busy small light"
    : "app-loader-busy small"  
    }
    style={props.isLoading ? { display:'inline'} : {display : 'none'}}>
    <div className="w-ball-wrapper ball-1"><div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-2"><div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-3"><div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-4"><div className="w-ball"></div>
    </div>
    <div className="w-ball-wrapper ball-5"><div className=" w-ball"></div>
    </div>
  </div>
  }

  
  return (
    <button 
      className={
        props.type ==="primary" ?  "app-button animate accent" 
      : props.type ==="danger" ? "app-button animate bg-danger"
      : props.type ==="success" ? "app-button animate bg-success"
      : "app-button animate"  
      }
      type="button" 
      onSubmit={props.onSubmit} 
      onClick={props.onClick} 
      disabled={props.disabled}>

      <span style={
          props.isLoading ? { display:'none'} 
        : props.value === "" ? { paddingRight: '0'}
        : {display : 'inline-flex',paddingRight: '5px'}
        }>

      {props.icon}
      </span>

      {props.isLoading ? renderLoader() : ""} 
      
      <span style={props.isLoading ? { opacity:'0'} : {opacity : '1'}}>
        {props.value}
      </span>
    </button>
  )
}

Button.defaultProps = {
  value: "Submit",
  isLoading : false,
  disabled: false
}

export default Button
