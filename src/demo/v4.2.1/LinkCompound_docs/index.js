import React from 'react'
import { NavPageContainer, LinkCompound } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import PropsView from './props-view'
import { LinkImportCode,LinkUsageCode,LinkBorderUsageCode,LinkImageUsageCode } from './codes'
import Img1 from '../../assets/illustration/mountain.jpg'
import Img2 from '../../assets/illustration/macos.jpg'

const LinkCompoundDocs = () => {
  return (
    <NavPageContainer hasPadding>
      <h1>LinkCompound</h1>

      <p><span className="color-primary">LinkCompound</span> are accessible elements used primarily for navigation.<br/>This is a <b>card</b> based component to resemble a hyperlink.</p>
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
        imgSrc={Img1}
        imgAlt="Demo Image"
      />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {LinkImageUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h2>Link <p className="app-code">Type Border</p> :</h2>

      <LinkCompound
        type="border"
        to="#"
        title="Notification settings and DND"
        subtitle="Control which app push notification"
        imgSrc={Img2}
        imgAlt="Demo Image"
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