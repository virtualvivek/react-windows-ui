const LoaderBarImportCode =
`import { LoaderBar } from 'react-windows-ui'`;

const LoaderBusyImportCode =
`import { LoaderBusy } from 'react-windows-ui'`;

const LoaderBarUsageCode =
`<LoaderBar
  isLoading={true}
/>`;

const LoaderBusyUsageCode =
`<LoaderBusy
  isLoading={true}
/>`;

const LoaderBusyFullscreenUsageCode =
`<LoaderBusy
  isLoading={true}
  display="fullscreen"
  onBackdropPress={() => {}}
/>`;

const LoaderBusyFullscreenCustomUsageCode =
`<LoaderBusy
  setTheme="light"
  isLoading={true}
  display="fullscreen"
  onBackdropPress={() => {}}
  backgroundColor="#16ab9c"
  title="Tap anywhere to dismiss"
/>`;


export {
    LoaderBarImportCode,
    LoaderBusyImportCode,
    LoaderBarUsageCode,
    LoaderBusyUsageCode,
    LoaderBusyFullscreenUsageCode,
    LoaderBusyFullscreenCustomUsageCode
}