import React from 'react'
import { NavPageContainer, AvatarView, Button } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import IronMan from '../../assets/illustration/ironman.jpg'
import Img2 from '../../assets/illustration/2.jpg'
import Img3 from '../../assets/illustration/3.jpg'
import { AvatarViewImportCode, AvatarViewUsageCode, AvatarViewUsageLoadingCode } from './codes'
import PropsView from './props-view'

class AvatarViewDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateLoadingImg: false
    }
  }

  setLoading = () => { this.setState({stateLoadingImg: true}) }
  setRegular = () => { this.setState({stateLoadingImg: false}) }

  render() {
    return (
    <NavPageContainer hasPadding animateTransition>
      <h1>AvatarView</h1>

      <AvatarView
        src={IronMan}
        size="large"
        tooltip="IronMan"
        showDropShadow={false}
        isLoading={this.state.stateLoadingImg}
      />
      <br/><br/>
      <Button
        value="set Loading"
        type="primary"
        onClick={this.setLoading}/>
        &nbsp;
      <Button
        value="set Regular"
        type="primary-outline"
        onClick={this.setRegular}/>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AvatarViewImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <AvatarView
        src={Img3}
        size="medium"
        showDropShadow />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AvatarViewUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>
      <h2 className="m-tb-20">AvatarView <p className="app-code">state loading</p>:</h2>

      <AvatarView
        size="medium"
        src={Img2}
        isLoading    
        showDropShadow />
      <br/><br/>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {AvatarViewUsageLoadingCode}
      </SyntaxHighlighter>


      <h2>Props</h2>
      <PropsView/>


    <br/><br/><br/><br/><br/>
    </NavPageContainer>
    )
  }
}

export default AvatarViewDocs