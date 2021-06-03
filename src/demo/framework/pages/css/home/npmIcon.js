import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} height={80}>
      <title />
      <rect
        width={24}
        height={10.169}
        y={6.915}
        ry={2.542}
        fill="#f54542"
        paintOrder="stroke fill markers"
      />
      <path
        d="M5.34 9.621v4.44h3.7v.739H12v-.74h6.66V9.622zm3.7 3.698H8.3V11.1h-.74v2.22H6.08v-2.958H9.04zm2.22 0v.742H9.78v-3.7h2.96v2.959h-1.48zm6.66 0h-.738V11.1h-.742v2.22h-.74V11.1h-.739v2.22H13.48v-2.958h4.44zm-6.66-2.218H12v1.48h-.74z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent