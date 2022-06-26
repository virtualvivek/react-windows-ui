const AlertImportCode =
`import { Alert } from 'react-windows-ui'`;

const AlertUsageCode =
`<Alert
  title="Alert"
  isVisible={false}
  message="This is message"
  onBackdropPress={() => {}}>
    <button onClick={() => {}}>OK</button>
</Alert>`;

const AlertLightUsageCode =
`<Alert
  setTheme="system"
  isVisible={false}
  onBackdropPress={() => {}}
  title={<><i className="icons10-sun"></i>Alert</>}
  message={<span>This is Light alert Box. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>}>
    <button onClick={() => {}}>Cancel</button>
    <button onClick={() => {}}>OK</button>
</Alert>`;

export {
    AlertImportCode,
    AlertUsageCode,
    AlertLightUsageCode
}