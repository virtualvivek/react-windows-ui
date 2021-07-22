const AvatarViewImportCode =
`import { AvatarView } from 'react-windows-ui'`;

const AvatarViewUsageCode =
`<AvatarView
  src={Image}
  isLoading={false}
  size="medium"
  tooltip="tooltip title"
  showDropShadow={true}
/>`;

const AvatarViewUsageLoadingCode =
`<AvatarView
  src={Image}
  isLoading={true}
  size="medium"
  tooltip="tooltip title"
  showDropShadow={true}
/>`;

export {
    AvatarViewImportCode,
    AvatarViewUsageCode,
    AvatarViewUsageLoadingCode
}