import React from 'react'
import { NavPageContainer, View,Button } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ViewImportCode,ViewUsageCode } from './codes'
import PropsView from './props-view'

class ViewDocs extends React.Component {

  state = {
    showView: true
  }

  toggleView = () => {
    if(this.state.showView)
            this.setState({showView: false});
    else    this.setState({showView: true});
  }

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={true}>
    <h1>View</h1>

    <View
      isVisible={this.state.showView}
      animationType="fade"
      style={{height:150,width:250,backgroundColor: 'var(--PrimaryColor)',
      justifyContent:'center',alignItems:'center',display:'flex'}}>
      <span style={{fontSize: 28,color:'#fff'}}>View</span>
    </View>

    <br/><Button value="Toggle View" onClick={this.toggleView} />
        
  
    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ViewImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ViewUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
  );
  }
}

export default ViewDocs