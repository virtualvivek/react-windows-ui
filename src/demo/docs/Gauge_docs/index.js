import React from 'react'
import { NavPageContainer, Gauge, Button } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
    animateTransition>
    <h1>Gauge</h1>

      <h3 className="m-b-15">Default</h3>
        
      <Gauge
        setProgress={this.state.gaugeValue}
        scale={2}
        value={this.state.gaugeValue+"%"}
        info="of something"
      />

      <div className="app-flex">
        <Button value="0%" onClick={this.setGauge0}/>
        &nbsp;
        <Button value="50%" onClick={this.setGauge50} />
        &nbsp;
        <Button value="100%" onClick={this.setGauge100} />
      </div>

   
      <div className="app-hr"></div>

      <Gauge
        setProgress={this.state.gaugeValue}
        scale={1.2}
        value={this.state.gaugeValue+"%"}
        strokeColor="#eb8613"
        valueColor="#eb8613"
        type="fill"
      />

      <Gauge
        setProgress={this.state.gaugeValue}
        scale={1.2}
        value={this.state.gaugeValue+"%"}
        info="of total"
        strokeColor="#e01944"
        valueColor="#e01944"
      />

    
      <div className="app-hr"></div>
      <h3 className="m-b-15">Customization</h3>

      <Gauge
        setProgress={44}
        scale={1.2}
        value={"44%"}
        info="of total"
        strokeColor="#198ae0"
        strokeWidth={8}
        valueColor="#198ae0"
        backgroundColor="#198ae044"
      />
      &nbsp;&nbsp;
      <Gauge
        setProgress={15}
        scale={1.2}
        value={"15%"}
        info="of Speed"
        strokeColor="#0ac94e"
        strokeWidth={10}
        backgroundColor="#0ac94e44"
      />



      <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default GaugeDocs