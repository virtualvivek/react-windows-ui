import React from 'react'
import { NavPageContainer,Checkbox,Switch,InputText,InputDate,
        InputSearchBar,InputSearchBox,SliderBar,RadioButton,
        SelectBox,MenuBar,InputSearchSuggestion,Accordion } from '../../../lib'
        
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import {SwitchCode,SliderBarCode,CheckboxCode,InputTextCode,
  InputPasswordCode,InputLabelCode,InputDateCode,InputSearchBarCode,
  InputSearchBoxCode,InputSearchSuggestionCode,SelectBoxCode,MenuBarCode,
  RadioButtonCode} from './codes/inputs'

class Inputs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        Slider1:256,
        Slider2:140,
        Slider3:58,
    }
  }

  onChangeSlider1 = (e) => { this.setState({Slider1:e.target.value}) }
  onChangeSlider2 = (e) => { this.setState({Slider2:e.target.value}) }
  onChangeSlider3 = (e) => { this.setState({Slider3:e.target.value}) }
  
  render() {
  return (
    <NavPageContainer hasPadding>

      <h1 className="m-b-15">Form Inputs</h1>

      <h3 className="m-b-15">Switch</h3>
            
        <div className="app-flex">
                
          <Switch
            checked />

          <Switch
            checked
            disabled
            textOn="Disabled On"
            textOff="Disabled Off" />
                
        </div>

        <p className="m-b-15"></p>

        <div className="app-flex">
                
          <Switch/>

          <Switch
            disabled
            textOn="Disabled On"
            textOff="Disabled Off" />
                
        </div>
        <br/>

        <Accordion title="Code - Switch" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {SwitchCode}
          </SyntaxHighlighter>
        </Accordion>

      <h3 className="m-b-15">SliderBar</h3>

        <h1 className="m-0 color-primary"
          style={{fontSize:46}}>
            {this.state.Slider1}%
        </h1>

        <SliderBar
          value={this.state.Slider1}
          showValue={false}
          onChange={(e) => {this.onChangeSlider1(e)}} />
          
        <SliderBar
          value={this.state.Slider2}
          thumbStyle="round"
          step={4}
          onChange={(e) => {this.onChangeSlider2(e)}} />

        <SliderBar
          value={this.state.Slider3}
          thumbStyle="round-border"
          onChange={(e) => {this.onChangeSlider3(e)}} />

        <br/>
        <Accordion title="Code - SliderBar" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {SliderBarCode}
          </SyntaxHighlighter>
        </Accordion>


      <h3 className="m-b-15">Checkbox</h3>

        <div className="app-flex">

          <Checkbox
            checked />

          <div className="app-space-35"></div>

          <Checkbox
            disabled
            checked
            text="Disabled Checked"/>

        </div>

        <p className="m-b-20"></p>

        <div className="app-flex">

          <Checkbox
            checked
            text="Unchecked" />

          <div className="app-space-20"></div>

          <Checkbox
            disabled
            text="Disabled Unchecked"/>

        </div>
        <br/>
        <Accordion title="Code - Checkbox" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {CheckboxCode}
          </SyntaxHighlighter>
        </Accordion>

      <h3 className="m-b-15">Inputs</h3>
               
        <InputText
          placeholder="Enter a text"/>

        <br/><br/>

        <InputText
          placeholder="Enter a text success"
          setStatus="success"/>

        <br/><br/>

        <InputText
          placeholder="Enter a text danger"
          setStatus="danger"/>

        <br/><br/>

        <InputText
          placeholder="Enter a text loading"
          setStatus="loading"/>

        <br/><br/>

        <Accordion title="Code - Inputs" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputTextCode}
          </SyntaxHighlighter>
        </Accordion>
        <br/>

        <InputText
          type="password"
          placeholder="Enter a password"/>

        <br/><br/>

        <Accordion title="Code - InputPassword" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputPasswordCode}
          </SyntaxHighlighter>
        </Accordion>
        <br/>

        <InputText
          width={225}
          label="label"
          placeholder="Enter a text"/>

        <br/><br/>

        <Accordion title="Code - Input Label" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputLabelCode}
          </SyntaxHighlighter>
        </Accordion>
        <br/>

        <InputDate
          placeholder="Select Date" />

        <br/><br/>
        <Accordion title="Code - Input Date" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputDateCode}
          </SyntaxHighlighter>
        </Accordion>
       
      <h3 className="m-b-15">SearchBar</h3>

        <InputSearchBar
          placeholder="Search here"/>

        <br/><br/>
        <Accordion title="Code - SearchBar" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputSearchBarCode}
          </SyntaxHighlighter>
        </Accordion>
       

        <h3 className="m-b-15">SearchBox</h3>

        <InputSearchBox
          placeholder="Enter to Search"/>

        <br/><br/>
        <Accordion title="Code SearchBox" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputSearchBoxCode}
          </SyntaxHighlighter>
        </Accordion>

      <h3 className="m-b-15">Search Suggestion</h3>

        <InputSearchSuggestion
          placeholder="Type 'a' .."
          data={[
            {label: 'apple', link: '#', icon:<i className="icons10-baby"></i>},
            {label: 'orange', link: '#'},
            {label: 'banana', link: '#'},
            {label: 'peach', link: '#'},
            ]}
          />

        <br/><br/>
        <Accordion title="Code - Search Suggestion" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {InputSearchSuggestionCode}
          </SyntaxHighlighter>
        </Accordion>


      <h3 className="m-b-15">SelectBox</h3>
          
        <SelectBox
          data={[
            {label: 'red', value: 'red'},
            {label: 'blue', value: 'blue'},
            {label: 'green', value: 'green'},
            {label: 'pink', value: 'pink'},
            ]}
        />

        <br/><br/>
        <Accordion title="Code - SelectBox" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {SelectBoxCode}
          </SyntaxHighlighter>
        </Accordion>
       

      <h3 className="m-b-15">MenuBar</h3>

        <MenuBar
          label="Select a fruit"
          data={[
            {label: 'apple', link: '#', icon:<i className="icons10-camera"></i>},
            {label: 'orange', link: '#'},
            {label: 'banana', link: '#'},
            {label: 'peach', link: '#'},
            ]}
        />

        <br/><br/>
        <Accordion title="Code - MenuBar" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {MenuBarCode}
          </SyntaxHighlighter>
        </Accordion>

              
      <h3 className="m-b-15">Radio Button</h3>

        <RadioButton
          name="1"
          text="Checked"
          checked/>

        <br></br>

        <RadioButton
          name="1"
          text="Unchecked"/>
          
        <br></br>

        <RadioButton
          name="2"
          text="Disabled"
          disabled
          checked/>

        <br/><br/>
        <Accordion title="Code - RadioButton" focused>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="code">
            {RadioButtonCode}
          </SyntaxHighlighter>
        </Accordion>
        <br/>

        <br/><br/><br/><br/>
            
    </NavPageContainer>
  )
  }
}

export default Inputs