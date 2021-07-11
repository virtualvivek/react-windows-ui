import React from 'react'
import { NavPageContainer,CommandBar,Button,
         InputSearchBox,ImageView,Dialog,View } from '../../lib/src'
import Img from '../assets/illustration/macos.jpg'


class CommandBarLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
            CommandBarVisivle: false
        }
    }

    toggleDialog = () => {
        if(this.state.showDialog){
            this.setState({showDialog: false})
        }
        else {
            this.setState({showDialog: true})
        } 
    }
    showCommandBar = () => {
        this.setState({CommandBarVisivle: true})
    }

  render() {
    return (
    <NavPageContainer hasPadding>

        <CommandBar>
            <Button
                icon={<i className="icons10-share"></i>}
                value="Share"/>
            <Button
                icon={<i className="icons10-save"></i>}
                value="Save"/>
            <Button
                icon={<i className="icons10-more"></i>}
                value=""/>
            &nbsp;&nbsp; 
            <InputSearchBox 
                placeholder="Enter to Search"/>
            &nbsp;&nbsp;
        </CommandBar>
        
      <h1>CommandBar</h1>

        
        

        <ImageView
          width={'95%'}
          height={'65vh'}
          borderRadius={18}
          onLoad={this.showCommandBar}
          src={Img}/>

        <View isVisible={this.state.CommandBarVisivle}>
        <div className="app-flex-center" style={{marginTop:-280,marginLeft:-20}}>
            <CommandBar
                position="relative"
                showDropShadow>
                <Button
                    icon={<i className="icons10-share"></i>}
                    value="Share"/>
                <Button
                    icon={<i className="icons10-pencil"></i>}
                    value="Edit"/>
                <Button
                    icon={<i className="icons10-trash"></i>}
                    value="Delete"/>    
                <Button
                    icon={<i className="icons10-save"></i>}
                    value="Save"/>
                <Button
                    icon={<i className="icons10-more"></i>}
                    value=""
                    onClick={this.toggleDialog}/>
            </CommandBar>
        </div>
        </View>

        <Dialog
          isVisible={this.state.showDialog}
          onBackdropPress={this.toggleDialog}
          padding="10px"
          showDropShadow>
            <Button
                width={'100%'}
                icon={<i className="icons10-share color-primary"></i>}
                value="Share"/>
            <Button
                width={'100%'}
                icon={<i className="icons10-pencil color-primary"></i>}
                value="Edit"/>
            <Button
                width={'100%'}
                icon={<i className="icons10-trash color-primary"></i>}
                value="Delete"/>    
            <Button
                width={'100%'}
                type="primary"
                icon={<i className="icons10-save"></i>}
                value="Save"/>
            <div className="app-hr"></div>
            <Button
                width={'100%'}
                value="Close"
                onClick={this.toggleDialog}/>
            <br/>
        </Dialog>

        

    </NavPageContainer>
  );
  }
}

export default CommandBarLayout