import React from 'react'
import { NavPageContainer,Checkbox,Switch,InputText,
         InputSearchBar,InputSearchBox,SliderBar,RadioButton,
         SelectBox,MenuBar,InputSearchSuggestion } from '../../lib/src'

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

  sayhellow = () =>{alert("hi")}
  
  render() {
  return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1 className="m-b-15">Form Inputs</h1>

      <h3 className="m-b-15">Switch</h3>
            
        <div className="app-flex">
                
          <Switch
            defaultChecked
            tooltip="Switch tooltip title" />

          <Switch
            defaultChecked
            disabled
            labelOn="Disabled On"
            labelOff="Disabled Off" />
                
        </div>

        <p className="m-b-15"></p>

        <div className="app-flex">
                
          <Switch/>

          <Switch
            disabled
            labelOn="Disabled On"
            labelOff="Disabled Off" />
                
        </div>
        <br/>

      <h3 className="m-b-15">SliderBar</h3>

        <h1 className="m-0 color-primary"
          style={{fontSize:46}}>
            {this.state.Slider1}%
        </h1>

        <SliderBar
          defaultValue={this.state.Slider1}
          showValue={false}
          onChange={(e) => {this.onChangeSlider1(e)}}
          tooltip="SliderBar tooltip title" />
          
        <SliderBar
          defaultValue={this.state.Slider2}
          thumbStyle="round"
          step={4}
          onChange={(e) => {this.onChangeSlider2(e)}} />

        <SliderBar
          defaultValue={this.state.Slider3}
          thumbStyle="round-border"
          onChange={(e) => {this.onChangeSlider3(e)}} />

        <br/>


      <h3 className="m-b-15">Checkbox</h3>

        <div className="app-flex">
          <Checkbox
            defaultChecked
            tooltip="Checkbox tooltip title" />
          <div className="app-space-35"></div>
          <Checkbox
            disabled
            defaultChecked
            label="Disabled Checked"/>
        </div>

        <p className="m-b-10"></p>

        <div className="app-flex">
          <Checkbox
            defaultChecked
            label="Unchecked" />
          <div className="app-space-20"></div>
          <Checkbox
            defaultChecked
            label="Disabled Unchecked"/>
        </div>
        <br/>

      <h3 className="m-b-15">Inputs</h3>
               
        <InputText
          placeholder="Enter a text"
          tooltip="InputText tooltip title"/>

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

        <InputText
          type="password"
          placeholder="Enter a password"/>

        <br/><br/>

        <InputText
          width={225}
          label="label"
          placeholder="Enter a text"/>

        <br/><br/>

        <InputText
          type="date"
          placeholder="Select Date"
          tooltip="InputDate tooltip title" />

        <br/>
       
      <h3 className="m-b-15">SearchBar</h3>

        <InputSearchBar
          placeholder="Search here"
          tooltip="InputSearchBar tooltip title"/>
       

        <h3 className="m-b-15">SearchBox</h3>

        <InputSearchBox
          placeholder="Enter to Search"
          tooltip="InputSearchBox tooltip title"/>

      <h3 className="m-b-15">Search Suggestion</h3>

        <InputSearchSuggestion
          placeholder="Type 'a' .."
          data={[
            {label: 'apple', link: '#', icon:<i className="icons10-baby"></i>},
            {label: 'orange', link: '#',onClick:this.sayhellow},
            {label: 'banana', link: '#'},
            {label: 'peach', link: '#'},
          ]}
          tooltip="SearchSuggestion tooltip title"
        />


      <h3 className="m-b-15">SelectBox</h3>
          
        <SelectBox
          data={[
            {label: 'red', value: 'red'},
            {label: 'blue', value: 'blue'},
            {label: 'green', value: 'green'},
            {label: 'pink', value: 'pink'},
          ]}
        />
       

      <h3 className="m-b-15">MenuBar</h3>

        <MenuBar
          label="Select a fruit"
          data={[
            {label: 'apple', link: '#', icon:<i className="icons10-camera"></i>},
            {label: 'orange', link: '#',onClick:this.sayhellow},
            {label: 'banana', link: '#'},
            {label: 'peach', link: '#'},
          ]}
        />
              
      <h3 className="m-b-15">Radio Button</h3>

        <RadioButton
          name="1"
          label="Checked"
          defaultChecked
          tooltip="RadioButton tooltip title"/>

        <br></br>

        <RadioButton
          name="1"
          label="Unchecked"/>
          
        <br></br>

        <RadioButton
          name="2"
          label="Disabled"
          disabled
          defaultChecked/>

        <br/><br/><br/><br/>
            
    </NavPageContainer>
    )
  }
}

export default Inputs