import React, { useRef, useMemo, forwardRef } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const InputText = forwardRef((props, ref) => {
  const _ref = useRef(null);
  const inputTxtRef = ref ?? _ref;
  const clrBtnRef = useRef();

  const renderLabel = () => {
    return <span className="app-input-label">{props.label}</span>
  }

  const toggleInput = () => {
    let input = inputTxtRef.current;
    input.type === "text" ? input.type = "password" : input.type = "text";
  }

  const RenderPassToggler = () => {
    return props.type==="password" ? <button data-win-toggle="password" onClick={toggleInput}/> : <></>;
  }

  const renderStatus = useMemo(() => {
    if(props.setStatus === "success" || props.setStatus === "danger") {
      return <i className="icons10-status"></i>;
    }
    else if(props.setStatus === "loading") {
      return <div className="app-loader-busy loader-sm animate">
              <LoaderBusyWrapper/>
            </div>
    }
    return <></>;
  }, [props.setStatus]);


  const clearTxt = () => {
    inputTxtRef.current.value = "";
    clrBtnRef.current.style.visibility = "";
    // props.onChange();
  }

  const renderClearButton = useMemo(() => {
    return props.clearButton
          ? <button ref={clrBtnRef} type="button" onClick={clearTxt} data-win-clear="text"/>
          : <></>
  }, [props.clearButton]);

  // useMemo(()=>{
  //   console.log("KK");
  // }, [props.onChange])

  const _onChange = () => {
    console.log("KK");
    if(props.clearButton) {
      (inputTxtRef.current.value.trim()!=="")
      ? clrBtnRef.current.style.visibility = "visible"
      : clrBtnRef.current.style.visibility = "";
    }
    // props.onChange();
  }

  return (
    <div
      className={`app-input-container ${props.setStatus !== "default" ? "input-"+props.setStatus : ""}`}
      title={props.tooltip}>
      {props.label && (renderLabel())}
      <input
        className="app-input-text"
        key={props.key}
        ref={inputTxtRef}
        type={props.type}
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onKeyUp={props.onKeyUp}
        onInput={props.onInput}
        readOnly={props.readOnly}
        onChange={props.onChange}
        disabled={props.disabled}
        autoFocus={props.autoFocus}
        onKeyDown={props.onKeyDown}
        style={{ width: props.width }}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        autoComplete={props.autoComplete}
        onChangeCapture={() => _onChange()}
        autoCapitalize={props.autoCapitalize}
      />
      <div className="app-input-end-content">
        {renderClearButton}
        {renderStatus}
        <RenderPassToggler/>
      </div>
    </div>
  )
})

InputText.defaultProps = {
  type: "text",
  onChange: () => {},
  setStatus: "default",
  placeholder: "Input Text"
}

export default InputText;