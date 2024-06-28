import React from 'react'
import { NavPageContainer, ImageView, Button } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ImageViewImportCode,ImageViewUsageCode,ImageViewShadowInsetUsageCode,
  ImageViewTitleSubtitleUsageCode } from './codes'
import IronMan from '../../../assets/illustration/ironman.jpg'
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
        insetShadow
        title="ImageView"
        subtitle="A component for displaying different types of images, including network images, static resources."
        tooltip="ImageView tooltip title"
      />

    <div style={{padding: 25}}>

      {/* <h1>ImageView</h1> */}
      <br/>

      <ImageView
        src={Img4}
        width={'228px'}
        height={'180px'}
        borderRadius={18}
        title="Skrillex"
        tooltip='This is a tooltip'
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

      <h2>ImageView with <p className="ui-code">Inset Shadow</p> :</h2>

      <ImageView
        src={Img4}
        width={'200px'}
        height={'200px'}
        borderRadius={18}
        title="Skrillex"
        insetShadow={true}
      />

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {ImageViewShadowInsetUsageCode}
      </SyntaxHighlighter>

      <div className="ui-hr"></div>

      <h2>ImageView with <p className="ui-code">Title and Subtitle</p> :</h2>

      <ImageView
        src={Img4}
        width={'200px'}
        height={'200px'}
        borderRadius={18}
        title="Title Text"
        subtitle="Subtitle text"
        insetShadow={true}
      />

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {ImageViewTitleSubtitleUsageCode}
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