import React from 'react'
import { NavPageContainer, Button, Alert } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AlertImportCode, AlertUsageCode, AlertLightUsageCode } from './codes'
import PropsView from './props-view'

class AlertDocs extends React.Component {

  state = {
    showAlert: false,
    showAlertLight: false
  }

  toggleAlert = () => {
    if(this.state.showAlert)
            this.setState({showAlert: false});
    else    this.setState({showAlert: true});
  }

  toggleAlertLight = () => {
      if(this.state.showAlertLight)
              this.setState({showAlertLight: false});
      else    this.setState({showAlertLight: true});
  }

  render() {
    return (
    <NavPageContainer hasPadding animateTransition>
      <h1>Alerts</h1>
      <p><span className="color-primary">Alert</span> component is used to interrupt the user with a mandatory confirmation or action.</p>
      <Button
        value="Open Alert Default" 
        onClick={this.toggleAlert}
      />

      <Alert
        isVisible={this.state.showAlert}
        onBackdropPress={this.toggleAlert}
        title="Alert"
        message="This is alert Box.">
          <Alert.Footer>
            <Button
              type="primary"
              value="OK to Close"
              onClick={this.toggleAlert}
            />
          </Alert.Footer>
      </Alert>

      <Alert
        isVisible={this.state.showAlertLight}
        onBackdropPress={this.toggleAlertLight}
        title={<><i className="icons10-sun"></i>Alert</>}
        message={<span>This is Light alert Box. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>}>
          <Alert.Footer>
            <Button
              value="Cancel"
              onClick={this.toggleAlertLight}
            />
            <Button
              type="primary"
              value="Confirm"
              onClick={this.toggleAlertLight}
            />
          </Alert.Footer>
      </Alert>


      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AlertImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AlertUsageCode}
      </SyntaxHighlighter>

      <h2 className="m-tb-20">Alert with multiple buttons.</h2>

      <Button
        value="Open Alert Multi Button"
        onClick={this.toggleAlertLight}
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AlertLightUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsView/>


    <br/><br/><br/><br/><br/>
    </NavPageContainer>
    )
  }
}

export default AlertDocs