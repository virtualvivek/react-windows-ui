import React from 'react'
import { NavPageContainer, SliderBar } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SliderBarImportCode,SliderBarUsageCode,SliderBarRoundUsageCode,SliderBarRoundBorderUsageCode } from './codes'
import PropsView from './props-view'

class SliderBarDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Slider1: 56,
      Slider2: 40,
      Slider3: 28,
    }
  }

  onChangeSlider1 = (e) => { this.setState({Slider1:e.target.value}) }
  onChangeSlider2 = (e) => { this.setState({Slider2:e.target.value}) }
  onChangeSlider3 = (e) => { this.setState({Slider3:e.target.value}) }


  render() {
    return (
      <NavPageContainer
        hasPadding
        animateTransition={false}>
        <h1>SliderBar</h1>
            
        <h1 className="app-m-0 color-primary"
          style={{fontSize:46}}>
            {this.state.Slider1}%
        </h1>

        <SliderBar
          tooltip="SliderBar tooltip title"
          defaultValue={this.state.Slider1}
          onChange={(e) => {this.onChangeSlider1(e)}}
        />

        <h2>Import</h2>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {SliderBarImportCode}
        </SyntaxHighlighter>

        <h2>Usage</h2>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {SliderBarUsageCode}
        </SyntaxHighlighter>

      
        <div className="app-hr"></div>
        <h2>SliderBar <p className="app-code">Round</p> varient :</h2>

        <SliderBar
          step={4}
          thumbStyle="round"
          defaultValue={this.state.Slider2}
          onChange={(e) => {this.onChangeSlider2(e)}}
        />
        <br/><br/>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {SliderBarRoundUsageCode}
        </SyntaxHighlighter>


        <div className="app-hr"></div>
        <h2>SliderBar <p className="app-code">Round Border</p> varient :</h2>

        <SliderBar
          showPopupValue={false}
          thumbStyle="round-border"
          defaultValue={this.state.Slider3}
          onChange={(e) => {this.onChangeSlider3(e)}}
        />
        <br/><br/>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {SliderBarRoundBorderUsageCode}
        </SyntaxHighlighter>


        <h2>Props</h2>
        <PropsView />

        <br/><br/><br/><br/><br/><br/>

      </NavPageContainer>
    );
  }
}

export default SliderBarDocs