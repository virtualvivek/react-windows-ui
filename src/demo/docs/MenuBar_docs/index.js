import React from 'react'
import { NavPageContainer, MenuBar } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MenuBarImportCode,MenuBarUsageCode,MenuBarOnClickUsageCode } from './codes'
import PropsView from './props-view'

class MenuBarDocs extends React.Component {

  sayhellow = () =>{alert("clicked")}

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>MenuBar</h1>
        
    <p>A <span className="color-primary">MenuBar</span> is a graphical control element which contains drop-down menus</p>

    <MenuBar
      label="Select a fruit"
      data={[
        {label: 'apple', link: '#', icon:<i className="icons10-camera"></i>},
        {label: 'orange', link: '#',onClick:this.sayhellow},
        {label: 'banana', link: '#'},
        {label: 'peach', link: '#'},
        ]}
    />
    
    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {MenuBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {MenuBarUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>MenuBar with <p className="app-code">onClick Listner</p> :</h2>

    <MenuBar
      label="Select a fruit"
      data={[
        {label: 'apple', icon:<i className="icons10-camera"></i>},
        {label: 'orange', onClick:this.sayhellow},
        {label: 'banana', onClick:this.sayhellow},
        {label: 'peach', onClick:this.sayhellow},
      ]}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {MenuBarOnClickUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default MenuBarDocs