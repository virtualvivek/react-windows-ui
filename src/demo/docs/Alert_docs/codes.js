const AlertImportCode =
`import { Alert } from 'react-windows-ui'`;

const AlertUsageCode =
`<Alert
  isVisible={false}
  title="Alert"
  message="This is message"
  onBackdropPress={()=>{}}>
    <button onClick={()=>{}}>OK</button>
</Alert>`;

const AlertLightUsageCode =
`<Alert
  isVisible={false}
  title="Alert"
  message="This is message"
  setTheme="system"
  onBackdropPress={()=>{}}>
    <button onClick={()=>{}}>OK</button>
</Alert>`;

export {
    AlertImportCode,
    AlertUsageCode,
    AlertLightUsageCode
}