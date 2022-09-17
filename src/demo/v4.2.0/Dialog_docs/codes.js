const DialogImportCode =
`import { Dialog } from "react-windows-ui";`;

const DialogUsageCode =
`<Dialog
  isVisible={this.state.showDialog}
  onBackdropPress={this.toggleDialog}>
  <ListItem
    img={Img4}
    imgBorderRadius={8}
    title="Magenta Riddim"
    subtitle="5.6 MB" /> 
  <Button
    style={{margin: '15px', float: 'right'}}
    value="Close"
    onClick={this.toggleDialog} />
</Dialog>`;

const DialogConfirmUsageCode =
`<Dialog
  isVisible={true}
  style={{padding:20}}
  onBackdropPress={() => {}}>
  <h2 style={{margin: 0}}>Dialog Confirm</h2>
  <p style={{margin: "0 0 40px 0"}}>Are you feel good today?</p>  
  <div style={{display: "flex", justifyContent: "center"}}>
    <Button
      style={{flex: "auto"}}
      value="Confirm"
      type="primary"
      onClick={() => {}}
    />
    <div className="app-space-15"></div>
    <Button
      style={{flex: "auto"}}
      value="Cancel"
      onClick={() => {}}
    />
  </div>
</Dialog>`;

export {
    DialogImportCode,
    DialogUsageCode,
    DialogConfirmUsageCode
}