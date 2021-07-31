const LinkImportCode =
`import { LinkCompound } from 'react-windows-ui'`;

const LinkUsageCode =
`<LinkCompound
  to="#"
  title="Network usage by individual apps"
  subtitle="Display data consumes by installed apps"
  icon={<i className="icons10-area-chart color-primary"></i>}
/>`;

const LinkImageUsageCode =
`<LinkCompound
  to="#"
  title="User preferences and uploads"
  subtitle="Profile pictures and details"
  image={Img}
  imageAlt="Demo Image"
/>`;

const LinkBorderUsageCode =
`<LinkCompound
  linkStyle="border"
  to="#"
  title="Notification settings and DND"
  subtitle="Control which app push notification"
  image={Img}
  imageAlt="Demo Image"
  tooltip="This is tooltip text"
/>`;

export {
    LinkImportCode,
    LinkUsageCode,
    LinkBorderUsageCode,
    LinkImageUsageCode
}