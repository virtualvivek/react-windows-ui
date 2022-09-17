import React from 'react'
import { NavPageContainer, Switch } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SwitchImportCode,SwitchUsageCode,SwitchNoLabelUsageCode,
        SwitchLabelFixedWidthUsageCode, SwitchLabelPositionStartUsageCode } from './codes'
import PropsView from './props-view'

class SwitchDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Switch</h1>

    <p>A <span className="color-primary">Switch</span> is a simple component used for activating one of two predefined options. Commonly used as an on/off button.</p>
        
    <Switch
      defaultChecked={true}
      labelOn="On"
      labelOff="Off"
      onChange={() => {}}
    />
    

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SwitchImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <Switch
      labelOn="On"
      labelOff="Off"
      onChange={() => {}}
      labelFixedWidth={50}
      defaultChecked={true}
    />

    &nbsp;&nbsp;&nbsp;&nbsp;

    <Switch
      defaultChecked={true}
      labelOn="Disabled On"
      labelOff=" Disabled Off"
      onChange={() => {}}
      disabled
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {SwitchUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>Switch with <p className="app-code">no label</p> :</h2>

    <p>To remove label just pass prop <b>{'label={false}'}</b>:</p>

    <Switch
      defaultChecked={true}
      label={false}
      onChange={() => {}}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
     {SwitchNoLabelUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>Switch with <p className="app-code">label fixed width</p> :</h2>

    <label class="app-switch">
      <input type="checkbox" checked="checked" />
      <div class="app-switch-view"></div>
      <span class="app-switch-label-end" data-on="On" data-off="Off" style={{width: 150, backgroundColor: "var(--color_link_bg_active)"}}>
      </span>
    </label>
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
     {SwitchLabelFixedWidthUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>
    <h2>Switch with <p className="app-code">label position "start"</p> :</h2>
    <Switch
      onChange={() => {}}
      labelFixedWidth={28}
      labelPosition={"start"}
      defaultChecked={true}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
     {SwitchLabelPositionStartUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default SwitchDocs