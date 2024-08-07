import React from 'react';
import { NavPageContainer, Button, Link } from '../../_lib';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TextHeadingCode, TextHeadingNoMgBottomCode,TextVarientsCode, TextVarientLightCode, ForegroundContainerCode } from './codes';
import { lib_version } from '../../values';

class ClassesDocs extends React.Component {
  render() {
    return (
      <NavPageContainer
        hasPadding
        animateTransition>
            
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
        <h4>Heading4</h4>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {TextHeadingCode}
        </SyntaxHighlighter>
            
        <div className="app-hr"></div>
        <h2>Margin Notation</h2>

        <ul className="app-ul-content">
          <li><span className='app-code'>.app-m-0</span> - class that set margin=0</li>
          <li><span className='app-code'>.app-mt-0</span> - class that set margin-top=0</li>
          <li><span className='app-code'>.app-mb-0</span> - class that set margin-bottom=0</li>
          <li><span className='app-code'>.app-mt-10</span> - class that set margin-top=10</li>
          <li><span className='app-code'>.app-mb-10</span> - class that set margin-bottom=10</li>
          <li><span className='app-code'>.app-mt-15</span> - class that set margin-top=15</li>
          <li><span className='app-code'>.app-mb-15</span> - class that set margin-bottom=15</li>
          <li><span className='app-code'>.app-mt-20</span> - class that set margin-top=20</li>
          <li><span className='app-code'>.app-mb-20</span> - class that set margin-bottom=20</li>
        </ul>

        <h3 className="app-m-0">Example Heading with no margin bottom.</h3>

        <h2 className="app-mb-0">Heading Text</h2>
        
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {TextHeadingNoMgBottomCode}
        </SyntaxHighlighter>
        
        <h2>Paragraph varients</h2>
        <p>This is paragraph used to display long text.</p>
        <p className="color-success">This is success paragraph used to display success text.</p>
        <p className="color-danger">This is danger paragraph used to display danger text.</p>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {TextVarientsCode}
        </SyntaxHighlighter>
        
        <h3>Text Light</h3>
        <p className="app-para-light">This is light paragraph used to display long text.</p>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {TextVarientLightCode}
        </SyntaxHighlighter>

      
        <div className="app-hr"></div>

        <h2>Foreground Container</h2>
        <p>Shows a foreground container.<br/>It's a windows 11 feature so styles apply only on win11-ui and shows a default view on win10-ui.</p>
        <div className="app-section-container-fg">
          <Button/>
          <p>You content here.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <br/>
        <Link to={`/v${lib_version}/fg_cntr_demo`}><b>See Usage.</b></Link>
        <br/>
        <br/>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {ForegroundContainerCode}
        </SyntaxHighlighter>

        <br/><br/><br/><br/><br/><br/>

      </NavPageContainer>
    );
  }
}

export default ClassesDocs;