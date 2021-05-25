import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className="app-progress-container" title={props.tooltip}>

      <div style={ props.showIcon ? { display:'block'} : { display : 'none' }}>
        {props.icon}
      </div>
      
      <div style={ props.showIcon ? { marginLeft: '15px' } : { marginLeft: '' }}>
        <span className="title">{props.title}</span>
        <div
          className={props.showIcon ? "app-progress withIcon" : "app-progress"}
          style={{
            height: props.height
          }}>
          <span
            className = {
              props.setStatus ==="danger" ? "bg-danger"
            : props.setStatus ==="success" ? "bg-success"
            : ""
            }
            style={{
              width: props.setProgress+'%'
            }}></span>
        </div>
        <span className="subtitle">{props.subtitle}</span>
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  showIcon: false,
  setProgress: 0
}

export default ProgressBar