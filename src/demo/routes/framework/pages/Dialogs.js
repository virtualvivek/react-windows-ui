import React from 'react'
import {NavPageContainer,AvatarView,
    Dialog,Alert,Button,ListItem} from '../../../../lib'
import AvatarImg from '../../../img/anim_avatar.jpeg'
import Img2 from '../../../img/illustration/2.jpg'
import Img3 from '../../../img/illustration/3.jpg'
import Img4 from '../../../img/illustration/4.jpg'


class Lists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDialog :false,
            showAlert :false
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

    toggleAlert = () => {
        if(this.state.showAlert){
            this.setState({showAlert: false});
        }
        else {
            this.setState({showAlert: true}); 
        } 
    }
    render() {
      return (
        <NavPageContainer
            hasPadding>
                
        <h1>Dialogs</h1>

        <br/>
        <div className="app-flex">
        <AvatarView
            size="large" 
            src={AvatarImg}
            showDropShadow/>
            &nbsp;&nbsp;
            <div className="app-grid">
                <AvatarView
                    size="small" 
                    src={Img2}
                    showDropShadow/>
                &nbsp;
                <AvatarView
                    size="small" 
                    src={Img3}
                    showDropShadow/>
            </div>
        </div>


        <br/>
        <h3 className="m-b-15">Alert</h3>
        <Button value="Open Alert" 
            onClick={this.toggleAlert}
        />
        <br></br>

        <h3 className="m-b-15">Dialog</h3>
        <Button
            value="Open Dialog"
            onClick={this.toggleDialog}/>
  
        <Dialog
          isVisible={this.state.showDialog}
          onBackdropPress={this.toggleDialog}
          showDropShadow>
            <ListItem
                img={Img4}
                imgBorderRadius={8}
                title="Magenta Riddim"
                subtitle="5.6 MB"/>
            <ListItem
                img={Img3}
                imgBorderRadius={8}
                title="Different World"
                subtitle="12.0 MB"/>
            <ListItem
                img={Img2}
                imgBorderRadius={8}
                title="La Familia"
                subtitle="24 MB"/>
               
            <div style={{padding:'10px',float:'right'}}>
                <Button
                    value="Close"
                    onClick={this.toggleDialog}
                />
            </div>
        </Dialog>
  
        <Alert
          isVisible={this.state.showAlert}
          onBackdropPress={this.toggleAlert}
          title="Alert"
          message="This is alert demo">
            <button onClick={this.toggleAlert}>OK</button>
        </Alert>

        <br/><br/>
  
        </NavPageContainer>
      );
    }
  }


export default Lists