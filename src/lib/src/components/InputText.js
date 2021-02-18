import React from 'react'

const InputText = (props) => {

  const inputRef = React.useRef()

  const toggleInput = () => {
    let input = inputRef.current
    input.type === "text" ? input.type = "password" : input.type = "text"
  }

  return (
    <>
    <input className="app-input-text"
      type={props.type}
      ref={inputRef}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
      
    <button
      className="unmask"
      type="button"
      onClick={toggleInput}
      style={props.type==="password" ? { display:'inline-block'} : {display : 'none'}}>
    </button>
    </>
  )
}

InputText.defaultProps = {
  placeholder: "Input Text",
  type: "text"
}

export default InputText