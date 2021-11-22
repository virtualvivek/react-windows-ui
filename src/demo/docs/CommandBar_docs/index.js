import React from 'react'
import { NavPageContainer,CommandBar,CommandBarButton } from '../../../lib/src'
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

      <CommandBarButton
        value="New"
        onClick={()=>{}}
        icon={<i className="icons10-plus color-primary"></i>}
        data={[
          {label: 'file', link: '#', icon: <i className="icons10-file"></i>},
          {label: 'folder', link: '#',onClick: this.sayhellow},
          {label: 'image', link: '#'},
          {label: 'document', link: '#'},
        ]}
      />

      <CommandBarButton
        value="Upload"
        icon={<i className="icons10-upload color-primary"></i>}
        onClick={()=>{}}
      />

      <CommandBarButton
        value="Share"
        data={[
          {label: 'Whatsapp', link: '#', icon: <i className="icons10-share"></i>},
          {label: 'Facebook', onClick: this.sayhellow},
          {label: 'Instagram', link: '#'},
          {label: 'Telegram', onClick: this.sayhellow},
        ]}
      />
    </CommandBar>

    <p><span className="color-primary">CommandBar</span> is a surface that houses commands that operate on the content of the window.<br/>
    It binds <span className="color-primary">CommandBarButton</span> to form layout of options including dropdowns and buttons.</p>

    <p>However you can use <span className="color-primary">CommandBarButton</span> independently anywhere in the app you want.</p>

  
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
    <h2>CommandBarButton <p className="app-code">usage</p> :</h2>
    <p>You can provide <b>onClick</b> listener to make it as a regular button or if 
    you provide <br/><b>data</b> it work as a dropdown & if provide both <b>onClick</b> along with <b>data </b>
    it works as a split button.</p>

    <br/><p><b>data prop: </b>You can either provide <b>onClick</b> or <b>link</b> prop to the <b>data</b> items as per your reqirements. </p>


    <h2>CommandBarButton as <p className="app-code">button</p> :</h2>

    <CommandBarButton
      value="Upload"
      icon={<i className="icons10-upload color-primary"></i>}
      onClick={()=>{}}
    /><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarButtonUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>



    <h2>CommandBarButton as <p className="app-code">dropdown</p> :</h2>

    <CommandBarButton
      value="Share"
      icon={<i className="icons10-share color-primary"></i>}
      data={[
        {label: 'Whatsapp', link: '#', icon: <i className="icons10-share"></i>},
        {label: 'Facebook', onClick: this.sayhellow},
        {label: 'Instagram', link: '#'},
        {label: 'Telegram', onClick: this.sayhellow},
      ]}
    /><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarDropdownUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>


    <h2>CommandBarButton as <p className="app-code">split mode</p> :</h2>

    <CommandBarButton
      value="New"
      onClick={()=>{}}
      icon={<i className="icons10-plus color-primary"></i>}
      data={[
        {label: 'file', link: '#', icon: <i className="icons10-file"></i>},
        {label: 'folder', link: '#',onClick: this.sayhellow},
        {label: 'image', link: '#'},
        {label: 'document', link: '#'},
      ]}
    /><br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {CommandBarSplitUsageCode}
    </SyntaxHighlighter>
    <div className="app-hr"></div>




    <h2>Props : CommandBarButton</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default CommandBarDocs