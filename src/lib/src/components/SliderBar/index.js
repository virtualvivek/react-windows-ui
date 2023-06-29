import React from "react";

const SliderBar = (props) => {

  const popupRef = React.useRef();

  const toggleVisible = () => {
    if(props.showPopupValue && popupRef.current.visibility!=="visible") {
      let ipopup = popupRef.current;
          ipopup.style.visibility="visible";
          ipopup.style.opacity="1";
    }
  }
  const toggleHidden = () => {
    if(props.showPopupValue) {
      let ipopup = popupRef.current;
          ipopup.style.visibility="hidden";
          ipopup.style.opacity="0";
    }
  }

  const _onChange = (e) => {
    toggleVisible();
    props.onChange(e);
  }

  return (
    <div
      title={props.tooltip}
      style={{width: props.width}}
      className={
        props.thumbStyle === "round" ? "app-range-slider slider-round"
      : props.thumbStyle === "round-border" ? "app-range-slider slider-round-border"
      : "app-range-slider" }
      data-win-orient={props.orientation === "vertical" ? "vertical": "horizontal"}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        onMouseUp={props.onDragEnd}
        onMouseDown={props.onDragStart}
        onTouchStart={props.onDragStart}
        onTouchEnd={props.onDragEnd}
        onChange={(e) => _onChange(e)}
        defaultValue={props.defaultValue}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={() => toggleHidden()}
        style={{
          background:"linear-gradient(90deg, var(--color-primary-adaptive)"+(props.defaultValue/props.max) * 100+"%, #999999 20.1%)"
        }}
      />
      { props.showPopupValue && (
        <span
          ref={popupRef}
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
  onChange: () => {},
  showPopupValue: true
}

export default SliderBar;