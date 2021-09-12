import React from 'react'
import { NavPageContainer, LinkCompound } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NavBarImportCode,NavBarUsageCode,NavBarLinkImportCode,
  NavBarLinkUsageCode,NavBarLinkImgUsageCode,NavBarLinkBadgeUsageCode } from './codes'
import PropsView from './props-view'
import PropsViewNavItem from './props-view-navitem'
import Img1 from '../../assets/illustration/macos.jpg'
import Img2 from '../../assets/illustration/2.jpg'
import './css/navbar-custom.css'

class NavBarDocs extends React.Component {


render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Navbar</h1>
  

    <div className="app-nav-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <div style={{position:'absolute'}}>
        <span className="app-name">NavBar</span>
        <span className="app-name-short">
          <i className="icons10-windows"></i>
        </span>
      </div>
      <div style={{position:'absolute'}}>
        <a className="app-nav-toggle" href="#/navbar"></a>
        <label className="app-switch">
          <input type="checkbox" id="app-day-night-switch"/>
          <div dataoff="Day" dataon="Night"></div>
        </label>
      </div>
      <ul style={{padding:0}}>
        <li>
          <a href="#/navbar"><i className="icons10-home"></i>
          <span>Home</span></a>
        </li>
        <h1>Title</h1>
        <div className="app-hr"></div>
        <li>
          <a href="#/navbar" aria-current="page" className="active">
            <i className="icons10-add"></i>
            <span>NavItem1</span>
          </a>
        </li>
        <li>
          <a href="#/navbar">
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
      {NavBarImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {NavBarUsageCode}
    </SyntaxHighlighter>

    <div className="app-hr"></div>

    <h2>Implementation</h2>
    <p>See <span className="color-primary">NavBar</span> complete application</p>

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

    <h2>Props</h2>
    <PropsView />

    <br/>
    <div className="app-hr"></div>

    <h1>NavBarLink</h1>

    <div className="app-nav-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <ul style={{padding:0,margin:0}}>
        <li>
          <a href="#/navbar" aria-current="page" className="active">
            <i className="icons10-add"></i>
            <span>NavItem1</span>
          </a>
        </li>
        <li>
          <a href="#/navbar">
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

    <h2>NavBarLink <span className="app-code">with img</span> :</h2>
    <p>NavBar <b>img</b> and <b>icon</b> is only visible on <b>small devices</b> when prop : <span className="app-code"><b>{`mobileHasIcons={true}`}</b></span></p>

    <div className="app-nav-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <ul style={{padding:0,margin:0}}>
        <li>
        <a href="#/navbar">
          <img src={Img1} alt="img"/>
          <span>NavItem 1</span>
        </a>
        </li>
        <li>
          <a href="#/navbar">
            <img src={Img2} alt="img"/>
            <span>NavItem 2</span>
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

    <h2>NavBarLink <span className="app-code">show Badge</span> :</h2>

    <div className="app-nav-wrap">
    <nav className="animate custom" style={{position:'relative'}}>
      <ul style={{padding:0,margin:0}}>
        <li>
        <a href="#/navbar">
          <i className="icons10-user"></i>
          <span>NavItem1</span>
          <div class="app-badge">12</div>
        </a>
        </li>
        <li>
          <a href="#/navbar">
            <img src={Img2} alt="img"/>
            <span>NavItem2</span>
            <div class="app-badge">7</div>
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
      {NavBarLinkBadgeUsageCode}
    </SyntaxHighlighter>

    <h2>Props</h2>
    <PropsViewNavItem />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default NavBarDocs