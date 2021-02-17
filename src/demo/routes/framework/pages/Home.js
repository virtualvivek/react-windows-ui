import React from 'react'
import {NavPageContainer,Checkbox,Switch,
        InputText,InputDate,InputSearchBar,
        InputSearchBox,SliderBar,
        RadioButton,SelectBox,MenuBar,InputSearchSuggestion} from '../../../../lib'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        Slider1:256,
        Slider2:140,
        Slider3:58,
    }
  }

  onChangeSlider1 = (e) => {   
    this.setState({Slider1:e.target.value})
  }
  onChangeSlider2 = (e) => {   
    this.setState({Slider2:e.target.value})
  }
  onChangeSlider3 = (e) => {   
    this.setState({Slider3:e.target.value})
  }
  
  render() {
  return (
    <NavPageContainer hasPadding>

      <h1 className="m-b-15">Form Elements</h1>

        <h3 className="m-b-15">Switch</h3>
            
          <div className="app-flex">
                
            <Switch
              checked/>

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

          <h3 className="m-b-15">SliderBar</h3>

            <h1 className="m-0 color-accent" style={{fontSize:46}}>{this.state.Slider1}%</h1>
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


          <h3 className="m-b-15">Checkbox</h3>

            <div className="app-flex">

              <Checkbox
                checked />
              <div className="app-hr-space" s="40"></div>
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
              <div className="app-hr-space" s='20'></div>
              <Checkbox
                disabled
                text="Disabled Unchecked"/>

            </div>

            <br></br>
            <h3 className="m-b-15">Inputs</h3>
               
              <InputText
                placeholder="Enter a text"/>

              <br/><br/>

              <InputText
                type="password"
                placeholder="Enter a password"/>

              <br/><br/>

              <InputDate
                placeholder="Select Date" />

            <h3 className="m-b-15">SearchBar</h3>

              <InputSearchBar
                placeholder="Search here"/>

            <h3 className="m-b-15">SearchBox</h3>

              <InputSearchBox
                placeholder="Enter to Search"/>

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
                    {label: 'orange', link: '#'},
                    {label: 'banana', link: '#'},
                    {label: 'peach', link: '#'},
                    ]}
                />

              
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


            <br/><br/><br/><br/>
            
    </NavPageContainer>
  )
  }
}

export default Home;
