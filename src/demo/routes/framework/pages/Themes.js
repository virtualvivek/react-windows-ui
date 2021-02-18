import React from 'react'
import { NavPageContainer, ColorPickerItem, Switch } from '../../../../lib'
import './css/themes.css'

class Themes extends React.Component {

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
    <NavPageContainer hasPadding>
      <h1>Themes</h1>

        <div className="windows-view">
            <div className="start-view">
                <div className="tiles-view-right">
                    <div className="white-line"></div>
                    <p></p><p></p><p></p><p></p><p></p><p></p>  
                </div>
                <div className="tiles-view">
                    <div className="white-line"></div>
                    <p>Aa</p>
                </div>
            </div>
            <div className="taskbar-view"></div>
        </div>
          
        <ColorPickerItem
            name="1"
            color="#6632a8"
            checked/>
        <ColorPickerItem
            name="1"
            color="#881798"/>
        <ColorPickerItem
            name="1"
            color="#744DA9"/>
        <ColorPickerItem
            name="1"
            color="#785AA2"/>
        <ColorPickerItem
            name="1"
            color="#0063B1"/>
        <ColorPickerItem
            name="1"
            color="#0078D7"/>  

        <br></br>  

        <ColorPickerItem
            name="1"
            color="#D29B0A"/>
        <ColorPickerItem
            name="1"
            color="#E9860D"/>
        <ColorPickerItem
            name="1"
            color="#F7630C"/>  

        <ColorPickerItem
            name="1"
            color="#CA5010"/>
        <ColorPickerItem
            name="1"
            color="#DA3B01"/>
        <ColorPickerItem
            name="1"
            color="#D13438"/>

        <br></br>  

        <ColorPickerItem
            name="1"
            color="#2D7D9A"/>
        <ColorPickerItem
            name="1"
            color="#038387"/>
        <ColorPickerItem
            name="1"
            color="#00B294"/>  
        <ColorPickerItem
            name="1"
            color="#018574"/>
        <ColorPickerItem
            name="1"
            color="#06A156"/>
        <ColorPickerItem
            name="1"
            color="#10893E"/> 

        <br></br>  

        <ColorPickerItem
            name="1"
            color="#69797E"/>
        <ColorPickerItem
            name="1"
            color="#4A5459"/>
        <ColorPickerItem
            name="1"
            color="#647C64"/>  
        <ColorPickerItem
            name="1"
            color="#525E54"/>
        <ColorPickerItem
            name="1"
            color="#847545"/>
        <ColorPickerItem
            name="1"
            color="#7E735F"/> 

        <br/><br/>
        
        <Switch
            checked
            textOn="system"
            textOff="default"/>         


        <br/><br/><br/><br/><br/><br/>

    </NavPageContainer>
  );
  }
}

export default Themes