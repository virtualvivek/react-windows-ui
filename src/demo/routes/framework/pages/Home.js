import React from 'react'
import {NavPageContainer,Checkbox,Switch,
        InputText,InputSearchBar,
        InputSearchBox,SliderBar,
        RadioButton,SelectBox} from '../../../../lib'

const Home = () => {
  return (
    <NavPageContainer hasPadding>

      <h1 className="m-b-15">Form Elements</h1>

        <h3 className="m-b-15">Switch</h3>
            
          <div className="app-flex">
                
            <Switch
              defaultChecked/>

            <Switch
              defaultChecked
              disabled
              textOn="Disabled On"
              textOff="Disabled Off" /> 
                
            </div>

            <p className="m-b-15"></p>

            <div className="app-flex">
                
              <Switch
                defaultChecked={false}/>

              <Switch
                defaultChecked={false}
                disabled
                textOn="Disabled On"
                textOff="Disabled Off" /> 
                
            </div>

          <h3 className="m-b-15">SliderBar</h3>

            <SliderBar 
              value={50} />
            
            <SliderBar 
              value={140}
              thumbStyle="round"/>

            <SliderBar 
              value={256}
              thumbStyle="round-border"/>


          <h3 className="m-b-15">Checkbox</h3>

            <div className="app-flex">

              <Checkbox
                defaultChecked={true} />
              <div className="app-hr-space" s='40'></div>
              <Checkbox 
                disabled={true}
                defaultChecked={true}
                text="Disabled Checked"/>

            </div>

            <p className="m-b-20"></p>

            <div className="app-flex">

              <Checkbox
                defaultChecked={false}
                text="Unchecked" />
              <div className="app-hr-space" s='20'></div>
              <Checkbox 
                disabled={true}
                defaultChecked={false}
                text="Disabled Unchecked"/>

            </div>

            <br></br>
            <h2 className="m-b-15">Inputs</h2>
               
              <InputText 
                placeholder="Enter a text"/>

              <br/><br/>

              <InputText 
                type="password"
                placeholder="Enter a password"/>

              <br/><br/>

              <InputSearchBar 
                placeholder="Search here"/>

              <br/><br/>

              <InputSearchBox 
                placeholder="Enter to Search"/>

              <br/><br/>

                <SelectBox
                  data={[
                    {label: '1', value: 'red'},
                    {label: '2', value: 'blue'},
                    {label: '3', value: 'green'},
                    {label: '4', value: 'pink'},
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

export default Home;
