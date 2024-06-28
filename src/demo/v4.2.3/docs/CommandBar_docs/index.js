import React from 'react'
import { NavPageContainer, CommandBar } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CommandBarImportCode, CommandBarButtonUsageCode,
        CommandBarDropdownUsageCode, CommandBarSplitUsageCode } from './codes'
import PropsCmdBtn from './props-cmd-btn'
import PropsCmdMenu from './props-cmd-menu'
import PropsCmdMenuTrigger from './props-cmd-menu-trigger'
import PropsCmdMenuItem from './props-cmd-menu-item'

class CommandBarDocs extends React.Component {

  sayhellow = () => { alert("clicked") }

  render() {
    return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>
      <h1>CommandBar</h1>

      <CommandBar>
        <CommandBar.Button value="New" icon={<i className="icons10-plus ui-color-primary"></i>}/>
        
        <CommandBar.SplitDivider/>

        <CommandBar.Menu menuDirection="leftJustify">
          <CommandBar.MenuItem label="File" icon={<i className="icons10-file"></i>} />
          <CommandBar.MenuItem label="Folder" onClick={() => alert("Hi")} />
          <CommandBar.MenuItemDivider/>
          <CommandBar.MenuItem label="Image" />
          <CommandBar.MenuItem label="Document" />
        </CommandBar.Menu>

        <CommandBar.Button value="Upload" icon={<i className="icons10-upload ui-color-primary"></i>}/>

        <CommandBar.Menu>
          <CommandBar.MenuTrigger>
            <CommandBar.Button value="Share" icon={<i className="icons10-angle-down ui-color-primary"></i>}/>
          </CommandBar.MenuTrigger>
          <CommandBar.MenuItem label="Whatsapp" />
          <CommandBar.MenuItem label="Facebook" />
        </CommandBar.Menu>

      </CommandBar>

      <p><span className="ui-color-primary">CommandBar</span> is a surface that houses commands that operate on the content of the window.<br/></p>
    
      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CommandBarImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>
      <div className="ui-hr"></div>

      {/* --------------------------------------------------- */}

      <h1>CommandBar as <p className="ui-code">Menu</p> :</h1>

      <div className="ui-alert-bar alert-secondary" role="alert">
        <div className="ui-alert-bar-content">
          <span>You can render any components as <b>{`<CommandBar.MenuTrigger>`}.</b></span>
        </div>
      </div>
      <br/>

      <CommandBar.Menu>
        <CommandBar.MenuTrigger>
          <CommandBar.Button value="Share" icon={<i className="icons10-angle-down ui-color-primary"></i>}/>
        </CommandBar.MenuTrigger>
        <CommandBar.MenuItem label="Instagram"/>
        <CommandBar.MenuItemDivider/>
        <CommandBar.MenuItem label="Facebook" />
        <CommandBar.MenuItem label="Whatsapp">
          <CommandBar.MenuItem label="HyperLink"/>
          {/* <CommandBar.MenuItem label="QR Code"/> */}
        </CommandBar.MenuItem>
      </CommandBar.Menu>
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CommandBarDropdownUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <h2>CommandBar.<b>Menu</b> :</h2>
      <PropsCmdMenu/>
      <h2>CommandBar.<b>MenuTrigger</b> :</h2>
      <PropsCmdMenuTrigger/>
      <h2>CommandBar.<b>MenuItem</b> :</h2>
      <PropsCmdMenuItem/>
      <div className="ui-hr"></div>

      {/* --------------------------------------------------- */}
    
      <h1>CommandBar as <p className="ui-code">Button</p> :</h1>

      <CommandBar.Button
        value="Upload"
        icon={<i className="icons10-upload ui-color-primary"></i>}
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CommandBarButtonUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsCmdBtn />
      <div className="ui-hr"></div>

      {/* --------------------------------------------------- */}

      <h1>CommandBar as <p className="ui-code">Split Mode</p> :</h1>

      <CommandBar>
        <CommandBar.Button value="New" icon={<i className="icons10-plus ui-color-primary"></i>}/>
        
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

      {/* --------------------------------------------------- */}

      <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
    );
  }
}

export default CommandBarDocs