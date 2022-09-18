import React from 'react'
import { Button, ButtonIcon, NavPageContainer,NavPageContainerInner } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ButtonImportCode,ButtonAsIconCode,ButtonIconImportCode,ButtonDefaultCode,
         ButtonIconPrimary,ButtonPrimary,ButtonPrimaryOutline,
         ButtonIconCode,ButtonSuccessCode,
         ButtonDangerCode } from './codes'
import PropsView from './props-view'

class ButtonsDocs extends React.Component {

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
    <NavPageContainer
      animateTransition>

    <NavPageContainerInner>

      <h1>Buttons</h1>

      <h3>States</h3>
        <Button
          value="Button Regular"
          type="primary"
          disabled={this.state.stateDisabled}
          isLoading={this.state.stateLoading}
          tooltip="Button tooltip title"/>

        <span>&nbsp; &nbsp;  set states</span>
        <br/><br/>

        <Button
          value="loading"
          type="primary-outline"
          onClick={this.setLoading}
        />
          &nbsp;
        <Button
          value="disabled"
          type="primary-outline"
          onClick={this.setDisabled}
        />
          &nbsp;
        <Button
          value="regular"
          type="primary-outline"
          onClick={this.setRegular}
        />

        <div className="app-hr"></div>

        <h2>Import</h2>

        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonImportCode}
        </SyntaxHighlighter>

        <h2>Usage</h2>

        <Button
          value="Default Button"
        />
        <br/><br/>

        <Button
          icon={<i className="icons10-plus"></i>}
          value="Default Button"
        />
        <br/><br/>

        <Button
          disabled
          value="Disabled Button"
        />
        &nbsp;&nbsp;
        <Button
          isLoading
          value="Loading Button"
        />
        <br/><br/>

        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonDefaultCode}
        </SyntaxHighlighter>

        <h2>Button as only Icon:</h2>

        <Button
          icon={<i className="icons10-plus"></i>}
          value=""
        />
        &nbsp;&nbsp;
        <Button
          icon={<i className="icons10-controller"></i>}
          value=""
        />
        <br/><br/>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonAsIconCode}
        </SyntaxHighlighter>
       
      
        <div className="app-hr"></div>
        <h2 className="m-t-15">Button icon primary:</h2>

        <Button
          icon={<i className="icons10-plus color-primary"></i>}
          value="Primary Icon"
        />
        &nbsp;&nbsp;
        <Button
          width={155}
          justifyContent={'start'}
          icon={<i className="icons10-plus color-primary"></i>}
          value="Align Start"
        />

        <br/><br/>
        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonIconPrimary}
        </SyntaxHighlighter>
        
       
        <div className="app-hr"></div>
        <h2>Button <p className="app-code">Primary</p>:</h2>
      
        <Button
          type="primary"
          icon={<i className="icons10-fantasy"></i>}
          value="Primary Button"
        />
        &nbsp;&nbsp;
        <Button
          type="primary"
          isLoading
          value="Loading Button"
        />
        <br/><br/>
        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonPrimary}
        </SyntaxHighlighter>
       
        <div className="app-hr"></div>
        <h2>Button <p className="app-code">Primary Outline</p>:</h2>

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
        <br/><br/>
      
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonPrimaryOutline}
        </SyntaxHighlighter>

        <div className="app-hr"></div>
        <h2 className="m-b-15">Button Success</h2>

        <Button
          type="success"
          value="Success Button"
        />
        &nbsp;&nbsp;
        <Button
          type="success-outline"
          icon={<i className="icons10-checkmark"></i>}
          value="Success Button"
        />
        <br/><br/>
        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonSuccessCode}
        </SyntaxHighlighter>
       
      
        <div className="app-hr"></div>
        <h2 className="m-b-15">Button Danger</h2>

        <Button
          type="danger"
          value="Danger Button"
        />
        &nbsp;&nbsp;
        <Button
          type="danger-outline"
          icon={<i className="icons10-cancel-2"></i>}
          value="Danger Button"
        />        
        <br/><br/>

        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonDangerCode}
        </SyntaxHighlighter>


        <div className="app-hr"></div>
        <h1 className="m-b-15">Button Icon</h1>

        <ButtonIcon
          icon={<i className="icons10-home"></i>}
          tooltip="ButtonIcon tooltip title" />
        <ButtonIcon
          icon={<i className="icons10-share"></i>} />
        <ButtonIcon
          icon={<i className="icons10-add"></i>} />
        <ButtonIcon
          icon={<i className="icons10-fingerprint"></i>} />
        <br/>

        <h2>Import</h2>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonIconImportCode}
        </SyntaxHighlighter>

        <h2>Usage</h2>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonIconCode}
        </SyntaxHighlighter>

        <div className="app-hr"></div>

        <h2>Props</h2>
        <PropsView/>


        <br/><br/><br/><br/>
      </NavPageContainerInner>

      </NavPageContainer>
    );
  }
}

export default ButtonsDocs