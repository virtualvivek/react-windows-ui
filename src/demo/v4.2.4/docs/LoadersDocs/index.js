import React from 'react'
import { NavPageContainer, LoaderBar, LoaderBusy, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { LoaderBarImportCode, LoaderBusyImportCode,
         LoaderBarUsageCode, LoaderBusyUsageCode } from './codes'
import PropsView from './props-view'

class LoadersDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoaderBar: true,
      showLoaderBusy: true,
    }
  }

  toggleLoaderBar = () => {
    if(this.state.showLoaderBar)
          this.setState({showLoaderBar: false});
    else  this.setState({showLoaderBar: true});
  }

  toggleLoaderBusy = () => {
    if(this.state.showLoaderBusy)
          this.setState({showLoaderBusy: false});
    else  this.setState({showLoaderBusy: true});
  }

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Loaders</h1>
        
    <p>The <span className="ui-color-primary">Loaders</span> are progress view that alerts a user to wait for an activity to complete.</p>

    <h1>LoaderBar</h1>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBarImportCode}
    </SyntaxHighlighter>


    <h2>Usage</h2>

    <LoaderBar
      isLoading={this.state.showLoaderBar}
    />

    <Button
      value="Toggle LoaderBar"
      icon={<i className="icons10-resize-horizontal" ></i>}
      onClick={this.toggleLoaderBar}/><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBarUsageCode}
    </SyntaxHighlighter>

  
    <div className="ui-hr"></div>
    <h1>LoaderBusy</h1>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBusyImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <div className="ui-flex">
      &nbsp;&nbsp;&nbsp;
      <LoaderBusy
        size="large"
        isLoading={this.state.showLoaderBusy}
      />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <LoaderBusy
        isLoading={this.state.showLoaderBusy}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <LoaderBusy
        isLoading={this.state.showLoaderBusy}
        size="small"
      />
    </div>
    <br/><br/>
    <Button
      value="Toggle LoaderBusy"
      icon={<i className="icons10-resize-horizontal"></i>}
      onClick={this.toggleLoaderBusy}
    /><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBusyUsageCode}
    </SyntaxHighlighter>

    <div className="ui-hr"></div>
    <h2>Loaders <p className="ui-code">{`setTheme={"light"}`}</p> :</h2>
    <div className="ui-align-center"
      style={{width:'80%',borderRadius: 12, backgroundColor: "var(--PrimaryColor)"}}>
      <br/><br/>
      <div className="ui-flex">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <LoaderBusy
          setTheme="light"
          isLoading={true}
          size="large"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LoaderBusy
          setTheme="light"
          isLoading={true}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <LoaderBusy
          setTheme="light"
          isLoading={true}
          size="small"/>
      </div>
      <br/><br/>
      <LoaderBar
        setTheme="light"
        isLoading={true}/>
      <br/><br/>
    </div>

    <div className="ui-hr"></div>
    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default LoadersDocs;