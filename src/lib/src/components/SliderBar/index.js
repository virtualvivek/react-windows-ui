import React, { forwardRef } from "react";

const SliderBar = forwardRef(({
  step = 1,
  min = 0,
  max = 100,
  defaultValue = 0,
  onChange = () => {},
  showPopupValue = true,
  width,
  ticks,
  tooltip,
  orientation,
  onDragEnd,
  onDragStart,
  onMouseEnter,
  ...otherProps
}, ref) => {

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
      className="ui-range-slider"
      data-win-orient={orientation === "vertical" ? "vertical": "horizontal"}>
      <input
        {...otherProps}
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onMouseUp={onDragEnd}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        onChange={(e) => _onChange(e)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => toggleHidden()}
        style={{
          background: `linear-gradient(90deg, var(--color-primary-adaptive) ${(defaultValue/max)*100}%, #999999 20.1%)`
        }}
      />
      { showPopupValue && (
        <span
          ref={popupRef}
          className="ui-range-slider-popup"
          style={{ left: (defaultValue/max)*72+"%" }}>
          {defaultValue}
        </span>
      )}
      {
        ticks && (
          <div className="ui-datalist">
            {ticks.map((tick, index) => (
              <p key={index} value={tick}></p>
            ))}
          </div>
        )
      }
    </div>
  )
});

export default SliderBar;