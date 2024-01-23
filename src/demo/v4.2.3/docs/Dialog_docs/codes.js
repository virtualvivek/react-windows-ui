const DialogImportCode =
`import { Dialog } from "react-windows-ui";`;

const DialogUsageCode =
`<Dialog
  isVisible={true}
  onBackdropPress={() => {}}>
    <Dialog.Header>
      <h3>Header</h3>
    </Dialog.Header>
    <Dialog.Body>
      <p style={{padding: 10}}>Helow World.</p>
    </Dialog.Body>
    <Dialog.Footer>
      <Button
        value="Close"
        onClick={this.toggleDialog}
      />
    </Dialog.Footer>
</Dialog>`;

const DialogConfirmUsageCode =
`<Dialog
  isVisible={true}
  style={{padding:20}}
  onBackdropPress={() => {}}>
    <Dialog.Body style={{padding: 15}}>
      <h2 className="app-m-0">Dialog Confirm</h2>
      <p>Are you feel good today?</p>  
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
    </Dialog.Body>
</Dialog>`;

export {
    DialogImportCode,
    DialogUsageCode,
    DialogConfirmUsageCode
}