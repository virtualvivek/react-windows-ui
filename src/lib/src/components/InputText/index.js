import React, { useRef } from 'react'
import LoaderBusyWrapper from '../_common/LoaderBusyWrapper'

const InputText = (props) => {

  const inputRef = useRef();

  const toggleInput = () => {
    let input = inputRef.current;
    input.type === "text" ? input.type = "password" : input.type = "text";
  }

  const renderLabel = () => {
    return <span className="app-input-label">{props.label}</span>
  }
  const renderStatus = () => {
    return  ( props.setStatus === "success"
            ||props.setStatus === "danger") ?
            <i className="icons10-keyboard font-size-18px"></i>
            :
            props.setStatus === "loading" ?
            <div className="app-loader-busy small animate">
              <LoaderBusyWrapper/>
            </div>
            :
            <></>
  }

  return (
    <div
      className={`app-input-text-container ${props.setStatus}`}
      title={props.tooltip}>
      {props.label && (renderLabel())}
      <input
        className="app-input-text"
        ref={inputRef}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
        style={{ width: props.width }}
      />
      <div className="app-input-status-container">
        {renderStatus()}

        {props.type==="password" && (<button
          className="unmask"
          type="button"
          onClick={toggleInput}/>)}
      </div>
    </div>
  )
}

InputText.defaultProps = {
  placeholder: "Input Text",
  type: "text",
  setStatus: "default"
}

export default InputText