const AvatarViewImportCode =
`import { AvatarView } from "react-windows-ui";`;

const AvatarViewUsageCode =
`<AvatarView
  src={Image}
  size={85}
  alt="Anime"
  showDropShadow={true}
  tooltip="tooltip title"
/>`;

const AvatarViewUsageLoadingCode =
`<AvatarView
  src={Img}
  size={80}  
  showDropShadow={true}
  tooltip="Different World"
  showBadge // boolean | string
  badgePosition="bottom" // "top" | "bottom"
  badgeBackgroundColor={"#16ab9c"}
  badgeTooltip="online"
/>`;

export {
  AvatarViewImportCode,
  AvatarViewUsageCode,
  AvatarViewUsageLoadingCode
}