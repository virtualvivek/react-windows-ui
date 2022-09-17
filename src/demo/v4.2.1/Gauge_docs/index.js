import React from 'react'
import { NavPageContainer, Gauge, Button } from '../_lib'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { GaugeImportCode,GaugeUsageCode,GaugeCustom1UsageCode,
GaugeCustom3UsageCode,GaugeCustom4UsageCode } from './codes'
import PropsView from './props-view'

class GaugeDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gaugeValue :50
    }
  }

  setGauge0 = () => {   
    this.setState({gaugeValue: 0});
  }
  setGauge50 = () => {   
    this.setState({gaugeValue: 50});
  }
  setGauge100 = () => {   
    this.setState({gaugeValue: 100});
  }

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>Gauge</h1>
        
    <Gauge
      setProgress={this.state.gaugeValue}
      value={"%"}
      info="of something"
    />
    <br/><br/>

    <div className="app-flex">
      <Button value="0%" onClick={this.setGauge0}/>
      &nbsp;
      <Button value="50%" onClick={this.setGauge50} />
      &nbsp;
      <Button value="100%" onClick={this.setGauge100} />
    </div>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {GaugeImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {GaugeUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>Gauge <p className="app-code">Custom color</p> :</h2>


    <Gauge
      setProgress={this.state.gaugeValue}
      size={100}
      value={"%"}
      info="of total"
      strokeColor="#e01944"
      valueColor="#e01944"
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {GaugeCustom1UsageCode}
    </SyntaxHighlighter>



    <div className="app-hr"></div>
    <h2>Gauge <p className="app-code">Custom colors</p> :</h2>

    <Gauge
      setProgress={44}
      size={120}
      value={"%"}
      valueFontSize={34}
      strokeColor="#198ae0"
      valueColor="#198ae0"
      backgroundColor="#198ae044"
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {GaugeCustom3UsageCode}
    </SyntaxHighlighter>
    


    <div className="app-hr"></div>
    <h2>Gauge <p className="app-code">Custom stroke color</p> :</h2>

    <Gauge
      setProgress={15}
      value={" KM/s"}
      valueFontSize={20}
      info="of Speed"
      infoFontSize={16}
      strokeColor="#0ac94e"
      backgroundColor="#0ac94e44"
    />
    <br/><br/>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {GaugeCustom4UsageCode}
    </SyntaxHighlighter>


    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default GaugeDocs