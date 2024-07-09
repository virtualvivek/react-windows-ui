import React, { useState } from 'react'
import { NavPageContainer, InputText, TextArea, InputSearchBar, InputSearchBox } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { InputTextImportCode, InputTextUsageCode, InputTextStatusUsageCode,
  InputTextPasswordUsageCode, InputTextLabelUsageCode, InputDateUsageCode,
  InputTextAreaUsageCode, InputSearchBarUsageCode, InputSearchBoxUsageCode,
  ExampleUsageCode } from './codes'
import PropsView from './props-view'
import TextAreaProps from './props-textarea'
import DateProps from './props-date'

const InputGroupDocs = () => {
  const [inputVal, setInputVal] = useState("Inputs");

  const _onChange = (value) => {
    setInputVal(value);
  }

  // const kk = useRef();
  // useEffect(()=> {
  //   console.log(kk.current.value);
  // }, [])

  return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>
      <h1>{inputVal}</h1>
      <p className="font-size-18px">The <span className="ui-color-primary">Input</span> elements are used to create interactive controls for forms in order to accept data from the user.</p>

      <InputText
        clearButton={true}
        value={inputVal}
        onChange={(e) => _onChange(e.target.value)}
        // onClearButtonClick={() => {}}
      />
      <span>&nbsp;&nbsp;  Edit Text.</span>
      <br/><br/>
     
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {ExampleUsageCode}
      </SyntaxHighlighter>
      

      <h1>InputText</h1>
      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <InputText
        clearButton
        placeholder="Enter a text"
        tooltip="InputText tooltip title"
      />

      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextUsageCode}
      </SyntaxHighlighter>

      <h2>Input Status</h2>

      <InputText
        placeholder="Enter a text success"
        setStatus="success"/>
      <br/><br/>
      <InputText
        placeholder="Enter a text danger"
        setStatus="danger"
        />
      <br/><br/>
      <InputText
        placeholder="Enter a text loading"
        setStatus="loading"/>
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextStatusUsageCode}
      </SyntaxHighlighter>

      <h2>Input Password</h2>

      <InputText
        type="password"
        placeholder="Enter a password"/>
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextPasswordUsageCode}
      </SyntaxHighlighter>

      <h2>Input Label</h2>

      <InputText
        width={225}
        label="label"
        placeholder="Enter a text"/>
      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextLabelUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsView />

      <div className="ui-hr"></div>
      <h1>TextArea</h1>

      <TextArea
        resizer={false}
        defaultValue={"Hello World"}
      />

      <h2>Usage</h2>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputTextAreaUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <TextAreaProps />
      
      <div className="ui-hr"></div>
      <h2>Input as Calendars:</h2>
      
      <div style={{display: "grid", gap: 5}}>
        <InputText
          type="date"
          placeholder="Select Date"
          tooltip="InputDate tooltip title" />
      
        <InputText
          type="datetime-local"
          placeholder="Select Date"
          tooltip="InputDate tooltip title" />
      
        <InputText
          type="week"
          placeholder="Select Date"
          tooltip="InputDate tooltip title" />
      
        <InputText
          type="month"
          placeholder="Select Date"
          tooltip="InputDate tooltip title" />
      
        <InputText
          type="time"
          placeholder="Select Date"
          tooltip="InputDate tooltip title" />
      </div>

      <br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputDateUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <DateProps/>

      <div className="ui-hr"></div>


      <h1>InputSearchBar</h1>
      <h2>Usage</h2>

      <InputSearchBar
        placeholder="Search here"
        // onSubmit={(e) => {alert(e.target.value)}}
        // onChange={(e) => {alert(e.target.value)}}
      />

      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputSearchBarUsageCode}
      </SyntaxHighlighter>

      <h1>InputSearchBox</h1>
      <h2>Usage</h2>

      <InputSearchBox
        placeholder="Enter to Search"
        // onChange={(e) => {alert(e.target.value)}}
      />
      &nbsp;&nbsp;
      <InputSearchBox
        placeholder="Enter with Suggestions"
        suggest={[
          {text: "apple", onClick: () => {}, icon: <i className="icons10-home"></i>},
          {text: "orange", onClick: () => {}},
          {text: "banana", onClick: () => {}},
          {text: "peach", onClick: () => {}}
        ]}
      />

      <br/><br/>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {InputSearchBoxUsageCode}
      </SyntaxHighlighter>


      <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
  );
}

export default InputGroupDocs;