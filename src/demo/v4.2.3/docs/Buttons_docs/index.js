import React from 'react'
import { Button, NavPageContainer, ButtonGroup } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ButtonImportCode,ButtonDefaultCode,
         ButtonIconPrimary,ButtonPrimary,ButtonPrimaryOutline,
         ButtonIconCode,ButtonSuccessCode,
         ButtonDangerCode, ButtonTypesCode } from './codes'
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
      animateTransition hasPadding>

      <h1>Buttons</h1>

      <ButtonGroup>
      <Button
          value="Loading"
          type="subtle"
        />
        <Button
          icon={<i className="icons10-share"></i>}
          type="subtle"
        />
      </ButtonGroup>

        <Button
          value="Button Regular"
          type="primary"
          disabled={this.state.stateDisabled}
          isLoading={this.state.stateLoading}
          tooltip="Button tooltip title"/>

        <span>&nbsp; &nbsp; Set state</span>
        <br/><br/>
        <Button
          value="Loading"
          onClick={this.setLoading}
        />
        &nbsp;
        <Button
          value="Disabled"
          onClick={this.setDisabled}
        />
        &nbsp;
        <Button
          value="Regular"
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

        <div className="app-hr"></div>
        <h2>Usage</h2>


        <Button
          value="Default Button"
        />
        &nbsp;&nbsp;
        <Button
          type="primary"
          value="Primary Button"
        />
        &nbsp;&nbsp;
        <Button
          type="subtle"
          value="Subtle Button"
        />
        &nbsp;&nbsp;
        <Button
          type="primary-outline"
          value="Primary Outline Button"
        /><br/><br/>

        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonTypesCode}
        </SyntaxHighlighter>

        <div className="app-hr"></div>

        <h3>Button Default</h3>

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
          icon={<i className="icons10-cross"></i>}
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
        <h1 className="m-b-15">Button as Icon:</h1>

        <Button
          icon={<i className="icons10-home"></i>}
          tooltip="ButtonIcon tooltip title"
        />
        &nbsp;&nbsp;
        <Button
          type="primary"
          icon={<i className="icons10-share"></i>}
        />
        &nbsp;&nbsp;
        <Button
          type="subtle"
          icon={<i className="icons10-plus"></i>}
        />
        &nbsp;&nbsp;
        <Button
          type="primary-outline"
          icon={<i className="icons10-fingerprint"></i>}
        />
        <br/>

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

      </NavPageContainer>
    );
  }
}

export default ButtonsDocs