import React, { forwardRef } from "react";

const SliderBar = forwardRef((props, ref) => {

  const {
    showPopupValue,
    thumbStyle,
    tooltip,
    orientation,
    defaultValue,
    onChange,
    width,
    min,
    max,
    ...otherProps
  } = props;

  const popupRef = React.useRef();

  const toggleVisible = () => {
    if(showPopupValue && popupRef.current.visibility!=="visible") {
      let ipopup = popupRef.current;
          ipopup.style.visibility="visible";
          ipopup.style.opacity="1";
    }
  }
  const toggleHidden = () => {
    if(showPopupValue) {
      let ipopup = popupRef.current;
          ipopup.style.visibility="hidden";
          ipopup.style.opacity="0";
    }
  }

  const _onChange = (e) => {
    toggleVisible();
    onChange(e);
  }

  return (
    <div
      title={tooltip}
      style={{width: width}}
      className={`app-range-slider${thumbStyle === "round" ? " slider-round"
      : thumbStyle === "round-border" ? " slider-round-border" : ""}`}
      data-win-orient={orientation === "vertical" ? "vertical": "horizontal"}>
      <input
        {...otherProps}
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={props.step}
        onMouseUp={props.onDragEnd}
        onMouseDown={props.onDragStart}
        onTouchStart={props.onDragStart}
        onTouchEnd={props.onDragEnd}
        onChange={(e) => _onChange(e)}
        defaultValue={defaultValue}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={() => toggleHidden()}
        style={{
          background: `linear-gradient(90deg, var(--color-primary-adaptive) ${(defaultValue/max)*100}%, #999999 20.1%)`
        }}
      />
      { showPopupValue && (
        <span
          ref={popupRef}
          className="app-range-slider-popup"
          style={{ left: (defaultValue/max)*72+"%" }}>
          {defaultValue}
        </span>
      )}
    </div>
  )
});

SliderBar.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 0,
  onChange: () => {},
  showPopupValue: true
}

export default SliderBar;