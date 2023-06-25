import React from 'react'
import { NavPageContainer, LoaderBar, LoaderBusy, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { LoaderBarImportCode,LoaderBusyImportCode,LoaderBarUsageCode,
LoaderBusyUsageCode,LoaderBusyFullscreenUsageCode,LoaderBusyFullscreenCustomUsageCode } from './codes'
import PropsView from './props-view'

class LoadersDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoaderBusyFull: false,
      showLoaderBusyFullCustom: false,
      showLoaderBar: true,
      showLoaderBusy: true,
    }
  }

  toggleLoaderBar = () => {
    if(this.state.showLoaderBar)
          this.setState({showLoaderBar: false});
    else  this.setState({showLoaderBar: true});
  }

  toggleLoaderBusyFull = () => {
    if(this.state.showLoaderBusyFull)
          this.setState({showLoaderBusyFull: false});
    else  this.setState({showLoaderBusyFull: true});
  }

  toggleLoaderBusyFullCustom = () => {
    if(this.state.showLoaderBusyFullCustom)
          this.setState({showLoaderBusyFullCustom: false});
    else  this.setState({showLoaderBusyFullCustom: true});
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
        
    <p>The <span className="app-color-primary">Loaders</span> are progress view that alerts a user to wait for an activity to complete.</p>

    <h2>LoaderBar</h2>

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

  
    <div className="app-hr"></div>
    <h2>LoaderBusy</h2>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBusyImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <div className="app-flex">
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

  
    <div className="app-hr"></div>
    <h2>LoaderBusy <p className="app-code">Overlay</p> :</h2>

    <LoaderBusy
      isLoading={this.state.showLoaderBusyFull}
      onBackdropPress={this.toggleLoaderBusyFull}
      display="overlay"
    />
    <Button
      value="Open overlay Loader"
      onClick={this.toggleLoaderBusyFull}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBusyFullscreenUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>LoaderBusy <p className="app-code">Overlay</p>&nbsp;<p className="app-code">Custom Background Color</p> :</h2>

    <LoaderBusy
      isLoading={this.state.showLoaderBusyFullCustom}
      onBackdropPress={this.toggleLoaderBusyFullCustom}
      display="overlay"
      backgroundColor="var(--PrimaryColor)"
      setTheme="light"
      title="Tap anywhere to dismiss"
    />
    <Button
      value="Open custom overlay loader" 
      onClick={this.toggleLoaderBusyFullCustom}
    /><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBusyFullscreenCustomUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>Loaders <p className="app-code">{`setTheme={'light'}`}</p> :</h2>
    <div className="app-align-center"
      style={{width:'80%',borderRadius: 12, backgroundColor: "var(--PrimaryColor)"}}>
      <br/><br/>
      <div className="app-flex">
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

    <div className="app-hr"></div>
    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default LoadersDocs