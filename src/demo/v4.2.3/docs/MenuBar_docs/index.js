import React, { useRef } from 'react'
import { NavPageContainer, MenuBar, ButtonGroup, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MenuBarImportCode,MenuBarUsageCode,MenuBarOnClickUsageCode } from './codes'
import PropsView from './props-view'

const MenuBarDocs = () => {

  const anchorRef = useRef(null);
  const dialogRef = useRef();
  const sayhellow = () => {alert("clicked")}

  const handleButtonClick = () => {
    dialogRef.current.openDialog();
  };

  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>MenuBar</h1>
        
    <p>A <span className="ui-color-primary">MenuBar</span> is a graphical control element which contains drop-down menus</p>

    <button onClick={handleButtonClick} ref={anchorRef}>Hi</button>
    
    <MenuBar
      ref={dialogRef}
      anchorRef={anchorRef}>
      <MenuBar.Item label="Instagram" onClick={sayhellow}/>
      <MenuBar.Item.Divider/>
      <MenuBar.Item label="Facebook"/>
      <MenuBar.Item.SubMenu label="Whatsapp">
        <MenuBar.Item label="Hyperlink"/>
      </MenuBar.Item.SubMenu>
      <MenuBar.Item label="Telegram"/>
    </MenuBar>
    
    
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

  
    <div className="ui-hr"></div>
    <h2>MenuBar as <p className="ui-code">CommandBar</p> :</h2>

    <ButtonGroup>
      <Button
        value="New"
        type="subtle"
        icon={<i className="icons10-plus ui-color-primary"></i>}
      />
      <Button
        icon={<i className="icons10-angle-down"></i>}
        type="subtle"
      />
    </ButtonGroup>
    <Button
      value="Upload"
      type="subtle"
      icon={<i className="icons10-upload ui-color-primary"></i>}
    />
    <Button
      value="Upload"
      type="subtle"
      icon={<i className="icons10-share ui-color-primary"></i>}
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

export default MenuBarDocs