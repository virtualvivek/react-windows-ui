import React from 'react'
import { NavPageContainer,CommandBar,Button,InputSearchBox,ImageView,Dialog } from '../../../../lib'
import Img from '../../../img/illustration/macos.jpg'


class CommandBarLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDialog :false
        }
    }

    toggleDialog = () => {
        if(this.state.showDialog){
            this.setState({showDialog: false});
        }
        else {
            this.setState({showDialog: true}); 
        } 
    }

  render() {
    return (
    <NavPageContainer hasPadding>
      <h1>CommandBar</h1>

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

        <ImageView
          width={'95%'}
          height={'65vh'}
          borderRadius={18}
          src={Img}/>

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

        <Dialog
          isVisible={this.state.showDialog}
          onBackdropPress={this.toggleDialog}
          padding="0 0 10px 0"
          showDropShadow>
            <Button
                width={'100%'}
                icon={<i className="icons10-share accent"></i>}
                value="Share"/>
            <Button
                width={'100%'}
                icon={<i className="icons10-pencil accent"></i>}
                value="Edit"/>
            <Button
                width={'100%'}
                icon={<i className="icons10-trash accent"></i>}
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