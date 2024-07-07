import React from 'react'
import { Link } from "react-router-dom";
import { NavPageContainer, ColorPickerItem, AppTheme, Dialog } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactIcon from '../../assets/static/ReactIcon'
import WinIcon from '../../assets/static/WinIcon'
import GithubIcon from "../../assets/static/GithubIcon"
import './css/home.css'
import { lib_version } from '../values'


class Home extends React.Component {

  state = {
    show_dialog: false,
    app_color: "",
    app_color_dark: ""
  }

  toggleDialog = () => {
    this.setState({
      show_dialog: !this.state.show_dialog
    })
  }

  onBranchChange = () => {
    this.toggleDialog();
    setTimeout(() => { window.location.reload(); }, 500);
  }

  changeTheme = (color, colorDark = "#d927f2") => {
    this.setState({
      app_color: color.target.value,
      app_color_dark: colorDark
    });
  }
  
  render() {
  return (
    <NavPageContainer>

       <AppTheme
        color={this.state.app_color}
        colorDarkMode={this.state.app_color_dark}
      />

      <Dialog
        isVisible={this.state.show_dialog}
        onBackdropPress={()=>this.toggleDialog()}>
          <Dialog.Body>
            <div style={{flexDirection: "column", display: "flex"}}>
            <Link
              to="#"
              onClick={()=>this.toggleDialog()}
              className="docs-btn-branch-dialog-txt">
                <b>‣  version 4.2.4</b>
            </Link>
            <Link
              to="/v4.2.2/home"
              onClick={()=>this.onBranchChange()}
              className="docs-btn-branch-dialog-txt">
                ‣  version 4.2.2
            </Link>
            <Link
              to="/v4.2.1/home"
              onClick={()=>this.onBranchChange()}
              className="docs-btn-branch-dialog-txt">
                ‣  version 4.2.1
            </Link>
            <Link
              to="/v4.2.0/home"
              onClick={()=>this.onBranchChange()}
              className="docs-btn-branch-dialog-txt">
              ‣  version 4.2.0
            </Link>
            </div>
          </Dialog.Body>
      </Dialog>

      <div className="home-header-container">
        <div className="home-header">
          <ReactIcon/>
          <span>&nbsp;+&nbsp;</span>
          <WinIcon/>
        </div>
        <div style={{flex: 0.9, display:"flex"}}>
          <div className="home-color-picker-grid">
            <ColorPickerItem
              defaultChecked
              name="1"
              color="#0078D7"
              onChange={ (color) => this.changeTheme(color, "#60CDFF")}
            />
            <ColorPickerItem
              name="1"
              color="#881798"
              onChange={ (color) => this.changeTheme(color, "#d927f2")}
            />
            <ColorPickerItem
              name="1"
              color="#00B294"
              onChange={ (color) => this.changeTheme(color, "#02f7ce")}
            />
            <ColorPickerItem
              name="1"
              color="#69797E"
              onChange={ (color) => this.changeTheme(color, "#b8cdd4")}
            />
          </div>
        </div>
        <a target="_blank" className="home-github-icon" rel="noopener noreferrer" href="https://github.com/virtualvivek/react-windows-ui/">
          <GithubIcon/>
        </a>
      </div>

      <div className="home-title-container">
        <h1 className="home-title">react-windows-ui 
          <span className="home-card-version">
            <span onClick={()=>this.toggleDialog()}>{lib_version} 🡫</span>
          </span>
        </h1>
        <span className="home-subtitle">Build Windows fluent UI apps using ReactJS. <br/>Provides a set of accessible, reusable, and composable React components.</span>
      </div>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container home-code">
        {`$ npm install react-windows-ui`}
      </SyntaxHighlighter>


      <div className="backdrop-overlay">
        <div style={{opacity: 0.0479153}}></div>
        <div style={{opacity: 0.0699035}}></div>
        <div style={{opacity: 0.0344052}}></div>
        <div style={{opacity: 0.0251223}}></div>
        <div style={{opacity: 0.0726212}}></div>
        <div style={{opacity: 0.0716261}}></div>
        <div style={{opacity: 0.0733299}}></div>
        <div style={{opacity: 0.0574288}}></div>
        <div style={{opacity: 0.0523363}}></div>
        <div style={{opacity: 0.0509536}}></div>
        <div style={{opacity: 0.0567576}}></div>
        <div style={{opacity: 0.0277787}}></div>
        <div style={{opacity: 0.0679573}}></div>
        <div style={{opacity: 0.0430688}}></div>
        <div style={{opacity: 0.0435807}}></div>
        <div style={{opacity: 0.0453715}}></div>
        <div style={{opacity: 0.0527688}}></div>
        <div style={{opacity: 0.0295616}}></div>
        <div style={{opacity: 0.0326275}}></div>
        <div style={{opacity: 0.0429203}}></div>
        <div style={{opacity: 0.0424849}}></div>
        <div style={{opacity: 0.0717016}}></div>
        <div style={{opacity: 0.0563385}}></div>
        <div style={{opacity: 0.0382874}}></div>
        <div style={{opacity: 0.0284212}}></div>
        <div style={{opacity: 0.0547719}}></div>
        <div style={{opacity: 0.0631726}}></div>
        <div style={{opacity: 0.028992}}></div>
        <div style={{opacity: 0.0533963}}></div>
        <div style={{opacity: 0.0480904}}></div>
        <div style={{opacity: 0.0665483}}></div>
        <div style={{opacity: 0.065122}}></div>
        <div style={{opacity: 0.0529938}}></div>
        <div style={{opacity: 0.052363}}></div>
        <div style={{opacity: 0.0354415}}></div>
        <div style={{opacity: 0.0741074}}></div>
        <div style={{opacity: 0.0714523}}></div>
        <div style={{opacity: 0.0583123}}></div>
        <div style={{opacity: 0.0335142}}></div>
        <div style={{opacity: 0.0707661}}></div>
        <div style={{opacity: 0.0466608}}></div>
        <div style={{opacity: 0.0619119}}></div>
        <div style={{opacity: 0.060674}}></div>
        <div style={{opacity: 0.0290214}}></div>
        <div style={{opacity: 0.0525541}}></div>
        <div style={{opacity: 0.051372}}></div>
        <div style={{opacity: 0.0452496}}></div>
        <div style={{opacity: 0.0325436}}></div>
        <div style={{opacity: 0.0289075}}></div>
        <div style={{opacity: 0.057938}}></div>
        <div style={{opacity: 0.0548616}}></div>
        <div style={{opacity: 0.0716295}}></div>
        <div style={{opacity: 0.0596384}}></div>
        <div style={{opacity: 0.0508029}}></div>
        <div style={{opacity: 0.0325501}}></div>
        <div style={{opacity: 0.0413894}}></div>
        <div style={{opacity: 0.0569045}}></div>
        <div style={{opacity: 0.0257851}}></div>
        <div style={{opacity: 0.0646819}}></div>
        <div style={{opacity: 0.0547428}}></div>
        <div style={{opacity: 0.0724335}}></div>
        <div style={{opacity: 0.0635948}}></div>
        <div style={{opacity: 0.0423413}}></div>
        <div style={{opacity: 0.0525528}}></div>
        <div style={{opacity: 0.0594297}}></div>
        <div style={{opacity: 0.0418731}}></div>
        <div style={{opacity: 0.0351051}}></div>
        <div style={{opacity: 0.0696103}}></div>
        <div style={{opacity: 0.0636324}}></div>
        <div style={{opacity: 0.0603203}}></div>
        <div style={{opacity: 0.0250675}}></div>
        <div style={{opacity: 0.0656307}}></div>
        <div style={{opacity: 0.0261537}}></div>
        <div style={{opacity: 0.0610299}}></div>
      </div>

      <div className="backdrop">
        <div className="acrylic-material"></div>
        <div className="backdrop-image"></div>
      </div>

    </NavPageContainer>
    )
  }
}

export default Home;