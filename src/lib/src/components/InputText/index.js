import React from 'react'
import LoaderBusyWrapper from '../_common/LoaderBusyWrapper'

const InputText = (props) => {

  const inputRef = React.useRef()

  const toggleInput = () => {
    let input = inputRef.current
    input.type === "text" ? input.type = "password" : input.type = "text"
  }

  const renderLabel = () => {
    return <span className="app-input-label">{props.label}</span>
  }
  const renderStatusSuccess = () => {
    return <i className="icons10-checkmark color-success font-size-18px"></i>
  }
  const renderStatusDanger = () => {
    return <i className="icons10-cross color-danger font-size-18px"></i>
  }
  const renderLoader = () => {
    return  <div className="app-loader-busy small animate" style={{top:'5px'}}>
              <LoaderBusyWrapper/>
            </div>
  }

  return (
    <div className="app-input-text-container" title={props.tooltip}>
    { props.label ? renderLabel() : '' }
      <input
        className = {
            props.setStatus === "success" ? "app-input-text success"
          : props.setStatus === "danger" ? "app-input-text danger"
          : "app-input-text"
        }
        style={{
          width: props.width
        }}
        type={props.type}
        ref={inputRef}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
      />
        
      <div className="app-input-status-container">

        { props.setStatus === "success" ? renderStatusSuccess() : '' }
        { props.setStatus === "danger" ? renderStatusDanger() : '' }
        { props.setStatus === "loading" ? renderLoader() : '' }

        <button
          className="unmask"
          type="button"
          onClick={toggleInput}
          style={ props.type==="password" ? { display: 'inline-block' }
                : { display : 'none' }
                }>
        </button>
      </div>
    </div>
  )
}

InputText.defaultProps = {
  placeholder: "Input Text",
  type: "text"
}

export default InputText