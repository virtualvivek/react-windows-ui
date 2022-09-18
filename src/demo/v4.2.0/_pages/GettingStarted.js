import React from 'react'
import { NavPageContainer, Link } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AppConfigCSSDefault } from './codes/gettingStarted'

const GettingStarted = () => {

  return (
    <NavPageContainer
      hasPadding
      animateTransition>

      <h1>GettingStarted</h1>
      <p>Select <b>windows-ui cra-template</b> to initialize your project.</p>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {`npx create-react-app MyAppName --template windows-ui`}
      </SyntaxHighlighter>

      

      <h2>app-config.css</h2>
      <p>By default below <span className='app-code'>app-config.css</span> file is used by the app.</p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AppConfigCSSDefault}
      </SyntaxHighlighter>

      <br/><p>If you want to use your own <b>primary color</b> or <b>font-family</b>,
      <br/>Create a new <span className='app-code'>app-config.css</span> and <span className='app-code'>update</span> import file below:</p>
      <p><b>app/src/index.js</b></p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {`import "react-windows-ui/config/app-config.css";`}
      </SyntaxHighlighter>

      
      <p>View boilerplate online
        <a className="app-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/virtualvivek/react-windows-ui-boilerplate">&nbsp;boilerplate windows-ui
        </a>.
      </p>
    
      <h1>Structure</h1>

      <div className='app-code' style={{whiteSpace: "pre-line", lineHeight: "normal", padding:"10px 40px 15px 20px"}}>
        ./src<br/>
          │ &nbsp; ├─ <Link to="AppJsDefault">App.js (Default)</Link> / <Link to="AppJsSearchable">App.js (Searchable)</Link><br/>
          │ &nbsp; └─ index.js<br/>
          └─ pages/<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├─ <Link to="PageJsDefault">Page1.js (Default)</Link><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├─ <Link to="PageJsSplit">Page2.js (Split View)</Link><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └─ PageN.js<br/>
      </div>
      <br/><br/>


    <br/><br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
}

export default GettingStarted