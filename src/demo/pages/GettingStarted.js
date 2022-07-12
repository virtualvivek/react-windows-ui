import React from 'react'
import { NavPageContainer, LinkCompound, Link } from '../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppConfigCSSDefault } from './codes/gettingStarted'

const GettingStarted = () => {

  return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1>GettingStarted</h1>
      <p>Select <b>windows-ui cra-template</b> to initial your project.</p>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {`npx create-react-app [my-app-name] --template windows-ui`}
      </SyntaxHighlighter>

      <p>View cra-template online <Link to="/boilerplate_external">template windows-ui</Link>.</p>

      <h1>app-config.css</h1>
      <p>By default below <span className='app-code'>app-config.css</span> file is used by the app.</p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AppConfigCSSDefault}
      </SyntaxHighlighter>

      <br/><p>If you want to use your own <b>primary color</b> or <b>font-family</b>,
      <br/>Create a new <span className='app-code'>app-config.css</span> and update import file below:</p>
      <p><b>app/src/index.js</b></p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {`import "react-windows-ui/config/app-config.css";`}
      </SyntaxHighlighter>

      
      
    
      <h1>Structure</h1>
         
        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AppJsDefault"
          title="App.js"
          subtitle="Default App.js Configuration"
          icon={<i className="icons10-bag"></i>}
          focused={true} />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AppJsSearchable"
          title="App.js"
          subtitle="With Searchable NavItems"
          icon={<i className="icons10-list-search"></i>}
          focused={true}
          margin="5px 5px 0 0" />
        <br/>
        <div className="app-hr"></div>
        
        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/PageJsDefault"
          title="Page.js"
          subtitle="Default Page.js configuration"
          icon={<i className="icons10-window"></i>}
          focused={true} />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/PageJsSplit"
          title="Page.js"
          subtitle="With Split Page Inner and Right"
          icon={<i className="icons10-columns"></i>}
          focused={true} />


      <h1>Layouts</h1>

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/AboutLayout"
          title="About"
          subtitle="App installed information"
          icon={<i className="icons10-info"></i>}
          focused={true}
          margin="5px 5px 0 0" />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/LoginLayout"
          title="Login"
          subtitle="User Login in interface"
          icon={<i className="icons10-lock"></i>}
          focused={true} />

        <LinkCompound
          style={{margin:'5px 5px 0 0',width:240}}
          to="/BlogLayout"
          title="Blog Layout"
          subtitle="Article layout demonstration"
          icon={<i className="icons10-create-new"></i>}
          focused={true} />

        <LinkCompound
          to="/ContactsLayout"
          title="Contact Book"
          subtitle="ListView of users"
          icon={<i className="icons10-contact-book"></i>}
          focused={true}
          style={{margin:'5px 5px 0 0',width:240}} />


    <br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
}

export default GettingStarted