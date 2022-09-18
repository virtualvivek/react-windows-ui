import React from 'react'
import { NavPageContainer, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarLinkImportCode,NavBarLinkUsageCode,
         NavBarLinkImgUsageCode,NavBarLinkBadgeUsageCode } from './codes'
import PropsView from './props-view'
import Img1 from '../../../assets/illustration/macos.jpg'
import { lib_version } from '../../values'

class NavBarLinkDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      badgeVal: 1
    }
  }

  setIncrement = () => {
    this.setState({ badgeVal: this.state.badgeVal + 1 });
  }

  setDecrement = () => {
    if(this.state.badgeVal > 0) {
      this.setState({ badgeVal: this.state.badgeVal - 1 });
    }
  }


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>

    <h1>NavBarLink</h1>

    <div className="app-navbar-wrap">
      <nav className="animate custom" style={{position:'relative'}}>
        <ul style={{padding:0, margin:0}} className="app-navbar-list">
          <li className="app-navbar-list-item">
            <a rel="noopener noreferrer" href={`#/v${lib_version}/navbarlink`} className="active">
              <i className="icons10-add"></i>
              <span>NavItem1</span>
            </a>
          </li>
          <li className="app-navbar-list-item">
            <a rel="noopener noreferrer" href={`#/v${lib_version}/navbarlink`}>
              <i className="icons10-user"></i>
              <span>NavItem2</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>

    <h2>NavBarLink with <span className="app-code">Image</span> :</h2>

    <div className="app-navbar-wrap">
      <nav className="animate custom" style={{position:'relative'}}>
        <ul style={{padding:0, margin:0}} className="app-navbar-list">
          <li className="app-navbar-list-item">
          <a rel="noopener noreferrer" href={`#/v${lib_version}/navbarlink`}>
            <img src={Img1} alt="img"/>
            <span>NavItem 1</span>
          </a>
          </li>
        </ul>
      </nav>
    </div>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkImgUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>

    <h2>NavBarLink show <span className="app-code">Badge</span> :</h2>

    <div className="app-navbar-wrap">
      <nav className="animate custom" style={{position:'relative'}}>
        <ul style={{padding:0, margin:0}} className="app-navbar-list">
          <li className="app-navbar-list-item">
          <a rel="noopener noreferrer" href={`#/v${lib_version}/navbarlink`}>
            <i className="icons10-user"></i>
            <span>NavItem1</span>
            {this.state.badgeVal > 0 ? <div className="app-badge">{this.state.badgeVal}</div> : <></>}
          </a>
          </li>
        </ul>
      </nav>
    </div>
    <br/>
    <Button icon={<i className="icons10-plus"></i>} value="" onClick={this.setIncrement}/>&nbsp;
    <Button icon={<i className="icons10-minus"></i>} value="" onClick={this.setDecrement}/>
    <br/>
    <br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarLinkBadgeUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavBarLinkDocs