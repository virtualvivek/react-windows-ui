import React from 'react'
import { NavPageContainer, LinkCompound } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PropsView from './props-view'
import { LinkImportCode,LinkUsageCode,LinkInlineUsageCode,LinkBorderUsageCode,LinkImageUsageCode } from './codes'
import Img1 from '../../assets/illustration/mountain.jpg'
import Img2 from '../../assets/illustration/macos.jpg'

const LinkCompoundDocs = () => {
  return (
    <NavPageContainer hasPadding>
      <h1>LinkCompound</h1>

      <p><span className="color-primary">LinkCompound</span> are accessible elements used primarily for navigation.<br/>This component is a <b>card</b> based style component to resemble a hyperlink.</p>
      <div className="app-hr"></div>
      
      <LinkCompound
        to="#"
        title="System Settings and preferences"
        subtitle="Customize system controls and more"
        icon={<i className="icons10-timeline"></i>}
      />

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <LinkCompound
        to="#"
        title="Network usage by individual apps"
        subtitle="Display data consumes by installed apps"
        icon={<i className="icons10-area-chart color-primary"></i>}
      /><br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h2>Link with <p className="app-code">Image</p> :</h2>

      <LinkCompound
        to="#"
        title="User preferences and uploads"
        subtitle="Profile pictures and details"
        image={Img1}
        imageAlt="Demo Image"
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkImageUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h2>Link <p className="app-code">Border Style</p> :</h2>

      <LinkCompound
        linkStyle="border"
        to="#"
        title="Notification settings and DND"
        subtitle="Control which app push notification"
        image={Img2}
        imageAlt="Demo Image"
        tooltip="This is tooltip text"
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkBorderUsageCode}
      </SyntaxHighlighter>


      <h2>Props</h2>
      <PropsView />

    <br/><br/><br/><br/><br/>
    </NavPageContainer>
  );
}

export default LinkCompoundDocs