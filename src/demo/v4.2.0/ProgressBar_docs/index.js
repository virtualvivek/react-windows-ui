import React from 'react'
import { NavPageContainer,ProgressBar,ProgressBarIndeterminate,Button } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ProgressBarImportCode,ProgressBarUsageCode,ProgressBarTitleUsageCode,
        ProgressBarTitleSubtitleUsageCode,ProgressBarIconUsageCode,
        ProgressBarCustomColorUsageCode,ProgressBarCustomHeightUsageCode,
        ProgressBarIndeterminateImportCode,ProgressBarIndeterminateUsageCode } from './codes'
import PropsView from './props-view'

class ProgressBarDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showProgressIndeterminate: true,
      ProgressBar1: 46,
    }
  }

  setProgress2 = () => { this.setState({ProgressBar1:2}) }
  setProgress50 = () => { this.setState({ProgressBar1:50}) }
  setProgress99 = () => { this.setState({ProgressBar1:99}) }

  toggleProgressIndeterminate = () => {
    if(this.state.showProgressIndeterminate)
          this.setState({showProgressIndeterminate: false});
    else  this.setState({showProgressIndeterminate: true});
  }

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>ProgressBar</h1>
        
    <p>A <span className="color-primary">ProgressBar</span> can be used to show a user how far along he/she is in a process</p>

    <h1 className="m-0" style={{fontSize:56}}>
      {this.state.ProgressBar1}%
    </h1>

    <ProgressBar
      setProgress={this.state.ProgressBar1}
      tooltip="ProgressBar tooltip title"/>
    <br/>
    <Button
      value="set 2%"
      onClick={this.setProgress2}/>
      &nbsp;
    <Button
      value="set 50%"
      onClick={this.setProgress50}/>
      &nbsp;
    <Button
      value="set 99%"
      onClick={this.setProgress99}/>
    
    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <ProgressBar
      setProgress={this.state.ProgressBar1}
      tooltip="ProgressBar tooltip title"/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>ProgressBar with <p className="app-code">title</p> :</h2>

    <ProgressBar
      title="Title"
      setProgress={80}/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarTitleUsageCode}
    </SyntaxHighlighter>


    <div className="app-hr"></div>
    <h2>ProgressBar with <p className="app-code">title & subtitle</p> :</h2>

    <ProgressBar
      title="Title"
      subtitle="Subtitle"
      setProgress={46}/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarTitleSubtitleUsageCode}
    </SyntaxHighlighter>


    <div className="app-hr"></div>
    <h2>ProgressBar with <p className="app-code">icon</p> :</h2>

    <ProgressBar
      icon={<i className="icons10-hdd"></i>}
      showIcon={true}
      title="Drive C:"
      subtitle="primary storage"
      setProgress={54}/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarIconUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>ProgressBar with <p className="app-code">custom color</p> :</h2>

    <ProgressBar
      setProgress={29}
      color={"#2C8B2C"}/>
    <br/>
    <ProgressBar
      setProgress={67}
      color={"#C50500"}/>
    <br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarCustomColorUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>ProgressBar with <p className="app-code">custom height</p> :</h2>

    <ProgressBar
      setProgress={29}
      height={15}/>
    <br/>
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarCustomHeightUsageCode}
    </SyntaxHighlighter>


    <div className="app-hr"></div>
    <h1>ProgressBarIndeterminate</h1>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarIndeterminateImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <ProgressBarIndeterminate
      isLoading={this.state.showProgressIndeterminate}/><br/>
    <Button
      value="Toggle Loading"
      icon={<i className="icons10-resize-horizontal"></i>}
      onClick={this.toggleProgressIndeterminate}/><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ProgressBarIndeterminateUsageCode}
    </SyntaxHighlighter>


    <div className="app-hr"></div>
    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
  );
 }
}

export default ProgressBarDocs