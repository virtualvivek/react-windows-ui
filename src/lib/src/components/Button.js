import React from 'react'
import LoaderBusyWrapper from './_common/LoaderBusyWrapper'

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
    <LoaderBusyWrapper/>
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
      style={{
        width: props.width
      }}
      type="button"
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      disabled={props.disabled}>

      <span style={
          props.isLoading ? { display:'none'}
        : props.value === "" ? { paddingRight: '0'}
        : props.icon ? {display : 'inline-flex',paddingRight: '5px'}
        : {paddingRight: '0'}
        }>

      {props.icon}
      </span>

      { props.isLoading ? renderLoader() : "" }
      
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