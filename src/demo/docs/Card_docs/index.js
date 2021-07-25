import React from 'react'
import { NavPageContainer, Card, Switch, ListItem, Button, LinkCompound } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Img1 from '../../assets/illustration/2.jpg'
import { CardImportCode, CardUsageCode,CardUsageDefaultCode, CardUsageFocusedCode, CardUsageHoverCode } from './codes'
import PropsView from './props-view'

const CardDocs = () => {
  return (
    <NavPageContainer hasPadding animateTransition>
      <h1>Cards</h1>
      <p className="font-size-18px"><span className="color-primary">Cards</span> are surfaces that display content and actions on a single topic.</p>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CardImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CardUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h3 className="m-b-15">Card <p className="app-code">Default</p></h3>

      <Card
        display="flow-root">
        <div className="app-link-compound">
          <img src={Img1} alt="Img" />
          <span>System Settings and preferences</span>
          <p>Customize system controls and more</p>
        </div>
        <Switch />
      </Card>
      <br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CardUsageDefaultCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h3 className="m-b-15">Card <p className="app-code">Hoverable</p></h3>

      <p>This demo also using <span className="color-primary">ListItem</span> as a child to know more view <span className="app-code">listview docs</span> individually.</p>
      <br/>

      <Card
        display="flow-root"
        hoverable
        maxWidth={400}
        padding={10}>
        <ListItem
          title="News"
          subtitle="12.4 MB"
          info="installed"
          borderBottom={false}
        />
        <div style={{float:'right',display:'flex'}}>
          <Button value="Options"/>
          <div className="app-space-10"></div>
          <Button value="Remove"/> 
        </div>
      </Card>
      <br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CardUsageHoverCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h3 className="m-b-15">Card <p className="app-code">Focused</p></h3>

      <p>This demo also using <span className="color-primary">LinkCompound</span> as child to know more view <span className="app-code">linkCompound docs</span> individually.</p>
      <br/>

      <Card
        display="flow-root"
        focused
        maxWidth={400}
        padding={10}>
        <LinkCompound
          to="#"
          title="Notification settings and DND"
          subtitle="Control which app sends you push notification, adjusts timing according to clock"
          icon={<i className="icons10-notification color-primary"></i>}
        />
        <Button
          style={{float:'right',margin:5}}
          value="Edit" />
      </Card>
      <br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {CardUsageFocusedCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsView />


    <br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default CardDocs