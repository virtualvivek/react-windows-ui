const ProgressBarImportCode =
`import { ProgressBar } from 'react-windows-ui'`;

const ProgressBarIndeterminateImportCode =
`import { ProgressBarIndeterminate } from 'react-windows-ui'`;

const ProgressBarUsageCode =
`<ProgressBar
  setProgress={56}
  tooltip="ProgressBar tooltip title"
/>`;

const ProgressBarTitleUsageCode =
`<ProgressBar
  title="Title"
  setProgress={56}
/>`;

const ProgressBarTitleSubtitleUsageCode =
`<ProgressBar
  title="Title"
  subtitle="Subtitle"
  setProgress={56}
/>`;

const ProgressBarIconUsageCode =
`<ProgressBar
  
  showIcon={true}
  title="Drive C:"
  setProgress={54}
  subtitle="primary storage"
  icon={<i className="icons10-hdd"></i>}
/>`;

const ProgressBarCustomColorUsageCode =
`<ProgressBar
  setProgress={76}
  color={'#2C8B2C'}
/>`;

const ProgressBarCustomHeightUsageCode =
`<ProgressBar
  height={15}
  setProgress={46}
/>`;

const ProgressBarIndeterminateUsageCode =
`<ProgressBarIndeterminate
  isLoading={true}
/>`;


export {
  ProgressBarImportCode,
  ProgressBarUsageCode,
  ProgressBarTitleUsageCode,
  ProgressBarTitleSubtitleUsageCode,
  ProgressBarIconUsageCode,
  ProgressBarCustomColorUsageCode,
  ProgressBarCustomHeightUsageCode,
  ProgressBarIndeterminateImportCode,
  ProgressBarIndeterminateUsageCode
}