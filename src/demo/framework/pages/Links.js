import React from 'react'
import { Link } from 'react-router-dom'
import { NavPageContainer, LinkCompound,
         LinkCompoundFluent, RegisterFluentEffect,Accordion,TableView , ButtonIcon} from '../../../lib'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'         
import { LinkDefaultCode,LinkCompoundCode,LinkCompoundBorderCode,
         LinkCompoundFluentCode,LinkCompoundImageCode,LinkCompoundIconBGPrimary,
         LinkCompoundIconBGGrey} from './codes/links'

import Img1 from '../../img/illustration/mountain.jpg'

const Links = () => {
  return (
    <NavPageContainer
      hasPadding
      animateTransition>

    <h1>Links</h1>

    {/* Register the fluent effect before using LinkCompoundFluent */}
    <RegisterFluentEffect/>




      <TableView
        columns={[
          {
            'title':'Apple'
          },
          {
            'title':'Orange',
            'showSortIcon': true
          },
          {
            'title':'Actions',
            'showSortIcon': false
          }
        ]}
        rows={[
          [
            'Yed',
            124689325,
            <ButtonIcon
              icon={<i className="icons10-trash"></i>}
              onClick={() => {}}
              tooltip="Delete Row"
            />
          ],
          [
            'Yellow',
            124689389,
          ],
          [
            'Aellow',
            124689381,
          ],
          [
            'Bellow',
            124689388,
          ]
        ]}
      />


      <Link to="#" className="app-link">Default App Link</Link>
      
      <br/><br/>

      <Link to="#" className="app-link"><b>Default Bold App Link</b></Link>

      <br/><br/>
      <Accordion title="💻 Code - Link Default" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkDefaultCode}
        </SyntaxHighlighter>
      </Accordion>
      
      <br/>

      <LinkCompound
        to="#"
        title="System Settings and preferences"
        subtitle="Customize system controls and more"
        icon={<i className="icons10-timeline"></i>}
      />

      <br/><br/>

      <LinkCompound
        to="#"
        title="Network usage by individual apps"
        subtitle="Display data consumes by installed apps"
        icon={<i className="icons10-area-chart color-primary"></i>}
      />

      <br/><br/>
      <Accordion title="💻 Code - Link Compound" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkCompoundCode}
        </SyntaxHighlighter>
      </Accordion>
        
      <h3>Link Style border</h3>

      <LinkCompound
        to="#"
        linkStyle="border"
        title="Notification settings and DND"
        subtitle="Control which app push notification"
        icon={<i className="icons10-notification"></i>}
      />

      <br/><br/>
      <Accordion title="💻 Code - Link Border Style" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkCompoundBorderCode}
        </SyntaxHighlighter>
      </Accordion>

      <h3>Link with Image</h3>

      <LinkCompound
        to="#"
        title="User preferences and uploads"
        subtitle="Profile pictures and details"
        image={Img1}
        imageAlt="Demo Image"
      />

      <br/><br/>
      <Accordion title="💻 Code - Link with Image" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkCompoundImageCode}
        </SyntaxHighlighter>
      </Accordion>


      <h3>Fluent Effect</h3>

      <LinkCompoundFluent
        to="#"
        title="Personalization settings and Colors"
        subtitle="Change theme and colors"
        icon={<i className="icons10-color-palette"></i>}
      />

      <br/><br/>
      <Accordion title="💻 Code - Link Fluent" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkCompoundFluentCode}
        </SyntaxHighlighter>
      </Accordion>
     
      <h3>Link icon bg primary</h3>

      <LinkCompound
        to="#"
        title="Camera settings and preferences"
        subtitle="Modify saturation, filters for the physical camera device"
        icon={<i className="icons10-camera bg-primary"></i>}
      />

      <br/><br/>
      <Accordion title="💻 Code - Link Bg-Primary" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkCompoundIconBGPrimary}
        </SyntaxHighlighter>
      </Accordion>
        
      <h3>Link icon grey</h3>

      <LinkCompound
        to="#"
        title="Add more devices to system"
        subtitle="creating digital utilities for system"
        icon={<i className="icons10-plus bg-grey"></i>}
      />

      <br/><br/>
      <Accordion title="💻 Code - Link Bg-Grey" focused width={320}>
        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          className="code">
          {LinkCompoundIconBGGrey}
        </SyntaxHighlighter>
      </Accordion>
        
      <br/><br/>


    </NavPageContainer>
  )
}

export default Links