import React from 'react'
import { NavPageContainer, Dialog, Button, ListItem } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { DialogImportCode, DialogUsageCode, DialogConfirmUsageCode } from './codes'
import PropsView from './props-view'

import Img2 from '../../assets/illustration/2.jpg'
import Img3 from '../../assets/illustration/3.jpg'
import Img4 from '../../assets/illustration/4.jpg'

class DialogDocs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      showDialogConfirm: false
    }
  }

  toggleDialog = () => {
    if(this.state.showDialog)
            this.setState({showDialog: false});
    else    this.setState({showDialog: true});
  }
  toggleDialogConfirm = () => {
    if(this.state.showDialogConfirm)
            this.setState({showDialogConfirm: false});
    else    this.setState({showDialogConfirm: true});
  }


  render() {
    return (
    <NavPageContainer hasPadding animateTransition>
      <h1>Dialogs</h1>

      <Dialog
        isVisible={this.state.showDialog}
        onBackdropPress={this.toggleDialog}>
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
            
        <Button
          style={{margin:'15px',float:'right'}}
          value="Close"
          onClick={this.toggleDialog} />
         
      </Dialog>

      <Dialog
        isVisible={this.state.showDialogConfirm}
        onBackdropPress={this.toggleDialogConfirm}
        style={{padding:20}}>
        <h2 style={{margin: 0}}>Dialog Confirm</h2>
        <p style={{margin: "0 0 40px 0"}}>Are you feel good today?</p>  
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button
            style={{flex: "auto"}}
            value="Confirm"
            type="primary"
            onClick={this.toggleDialogConfirm}
          />
          &nbsp;
          <Button
            style={{flex: "auto"}}
            value="Cancel"
            onClick={this.toggleDialogConfirm}
            />
        </div>
      </Dialog>

      <p>A <span className="color-primary">Dialog</span> is a type of modal window that appears in front of app content to provide critical information or ask for a decision.</p>

      <Button
        value="Open Dialog"
        onClick={this.toggleDialog}/>

      <h2>Import</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {DialogImportCode}
      </SyntaxHighlighter>

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {DialogUsageCode}
      </SyntaxHighlighter>

      <div className="app-hr"></div>

      <h2>Dialog <p className="app-code">Confirm</p> :</h2>

      <Button
        value="Open Dialog Confirm"
        onClick={this.toggleDialogConfirm} />

      <h2>Usage</h2>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        className="code code-container">
        {DialogConfirmUsageCode}
      </SyntaxHighlighter>

      <h2>Props</h2>
      <PropsView />

    <br/><br/><br/><br/><br/>
    </NavPageContainer>
  )
 }
}

export default DialogDocs