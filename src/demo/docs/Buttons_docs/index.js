import React, {createRef} from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonFluent,ButtonIcon, NavPageContainer,NavPageContainerInner,
         RegisterFluentEffect, NavPageContainerRight } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ButtonImportCode,ButtonIconImportCode,ButtonDefaultCode,
         ButtonIconPrimary,ButtonPrimary,ButtonPrimaryOutline,
         ButtonIconCode,ButtonSuccessCode,
         ButtonDangerCode,ButtonFluentCode } from './codes'
import PropsView from './props-view'

class ButtonsDocs extends React.Component {

  constructor(props) {
    super(props);
    this.scrollButtonPrimaryIcon = createRef();
    this.scrollButtonPrimary = createRef();
    this.scrollButtonPrimaryOutline = createRef();
    this.scrollButtonSuccess = createRef();
    this.scrollButtonDanger = createRef();
    this.scrollButtonIcon = createRef();
    this.scrollButtonFluent = createRef();
    this.scrollProps = createRef();

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
      
      <RegisterFluentEffect/>

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
          onClick={this.setLoading} />
          &nbsp;
        <Button
          value="disabled"
          type="primary-outline"
          onClick={this.setDisabled} />
          &nbsp;
        <Button
          value="regular"
          type="primary-outline"
          onClick={this.setRegular}/>


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
          value="Disabled Button" />
        &nbsp;&nbsp;
        <Button
          isLoading
          value="Loading Button" />

        <br/><br/>

        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonDefaultCode}
        </SyntaxHighlighter>
       
      
        <div className="app-hr" ref={this.scrollButtonPrimaryIcon}></div>
        <h2 className="m-t-15">Button icon primary :</h2>

        <Button
          icon={<i className="icons10-plus color-primary"></i>}
          value="Primary Icon"/>
        &nbsp;&nbsp;
        <Button
          width={155}
          textAlign={'start'}
          icon={<i className="icons10-plus color-primary"></i>}
          value="Align Start"/>

        <br/><br/>
        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonIconPrimary}
        </SyntaxHighlighter>
        
       
      <div className="app-hr" ref={this.scrollButtonPrimary}></div>
      <h2>Button <p className="app-code">Primary</p> :</h2>
      
        <Button
          type="primary"
          icon={<i className="icons10-fantasy"></i>}
          value="Primary Button" />
        &nbsp;&nbsp;
        <Button
          type="primary"
          isLoading
          value="Loading Button" />  

        <br/><br/>
        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonPrimary}
        </SyntaxHighlighter>
       
        <div className="app-hr" ref={this.scrollButtonPrimaryOutline}></div>
        <h2>Button <p className="app-code">Primary Outline</p> :</h2>

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

        <div className="app-hr" ref={this.scrollButtonSuccess}></div>
        <h2 className="m-b-15">Button Success</h2>

        <Button
          type="success"
          value="Success Button"/>
        &nbsp;&nbsp;
        <Button
          type="success-outline"
          icon={<i className="icons10-checkmark"></i>}
          value="Success Button"/>
        <br/><br/>
        
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonSuccessCode}
        </SyntaxHighlighter>
       
      
      <div className="app-hr" ref={this.scrollButtonDanger}></div>
      <h2 className="m-b-15">Button Danger</h2>

      <Button
        type="danger"
        value="Danger Button"/>
      &nbsp;&nbsp;
      <Button
        type="danger-outline"
        icon={<i className="icons10-cancel-2"></i>}
        value="Danger Button"/>        
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        className="code code-container">
        {ButtonDangerCode}
      </SyntaxHighlighter>
       
       


      <div className="app-hr" ref={this.scrollButtonIcon}></div>
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
    
      
        <div className="app-hr" ref={this.scrollButtonFluent}></div>
        <h1>Button Fluent Hover Effect</h1>
        
        <ButtonFluent
          value="Fluent Button"/>

        <br/>
        <h2>Usage</h2>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="code code-container">
          {ButtonFluentCode}
        </SyntaxHighlighter>
       

        <div className="app-hr" ref={this.scrollProps}></div>

        <h2>Props</h2>
        <PropsView/>

      

        <br/><br/><br/><br/>
      </NavPageContainerInner>

      <NavPageContainerRight position="fixed">
      
      <h4 className="m-0"><b>On This Page</b></h4>
      <h4 className="m-tb-10">Buttons</h4>
    
      <Link
        onClick={()=>{this.scrollButtonPrimaryIcon.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Button icon primary</Link><br/>
      <Link
        onClick={()=>{this.scrollButtonPrimary.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Button primary</Link><br/>
      <Link
        onClick={()=>{this.scrollButtonPrimaryOutline.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Button primary outline</Link><br/>
      <Link
        onClick={()=>{this.scrollButtonSuccess.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Button success</Link><br/>
      <Link
        onClick={()=>{this.scrollButtonDanger.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Button danger</Link><br/>
  
      <h4 className="m-tb-10">ButtonIcon</h4>
      <Link
        onClick={()=>{this.scrollButtonIcon.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Usage</Link><br/>

      <h4 className="m-tb-10">ButtonFluent</h4>
      <Link
        onClick={()=>{this.scrollButtonFluent.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">&nbsp; Usage</Link><br/>

      
      <Link
        onClick={()=>{this.scrollProps.current.scrollIntoView({ behavior:'smooth'});}}
        className="app-link">
          <h4 className="m-tb-10"><b>Props</b></h4>
      </Link><br/>
      
      </NavPageContainerRight>

      </NavPageContainer>
    );
  }
}

export default ButtonsDocs