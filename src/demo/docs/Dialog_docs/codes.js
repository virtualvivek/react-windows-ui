const DialogImportCode =
`import { Dialog } from 'react-windows-ui'`;

const DialogUsageCode =
`<Dialog
  isVisible={this.state.showDialog}
  onBackdropPress={this.toggleDialog}
  showDropShadow={true}>
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
      
  <Button
    style={{margin:'15px',float:'right'}}
    value="Close"
    onClick={this.toggleDialog} />
</Dialog>`;

const DialogConfirmUsageCode =
`<Dialog
  isVisible={this.state.showDialogConfirm}
  onBackdropPress={this.toggleDialogConfirm}
  showDropShadow={true}
  padding={20}>
  <h2 className="m-tb-10">Dialog Confirm</h2>
  <h3>Are you feel good today?</h3>  
  <div style={{display:'flex',justifyContent:'flex-end'}}>
    <Button
      value="Cancel"
      type="danger"
      onClick={this.toggleDialogConfirm}/>
    <div className="app-space-15"></div>
    <Button
      value="OK"
      type="primary"
      onClick={this.toggleDialogConfirm}/>
  </div>
</Dialog>`;

export {
    DialogImportCode,
    DialogUsageCode,
    DialogConfirmUsageCode
}