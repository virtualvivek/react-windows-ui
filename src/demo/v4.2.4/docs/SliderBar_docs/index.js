import React from 'react'
import { NavPageContainer, SliderBar } from '../../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SliderBarImportCode,SliderBarUsageCode,SliderBarRoundUsageCode } from './codes'
import PropsView from './props-view'

class SliderBarDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Slider1: 50,
      Slider2: 40,
    }
  }

  onChangeSlider1 = (e) => { this.setState({Slider1:e.target.value}) }
  onChangeSlider2 = (e) => { this.setState({Slider2:e.target.value}) }


  render() {
    return (
      <NavPageContainer
        hasPadding
        animateTransition={false}>
        <h1>SliderBar</h1>
            
        <h1 className="ui-m-0 color-primary"
          style={{fontSize:46}}>
            {this.state.Slider1}%
        </h1>

        <SliderBar
          step="10"
          defaultValue={this.state.Slider1}
          tooltip="SliderBar tooltip title"
          onChange={(e) => {this.onChangeSlider1(e)}}
        />

        <h2>Import</h2>

        {/* <input type="range" min="0" max="100" step="1" list="tickmarks"/>
        <datalist id="tickmarks">
          <option value="0"></option>
          <option value="10"></option>
          <option value="20"></option>
          <option value="30"></option>
          <option value="40"></option>
          <option value="50"></option>
          <option value="60"></option>
          <option value="70"></option>
          <option value="80"></option>
          <option value="90"></option>
          <option value="100"></option>
        </datalist> */}

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

      
        <div className="ui-hr"></div>
        <h2>SliderBar <p className="ui-code">with</p> ticks :</h2>

        <SliderBar
          step="10"
          width="200px"
          ticks={[0, 50, 100]}
          defaultValue={this.state.Slider2}
          tooltip="SliderBar tooltip title"
          onChange={(e) => {this.onChangeSlider2(e)}}
        />
        <br/><br/>

        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="code code-container">
          {SliderBarRoundUsageCode}
        </SyntaxHighlighter>


        <h2>Props</h2>
        <PropsView />

        <br/><br/><br/><br/><br/><br/>

      </NavPageContainer>
    );
  }
}

export default SliderBarDocs