import React, { useRef, useMemo, forwardRef, useEffect, useCallback } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const InputText = forwardRef((props, ref) => {
  const _ref = useRef(null);
  const inputTxtRef = ref ?? _ref;
  const clrBtnRef = useRef();

  const {
    onClearButtonClick,
    clearButton,
    setStatus,
    onChange,
    label,
  } = props;

  const renderLabel = () => {
    return <span className="app-input-label">{label}</span>
  }

  const toggleInput = () => {
    let input = inputTxtRef.current;
    input.type === "text" ? input.type = "password" : input.type = "text";
  }

  const RenderPassToggler = () => {
    return props.type==="password" ? <button data-win-toggle="password" onClick={toggleInput}/> : <></>;
  }

  const renderStatus = useMemo(() => {
    if(setStatus === "success" || setStatus === "danger") {
      return <i className="icons10-status"></i>;
    }
    else if(setStatus === "loading") {
      return <div className="app-loader-busy loader-sm animate">
              <LoaderBusyWrapper/>
            </div>
    }
    return <></>;
  }, [setStatus]);

  const clearTxtChange = useCallback((event) => onChange(event), [onChange]);
  
  const renderClearButton = useMemo(() => {
    const clearTxt = () => {
      inputTxtRef.current.value = "";
      clrBtnRef.current.style.visibility = "";
      onClearButtonClick();
      const event = { target: { value: "" } };
      clearTxtChange(event);
    }
    return clearButton
          ? <button ref={clrBtnRef} type="button" onClick={clearTxt} data-win-clear="text"/>
          : <></>
  }, [clearButton, inputTxtRef, onClearButtonClick, clearTxtChange]);

  useEffect(() => {
    if(clearButton) {
      (inputTxtRef.current.value.trim()!=="")
      ? clrBtnRef.current.style.visibility = "visible"
      : clrBtnRef.current.style.visibility = "";
    }
  }, [onChange, clearButton, clrBtnRef, inputTxtRef]);

  return (
    <div
      className={`app-input-container ${setStatus !== "default" ? "input-"+setStatus : ""}`}
      title={props.tooltip}>
      {label && (renderLabel())}
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
  setStatus: "default",
  placeholder: "Input Text",
  onClearButtonClick: () => {}
}

export default InputText;