const LoaderBarImportCode =
`import { LoaderBar } from 'react-windows-ui'`;

const LoaderBusyImportCode =
`import { LoaderBusy } from 'react-windows-ui'`;

const LoaderBarUsageCode =
`<LoaderBar
  isLoading={true}
/>`;

const LoaderBusyUsageCode =
`<LoaderBar
  isLoading={true}
/>`;

const LoaderBusyFullscreenUsageCode =
`<LoaderBusy
  display="fullscreen"
  isLoading={true}
  onBackdropPress={()=>{}}
/>`;

const LoaderBusyFullscreenCustomUsageCode =
`<LoaderBusy
  display="fullscreen"
  isLoading={true}
  onBackdropPress={()=>{}}
  backgroundColor="#16ab9c"
  setTheme="light"
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