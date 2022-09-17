const LinkImportCode =
`import { LinkCompound } from "react-windows-ui";`;

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
  imgSrc={Img}
  imgAlt="Demo Image"
  title="User preferences and uploads"
  subtitle="Profile pictures and details"
/>`;

const LinkBorderUsageCode =
`<LinkCompound
  type="border"
  to="#"
  imgSrc={Img}
  imgAlt="Demo Image"
  tooltip="This is tooltip text"
  title="Notification settings and DND"
  subtitle="Control which app push notification"
/>`;

export {
    LinkImportCode,
    LinkUsageCode,
    LinkBorderUsageCode,
    LinkImageUsageCode
}