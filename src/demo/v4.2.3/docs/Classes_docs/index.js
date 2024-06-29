import React from 'react';
import { NavPageContainer } from '../../_lib';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TextHeadingCode,TextVarientsCode } from './codes';

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
            
        <div className="ui-hr"></div>

        {/* <h2>Margin Notation</h2>

        <ul className="ui-ul-content">
          <li><span className='ui-code'>.ui-m-0</span> - class that set margin=0</li>
          <li><span className='ui-code'>.ui-mt-0</span> - class that set margin-top=0</li>
          <li><span className='ui-code'>.ui-mb-0</span> - class that set margin-bottom=0</li>
          <li><span className='ui-code'>.ui-mt-10</span> - class that set margin-top=10</li>
          <li><span className='ui-code'>.ui-mb-10</span> - class that set margin-bottom=10</li>
          <li><span className='ui-code'>.ui-mt-15</span> - class that set margin-top=15</li>
          <li><span className='ui-code'>.ui-mb-15</span> - class that set margin-bottom=15</li>
          <li><span className='ui-code'>.ui-mt-20</span> - class that set margin-top=20</li>
          <li><span className='ui-code'>.ui-mb-20</span> - class that set margin-bottom=20</li>
        </ul>

        <h3 className="ui-m-0">Example Heading with no margin bottom.</h3>

        <h2 className="ui-mb-0">Heading Text</h2>
        
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {TextHeadingNoMgBottomCode}
        </SyntaxHighlighter> */}
        
        <h2>Paragraph varients</h2>
        <p>This is paragraph used to display long text.</p>
        <p className="ui-color-success">This is success paragraph used to display success text.</p>
        <p className="ui-color-danger">This is danger paragraph used to display danger text.</p>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {TextVarientsCode}
        </SyntaxHighlighter>

        <br/><br/><br/><br/><br/>

      </NavPageContainer>
    );
  }
}

export default ClassesDocs;