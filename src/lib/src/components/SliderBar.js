import React from 'react'

const SliderBar = (props) => {
  return (
    <div className={props.thumbStyle === 'round' ? 
      "app-range-slider round" : props.thumbStyle === 'round-border' ? 
      "app-range-slider round-border" : "app-range-slider" } >
        <input type="range" 
          defaultValue={props.value} 
          min={props.min} 
          max={props.max} 
          onChange={props.onChange}
          step={props.step}
          style={{background:"linear-gradient(90deg, var(--AppColor)"+(props.value/props.max) * 100+"%, #999999 20.1%)"}}
        />
        {props.showValue ? <span> {props.value}</span> : ""}
    </div>
  )
}

SliderBar.defaultProps = {
  min: 0,
  max: 500,
  value: 0,
  step: 1,
  showValue: true
}

export default SliderBar
