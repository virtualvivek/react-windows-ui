import React from 'react'

const Gauge = (props) => {

  const renderBackground = () => {
    if(props.type === 'fill')
        return <circle
                cx="50"
                cy="50"
                r="45"
                fill={props.backgroundColor}
                />
    else
        return <circle
                cx="50"
                cy="50"
                r="40"
                stroke={props.backgroundColor}
                strokeWidth="5px"
                fill="transparent"
                />
  }  
  return (
      <div
        style={{
            display: 'inline-block',
            width:100*props.scale+"px",
            height: 100*props.scale+"px"}}>
        <svg
            style={{
                transform: "scale("+props.scale+")",
                transformOrigin:' 0% 0%',
                width: "100px",
                height: "100px"}}>

        { renderBackground() }

        <path
            strokeLinecap="round"
            strokeWidth={props.strokeWidth} 
            stroke={props.strokeColor} 
            style={{transition: '1s ease-in-out'}}
            fill="none"
            strokeDasharray={251.2*props.setProgress/100+",251.2"}
            d="M50 10
            a 40 40 0 0 1 0 80
            a 40 40 0 0 1 0 -80">
        </path>
        <text
            x="50" y="50"
            textAnchor="middle" dy="7"
            fontSize="17"
            fontWeight="500"
            fill={props.valueColor}>
            {props.value}
        </text>
        <text
            x="50" y="50" 
            textAnchor="middle" dy="19" 
            fontSize="7"
            opacity="0.7"
            fill="var(--color_dark_text)">
            {props.info}
        </text>
        </svg>
    </div>
  )
}

Gauge.defaultProps = {
  backgroundColor: "var(--color_light_grey)",
  strokeColor: 'var(--PrimaryColor)',
  strokeWidth: 5,
  scale: 1,
  setProgress: 0,
  valueColor: "var(--color_dark_text)"
}

export default Gauge