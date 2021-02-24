import React from 'react'
import { Button,NavPageContainer } from '../../../../lib'

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        stateDisabled :false,
        stateLoading :false
    }
  }

  setDisabled = () => { this.setState({stateLoading: false,stateDisabled: true}) }
  setLoading = () => { this.setState({stateLoading: true,stateDisabled: false}) }
  setRegular = () => { this.setState({stateLoading: false,stateDisabled: false}) }

  render() {

  return (
    <NavPageContainer hasPadding>

      <h1>Buttons</h1>

      <h3>States</h3>

        <Button
          value="Button Regular"
          disabled={this.state.stateDisabled}
          isLoading={this.state.stateLoading}/>

        <span>&nbsp; &nbsp;  set states</span>
        <br/><br/>

        <Button
          value="loading"
          type="primary"
          onClick={this.setLoading}/>

          &nbsp;

        <Button
          value="disabled"
          type="primary"
          onClick={this.setDisabled}/>

          &nbsp;

        <Button
          value="regular"
          type="primary"
          onClick={this.setRegular}/>


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
          icon={<i className="icons10-plus accent"></i>}
          value="Accent Icon"/>

        &nbsp;&nbsp;

        <Button
          width={155}
          textAlign={'start'}
          icon={<i className="icons10-plus accent"></i>}
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
      


      <h3 className="m-b-15">Success</h3>

        <Button
          type="success"
          value="Success Button"/>

        &nbsp;&nbsp;

        <Button
          type="success"
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

        <br/><br/><br/><br/>

        </NavPageContainer>
  );
  }
}

export default Buttons