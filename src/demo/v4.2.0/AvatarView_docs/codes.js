const AvatarViewImportCode =
`import { AvatarView } from "react-windows-ui";`;

const AvatarViewUsageCode =
`<AvatarView
  src={Image}
  size="medium"
  isLoading={false}
  showDropShadow={true}
  tooltip="tooltip title"
/>`;

const AvatarViewUsageLoadingCode =
`<AvatarView
  src={Image}
  size="medium"
  isLoading={true}
  showDropShadow={true}
  tooltip="tooltip title"
/>`;

export {
    AvatarViewImportCode,
    AvatarViewUsageCode,
    AvatarViewUsageLoadingCode
}