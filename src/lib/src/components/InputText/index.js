import React, { useRef, useMemo, forwardRef, useCallback } from "react";
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
    tooltip,
    label,
    type,
    width,
    ...otherProps
  } = props;

  const renderLabel = () => { return <span className="ui-input-label">{label}</span> }

  const toggleInput = () => {
    let input = inputTxtRef.current;
    input.type === "text" ? input.type = "password" : input.type = "text";
  }

  const RenderPassToggler = () => {
    return type==="password" ? <button data-win-toggle="password" onClick={toggleInput}/> : <></>;
  }

  const renderStatus = useMemo(() => {
    if(setStatus === "success" || setStatus === "danger") {
      return <i className="icons10-status"></i>;
    }
    else if(setStatus === "loading") {
      return <div className="ui-loader-busy loader-sm animate">
              <LoaderBusyWrapper/>
            </div>
    }
    return <></>;
  }, [setStatus]);

  const clearTxt = useCallback(() => {
    inputTxtRef.current.value = "";
    clrBtnRef.current.classList.remove("show");
    const event = {
      target: { value: "" }
    };
    onChange(event);
    onClearButtonClick();
  }, [onClearButtonClick, inputTxtRef, onChange]);
  
  const renderClearButton = useMemo(() => {
    return clearButton
          ? <button ref={clrBtnRef} type="button" onClick={clearTxt} data-win-clear="text"/>
          : <></>
  }, [clearButton, clearTxt]);

  const _onChange = (e) => {
    onChange(e);
    if(clearButton) {
      (inputTxtRef.current.value!=="")
      ? clrBtnRef.current.classList.add("show")
      : clrBtnRef.current.classList.remove("show")
    }
  }

  return (
    <div
      className={`ui-input-container ${setStatus !== "default" ? "input-"+setStatus : ""}`}
      title={tooltip}>
      {label && (renderLabel())}
      <input
        className="ui-input-text"
        {...otherProps}
        ref={inputTxtRef}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => _onChange(e)}
        style={{ width: width }}
      />
      <div className="ui-input-end-content">
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
  onChange: () => {},
  onClearButtonClick: () => {}
}

export default InputText;