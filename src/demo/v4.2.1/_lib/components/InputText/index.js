import React, { useRef, useMemo } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";
const input_prefix = "input-";

const InputText = (props) => {

  const inputRef = useRef();

  const toggleInput = () => {
    let input = inputRef.current;
    input.type === "text" ? input.type = "password" : input.type = "text";
  }

  const renderLabel = () => {
    return <span className="app-input-label">{props.label}</span>
  }

  const renderStatus = useMemo(() => {
    if(props.setStatus === "success" || props.setStatus === "danger") {
      return <i className="icons10-keyboard font-size-18px"></i>;
    }
    else if(props.setStatus === "loading") {
      return <div className="app-loader-busy loader-sm animate">
              <LoaderBusyWrapper/>
            </div>
    }
    return <></>;
  }, [props.setStatus])

  return (
    <div
      className={`app-input-container ${props.setStatus ? input_prefix+props.setStatus : ""}`}
      title={props.tooltip}>
      {props.label && (renderLabel())}
      <input
        className="app-input-text"
        ref={inputRef}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
        style={{ width: props.width }}
      />
      <div className="app-input-status-container">
        {renderStatus}
        {
          props.type==="password" && (
            <button
              className="app-input-text-unmask"
              type="button"
              onClick={toggleInput}
            />
          )
        }
      </div>
    </div>
  )
}

InputText.defaultProps = {
  type: "text",
  setStatus: "default",
  placeholder: "Input Text"  
}

export default InputText;