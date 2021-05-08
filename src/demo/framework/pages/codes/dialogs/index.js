const DialogCode =
`<Dialog
 isVisible={this.state.isVisible}
 onBackdropPress={this.toggleDialog}
 showDropShadow={true}>
    <div>{show components here}</div>
</Dialog>`;

const AlertCode =
`<Alert
 isVisible={this.state.isVisibleAlert}
 onBackdropPress={this.toggleAlert}
 title="Alert"
 message="This is message">
  <button onClick={this.toggleAlert}>OK</button>
</Alert>`;

export {
    DialogCode,
    AlertCode
}