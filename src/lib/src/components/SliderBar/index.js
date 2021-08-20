import React from 'react'

const SliderBar = (props) => {

  const inputRef = React.useRef()

  const toggleVisible = () => {
    let iswitch = inputRef.current
        iswitch.style.visibility="visible"
        iswitch.style.opacity="1"
  }
  const toggleHidden = () => {
    let iswitch = inputRef.current
        iswitch.style.visibility="hidden"
        iswitch.style.opacity="0"
  }

  return (
    <div
      className={
        props.thumbStyle === 'round' ? "app-range-slider round"
      : props.thumbStyle === 'round-border' ? "app-range-slider round-border"
      : "app-range-slider" }
      title={props.tooltip}>
      <input
        type="range"
        defaultValue={props.defaultValue}
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        onMouseEnter={() => toggleVisible()}
        onMouseLeave={() => toggleHidden()}
        step={props.step}
        style={{
          background:"linear-gradient(90deg, var(--PrimaryColor)"+(props.defaultValue/props.max) * 100+"%, #999999 20.1%)"
          }}
      />
      { props.showValue ? <span> {props.defaultValue}</span> : "" }
      <span
        className="popup"
        ref={inputRef}
        style={{ left: (props.defaultValue/props.max) *72+"%" }}>
          {props.defaultValue}
      </span>
    </div>
  )
}

SliderBar.defaultProps = {
  min: 0,
  max: 500,
  defaultValue: 0,
  step: 1,
  showValue: true
}

export default SliderBar