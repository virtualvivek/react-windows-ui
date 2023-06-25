import React from 'react'
import { NavPageContainer, CommandBar } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CommandBarImportCode,CommandBarUsageCode,
CommandBarButtonUsageCode,CommandBarDropdownUsageCode,CommandBarSplitUsageCode } from './codes'
import PropsView from './props-view'

class CommandBarDocs extends React.Component {

  sayhellow = () =>{alert("clicked")}


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>CommandBar</h1>

    <CommandBar>
      <CommandBar.Button value="New" icon={<i className="icons10-plus color-primary"></i>}/>
      
      <CommandBar.SplitDivider/>

      <CommandBar.Menu menuDirection="leftJustify">
        <CommandBar.MenuItem label="File" icon={<i className="icons10-file"></i>} />
        <CommandBar.MenuItem label="Folder" onClick={() => alert("Hi")} />
        <CommandBar.MenuItemDivider/>
        <CommandBar.MenuItem label="Image" />
        <CommandBar.MenuItem label="Document" />
      </CommandBar.Menu>

      <CommandBar.Button value="Upload" icon={<i className="icons10-upload color-primary"></i>}/>

      <CommandBar.Menu>
        <CommandBar.MenuTrigger>
          <CommandBar.Button value="Share" icon={<i className="icons10-angle-down color-primary"></i>}/>
        </CommandBar.MenuTrigger>
        <CommandBar.MenuItem label="Whatsapp" />
        <CommandBar.MenuItem label="Facebook" />
      </CommandBar.Menu>

    </CommandBar>



    <p><span className="app-color-primary">CommandBar</span> is a surface that houses commands that operate on the content of the window.<br/></p>

  
    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h1>CommandBar as Button</h1>
    <h2>Usage</h2>


    <h2>CommandBar as <p className="app-code">Button</p> :</h2>

    <CommandBar.Button
      value="Upload"
      icon={<i className="icons10-upload color-primary"></i>}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarButtonUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>



    <h2>CommandBar as <p className="app-code">Menu</p> :</h2>

    <p>You can render any components as <b>{`<CommandBar.MenuTrigger>`}</b>.</p>

    <CommandBar.Menu>
      <CommandBar.MenuTrigger>
        <CommandBar.Button value="Share" icon={<i className="icons10-angle-down color-primary"></i>}/>
      </CommandBar.MenuTrigger>
      <CommandBar.MenuItem label="Whatsapp">
        <CommandBar.MenuSubItem label="HyperLink"/>
        {/* <CommandBar.MenuSubItem label="QR Code"/> */}
      </CommandBar.MenuItem>
      <CommandBar.MenuItem label="Facebook" />
    </CommandBar.Menu>

    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarDropdownUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>


    <h2>CommandBar as <p className="app-code">Split Mode</p> :</h2>

    <CommandBar>
      <CommandBar.Button value="New" icon={<i className="icons10-plus color-primary"></i>}/>
      
      <CommandBar.SplitDivider/>
  
      <CommandBar.Menu menuDirection="leftJustify">
        <CommandBar.MenuItem label="File" icon={<i className="icons10-file"></i>} />
        <CommandBar.MenuItem label="Folder" onClick={() => alert("Hi")} />
        <CommandBar.MenuItem label="Image" />
        <CommandBar.MenuItem label="Document" />
      </CommandBar.Menu>
    </CommandBar>
    
  
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarSplitUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>



    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default CommandBarDocs