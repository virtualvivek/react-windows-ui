import React from 'react'
import { Button, ButtonFluent, NavPageContainer,
         RegisterFluentEffect } from '../../../lib'

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        stateDisabled: false,
        stateLoading: false
    }
  }

  setDisabled = () => { this.setState({stateLoading: false,stateDisabled: true}) }
  setLoading = () => { this.setState({stateLoading: true,stateDisabled: false}) }
  setRegular = () => { this.setState({stateLoading: false,stateDisabled: false}) }

  render() {

  return (
    <NavPageContainer hasPadding>
      
      <RegisterFluentEffect/>

      <h1>Buttons</h1>

      <h3>States</h3>


        <Button
          value="Button Regular"
          type="primary"
          disabled={this.state.stateDisabled}
          isLoading={this.state.stateLoading}/>

        <span>&nbsp; &nbsp;  set states</span>
        <br/><br/>

        <Button
          value="loading"
          type="primary-outline"
          onClick={this.setLoading}/>

          &nbsp;

        <Button
          value="disabled"
          type="primary-outline"
          onClick={this.setDisabled}/>

          &nbsp;

        <Button
          value="regular"
          type="primary-outline"
          onClick={this.setRegular}/>


        <div className="app-hr"></div>

        <h3>Fluent Hover Effect</h3>
        
        <ButtonFluent
          value="Fluent Button"/>


        <div className="app-hr"></div>
        
        <Button
          value="Default Button"/>
        

        <br/><br/>

        <Button
          icon={<i className="icons10-plus"></i>}
          value="Default Button"/>

        &nbsp;&nbsp;

        <Button
          icon={<i className="icons10-plus"></i>}
          value=""/>

        <br/><br/>

        <Button
          disabled
          value="Disabled Button"/>

        &nbsp;&nbsp;

        <Button
          isLoading
          value="Loading Button"/>

        <br/><br/>

        <Button
          icon={<i className="icons10-plus color-primary"></i>}
          value="Primary Icon"/>

        &nbsp;&nbsp;

        <Button
          width={155}
          textAlign={'start'}
          icon={<i className="icons10-plus color-primary"></i>}
          value="Align Start"/>
       

      <h3 className="m-b-15">Primary</h3>
      
        <Button
          type="primary"
          value="Primary Button"/>

        &nbsp;&nbsp;

        <Button
          type="primary"
          icon={<i className="icons10-fantasy"></i>}
          value="Primary Button"/>

        <br/><br/>

        <Button
          disabled
          type="primary"
          value="Disabled Button"/>

        &nbsp;&nbsp;

        <Button
          type="primary"
          isLoading
          value="Loading Button"/>

        <br/><br/>

        <Button
          type="primary-outline"
          value="Primary Button"
        />

        &nbsp;&nbsp;

        <Button
          type="primary-outline"
          icon={<i className="icons10-fantasy"></i>}
          value="Primary Button"
        />  
      


      <h3 className="m-b-15">Success</h3>

        <Button
          type="success"
          value="Success Button"/>

        &nbsp;&nbsp;

        <Button
          type="success"
          icon={<i className="icons10-checkmark"></i>}
          value="Success Button"/>

        <br/><br/>

        <Button
          type="success-outline"
          value="Success Button"/>

        &nbsp;&nbsp;

        <Button
          type="success-outline"
          icon={<i className="icons10-checkmark"></i>}
          value="Success Button"/>  
      

      <h3 className="m-b-15">Danger</h3>

        <Button
          type="danger"
          value="Danger Button"/>

        &nbsp;&nbsp;

        <Button
          type="danger"
          icon={<i className="icons10-cancel-2"></i>}
          value="Danger Button"/>

        <br/><br/>

        <Button
          type="danger-outline"
          value="Danger Button"/>

        &nbsp;&nbsp;

        <Button
          type="danger-outline"
          icon={<i className="icons10-cancel-2"></i>}
          value="Danger Button"/>  

        <br/><br/><br/><br/>

        </NavPageContainer>
  );
  }
}

export default Buttons