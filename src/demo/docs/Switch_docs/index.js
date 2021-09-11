import React from 'react'
import { NavPageContainer, Switch } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SwitchImportCode,SwitchUsageCode,SwitchNoLabelUsageCode } from './codes'
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
      defaultChecked={true}
      labelOn="On"
      labelOff="Off"
      onChange={() => {}}
    />

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
    <h2>Switch <p className="app-code">with no label</p> :</h2>

    <p>To remove label just pass prop <b>labelOn=""</b>:</p>

    <Switch
      defaultChecked={true}
      labelOn=""
      onChange={() => {}}
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
     {SwitchNoLabelUsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default SwitchDocs