import React, { useRef } from 'react'
import { NavPageContainer, MenuBar, ButtonGroup, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MenuBarImportCode,MenuBarUsageCode,MenuBarOnClickUsageCode } from './codes'
import PropsView from './props-view'

const MenuBarDocs = () => {

  const anchorRef = useRef(null);
  const anchorRef2 = useRef(null);
  const dialogRef = useRef();
  const dialogRef2 = useRef();
  const sayhellow = () => {alert("clicked")}

  const handleButtonClick = () => {
    dialogRef.current.openDialog();
  };

  const handleButton2Click = () => {
    dialogRef2.current.openDialog();
  };

  return (
    <NavPageContainer
      hasPadding
      animateTransition={false}>
      <h1>MenuBar</h1>
          
      <p>A <span className="ui-color-primary">MenuBar</span> is a graphical control element which contains drop-down menus</p>
    
      <Button
        ref={anchorRef}
        value="Open Menu"
        onClick={handleButtonClick}
        icon={<i className="icons10-plus ui-color-primary"></i>}
      />
      
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
      <h2>MenuBar with <p className="ui-code">CommandBar</p> :</h2>

      <ButtonGroup>
        <Button
          value="New"
          type="subtle"
          icon={<i className="icons10-plus ui-color-primary"></i>}
        />
        <Button
          type="subtle"
          ref={anchorRef2}
          onClick={handleButton2Click}
          icon={<i className="icons10-angle-down"></i>}
        />
      </ButtonGroup>
      <Button
        
        type="subtle"
        value="Upload"
        icon={<i className="icons10-upload ui-color-primary"></i>}
      />
      <Button
        type="subtle"
        value="Share"
        icon={<i className="icons10-share ui-color-primary"></i>}
      />
      <br/><br/>

      <MenuBar
        ref={dialogRef2}
        anchorRef={anchorRef2}>
        <MenuBar.Item label="Instagram" onClick={sayhellow}/>
        <MenuBar.Item.Divider/>
        <MenuBar.Item label="Facebook"/>
        <MenuBar.Item.SubMenu label="Whatsapp">
          <MenuBar.Item label="Hyperlink"/>
        </MenuBar.Item.SubMenu>
        <MenuBar.Item label="Telegram"/>
      </MenuBar>

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

export default MenuBarDocs;