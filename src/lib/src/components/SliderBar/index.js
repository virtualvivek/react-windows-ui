import React from "react";

const SliderBar = (props) => {

  const inputRef = React.useRef()

  const toggleVisible = () => {
    if(props.showPopupValue) {
      let ipopup = inputRef.current;
      ipopup.style.visibility="visible";
      ipopup.style.opacity="1";
    }
  }
  const toggleHidden = () => {
    if(props.showPopupValue) {
      let ipopup = inputRef.current;
          ipopup.style.visibility="hidden";
          ipopup.style.opacity="0";
    }
  }

  return (
    <div
      className={
        props.thumbStyle === "round" ? "app-range-slider slider-round"
      : props.thumbStyle === "round-border" ? "app-range-slider slider-round-border"
      : "app-range-slider" }
      title={props.tooltip}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        onMouseEnter={() => toggleVisible()}
        onMouseLeave={() => toggleHidden()}
        style={{
          background:"linear-gradient(90deg, var(--PrimaryColor)"+(props.defaultValue/props.max) * 100+"%, #999999 20.1%)"
          }}
      />
      { props.showValue && (<span> {props.defaultValue}</span>) }
      { props.showPopupValue && (
        <span
          ref={inputRef}
          className="app-range-slider-popup"
          style={{ left: (props.defaultValue/props.max) *72+"%" }}>
            {props.defaultValue}
        </span>
      )}
    </div>
  )
}

SliderBar.defaultProps = {
  min: 0,
  max: 500,
  step: 1,
  defaultValue: 0,
  showValue: true,
  showPopupValue: true
}

export default SliderBar;