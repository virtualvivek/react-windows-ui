import React from 'react'
import { NavPageContainer, LoaderBar, LoaderBusy, Button } from '../../../lib/src'
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
        
    <p>The <span className="color-primary">Loaders</span> are progress view that alerts a user to wait for an activity to complete.</p>

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
      <div className="app-space-10"></div>
      <LoaderBusy
        isLoading={this.state.showLoaderBusy}
      />
      <div className="app-space-45"></div>
      <LoaderBusy
        isLoading={this.state.showLoaderBusy}
        size="medium"
      />
      <div className="app-space-35"></div>
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
    <h2>LoaderBusy <p className="app-code">Fullscreen</p> :</h2>

    <LoaderBusy
      isLoading={this.state.showLoaderBusyFull}
      onBackdropPress={this.toggleLoaderBusyFull}
      display="fullscreen"
    />
    <Button
      value="Open fullscreen Loader"
      onClick={this.toggleLoaderBusyFull}
    /><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {LoaderBusyFullscreenUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>LoaderBusy <p className="app-code">Fullscreen Custom Background Color</p> :</h2>

    <LoaderBusy
      isLoading={this.state.showLoaderBusyFullCustom}
      onBackdropPress={this.toggleLoaderBusyFullCustom}
      display="fullscreen"
      backgroundColor="var(--PrimaryColor)"
      setTheme="light"
      title="Tap anywhere to dismiss"
    />
    <Button
      value="Open Custom fullscreen Loader" 
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
    <div className="app-align-center background-color-primary"
      style={{width:'80%',borderRadius:12}}>
      <br/><br/>
      <div className="app-flex">
      <div className="app-space-45"></div>
        <LoaderBusy
          setTheme="light"
          isLoading={true}/>
        <div className="app-space-45"></div>
        <LoaderBusy
          setTheme="light"
          isLoading={true}
          size="medium"/>
        <div className="app-space-35"></div>
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