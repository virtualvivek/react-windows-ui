import React, { useRef, forwardRef } from "react";

const InputSearchBox = forwardRef((props, ref) => {

  const {
    width,
    suggest,
    tooltip,
    onChange,
    ...otherProps
  } = props;

  const suggestRef = useRef();
  const [suggestData, setSuggestData] = React.useState(suggest);

  const _onChange = (e) => {
    let listSuggest = suggestRef.current;
    (!e.target.value || !listSuggest.hasChildNodes())
      ? listSuggest.className = ""
      : listSuggest.className = "show";
    onChange();
  }

  return (
    <div className="app-input-search-box" title={tooltip}>
      <input className="app-input-text"
        style={{ width: width }}
        ref={ref}
        {...otherProps}
        type="search"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={(e) => {
          _onChange(e)
          const lst_data = suggest.filter(data => {
            return data.text.toLowerCase().includes(e.target.value.toLowerCase());
          });
          setSuggestData(lst_data);
        }}
      />
      <ul ref={suggestRef} style={{ width: width }}>
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