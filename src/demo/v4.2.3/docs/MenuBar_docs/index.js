import React, { useRef } from 'react'
import { NavPageContainer, MenuBar } from '../../_lib'
import MenuBary from '../../../../lib/src/components/MenuBary'
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
        
    <p>A <span className="app-color-primary">MenuBar</span> is a graphical control element which contains drop-down menus</p>

    <MenuBar
      label="Select a fruit"
      data={[
        {label: 'apple', link: '#', icon:<i className="icons10-camera"></i>},
        {label: 'orange', link: '#',onClick:sayhellow},
        {label: 'banana', link: '#'},
        {label: 'peach', link: '#'},
        ]}
    />

    <button onClick={handleButtonClick} ref={anchorRef}>Hi</button>
    <MenuBary.Dialog
      ref={dialogRef}
      anchorRef={anchorRef}>
      <h1>Hi</h1>
      <MenuBary.List>
        <MenuBary.ListItem title="Hi"/>
        <MenuBary.Divider/>
        <MenuBary.ListItem title="Hi"/>
      </MenuBary.List>
    </MenuBary.Dialog>
    
    
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
    <h2>MenuBar with <p className="app-code">onClick Listener</p> :</h2>

    <MenuBar
      label="Select a fruit"
      showSearchBar={true}
      data={[
        {label: 'apple', icon:<i className="icons10-camera"></i>},
        {label: 'orange', onClick:sayhellow},
        {label: 'banana', onClick:sayhellow},
        {label: 'peach', onClick:sayhellow},
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

export default MenuBarDocs