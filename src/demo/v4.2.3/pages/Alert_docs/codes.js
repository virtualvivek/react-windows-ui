const AlertImportCode =
`import { Alert } from "react-windows-ui";`;

const AlertUsageCode =
`<Alert
  title="Alert"
  isVisible={false}
  message="This is alert Box."
  onBackdropPress={() => {}}>
  <Alert.Footer>
    <Button
      type="primary"
      value="OK to Close"
      onClick={() => {}}
    />
  </Alert.Footer>
</Alert>`;

const AlertLightUsageCode =
`<Alert
  isVisible={true}
  onBackdropPress={() => {}}
  title={<><i className="icons10-sun"></i>Alert</>}
  message={<span>This is Light alert Box.</span>}>
  <Alert.Footer>
    <Button
      value="Cancel"
      onClick={() => {}}
    />
    <Button
      type="primary"
      value="Confirm"
      onClick={() => {}}
    />
  </Alert.Footer>
</Alert>`;

const AlertCustomHeaderUsageCode =
`<Alert
  isVisible={() => {}}
  onBackdropPress={() => {}}>
  <Alert.Header>
    <p style={{padding: 10}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam.
    </p>
  </Alert.Header>
  <Alert.Footer>
    <Button
      type="primary"
      value="OK to Close"
      onClick={() => {}}
    />
  </Alert.Footer>
</Alert>`;

export {
    AlertImportCode,
    AlertUsageCode,
    AlertLightUsageCode,
    AlertCustomHeaderUsageCode
}