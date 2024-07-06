import React from 'react'
import { NavPageContainer, ImageView, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ImageViewImportCode, ImageViewUsageCode,
         ImageViewShadowInsetUsageCode } from './codes'
import IronMan from '../../../assets/illustration/ironman.jpg'
import UserImg from '../../../assets/anim_avatar2.jpg'
import Img4 from '../../../assets/illustration/5.jpg'
import PropsView from './props-view'

class ImageViewDocs extends React.Component {

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
      <NavPageContainer>

        <ImageView
          src={IronMan}
          width={'100%'}
          height={'240px'}
          tooltip="ImageView tooltip title"
        />

        <div style={{padding: 25}}>
        <br/>

        <ImageView
          src={Img4}
          width="228px"
          height="180px"
          borderRadius={18}
          tooltip='This is a tooltip'
          isLoading={this.state.stateLoadingImg}
        />
        <br/><br/>

        <Button
          value="set Loading"
          type="primary"
          onClick={this.setLoading}
        />
        &nbsp;
        <Button
          value="set Regular"
          type="primary-outline"
          onClick={this.setRegular}
        />

        <div className="ui-hr"></div>
        <h2>Import</h2>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {ImageViewImportCode}
        </SyntaxHighlighter>

        <h2>Usage</h2>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {ImageViewUsageCode}
        </SyntaxHighlighter>

        <div className="ui-hr"></div>
        <h2>ImageView as <p className="ui-code">Avatar</p> :</h2>

        <ImageView
          src={UserImg}
          width="120px"
          height="120px"
          borderRadius={"50%"}
        />

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {ImageViewShadowInsetUsageCode}
        </SyntaxHighlighter>

        <h2>Props</h2>
        <PropsView/>

      </div>

      <br/><br/><br/><br/><br/>
      </NavPageContainer>
    )
  }
}

export default ImageViewDocs;