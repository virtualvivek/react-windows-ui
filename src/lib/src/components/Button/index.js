import React from 'react'
import LoaderBusyWrapper from '../_common/LoaderBusyWrapper'

const Button = (props) => {

  const renderLoader = () => {
    return <div
        className = {
            props.type ==="primary" ?  "app-loader-busy small light animate"
          : props.type ==="danger" ? "app-loader-busy small light animate"
          : props.type ==="success" ? "app-loader-busy small light animate"
          : "app-loader-busy small animate"
          }
        style={ props.isLoading ? { display: 'inline' } : { display : 'none' }}>
      <LoaderBusyWrapper/>
    </div>
  }

  const toggleLoading = () => {
    return props.isLoading ? ' isLoading' : '';
  }

  
  return (
    <button
      className = {
        props.type ==="primary" ?  "app-button animate primary"+toggleLoading()
      : props.type ==="danger" ? "app-button animate danger"+toggleLoading()
      : props.type ==="success" ? "app-button animate success"+toggleLoading()
      : props.type ==="primary-outline" ? "app-button animate primary-outline"+toggleLoading()
      : props.type ==="danger-outline" ? "app-button animate danger-outline"+toggleLoading()
      : props.type ==="success-outline" ? "app-button animate success-outline"+toggleLoading()
      : "app-button animate"+toggleLoading()
      }
      style={{
        width: props.width,
        textAlign: props.textAlign
      }}
      type="button"
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      disabled={props.disabled}
      title={props.tooltip}>

      <span style={
          props.isLoading ? { display:'none' }
        : props.value === "" ? { paddingRight: '0'}
        : props.icon ? { display : 'inline-flex', paddingRight: '5px' }
        : {paddingRight: '0'}
        }>

      {props.icon}
      </span>

      { props.isLoading ? renderLoader() : "" }
      
      <span style={props.isLoading ? { opacity: '0' } : { opacity : '1' }}>
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