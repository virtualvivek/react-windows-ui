import React, { useRef, forwardRef } from "react";

const InputSearchBox = forwardRef((props, ref) => {

  const suggestRef = useRef();
  const [suggestData, setSuggestData] = React.useState(props.suggest);

  const _onChange = (e) => {
    let listSuggest = suggestRef.current;
    (!e.target.value || !listSuggest.hasChildNodes())
      ? listSuggest.className = ""
      : listSuggest.className = "show";
    props.onChange();
  }

  return (
    <div className="app-input-search-box" title={props.tooltip}>
      <input className="app-input-text"
        style={{ width: props.width }}
        ref={ref}
        type="search"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={(e) => {
          _onChange(e)
          const lst_data = props.suggest.filter(data => {
            return data.text.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setSuggestData(lst_data);
        }}
      />
      <ul ref={suggestRef} style={{ width: props.width }}>
        {suggestData.map((item) => (
          <li className="option" key={item.text}>
            <span onClick={item.onClick}>{item.icon}{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
})

InputSearchBox.defaultProps = {
  suggest: [],
  onChange: () => {},
  placeholder: "Search here..",
}

export default InputSearchBox;