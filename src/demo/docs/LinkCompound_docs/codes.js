const LinkImportCode =
`import { LinkCompound } from 'react-windows-ui'`;

const LinkUsageCode =
`<LinkCompound
  to="#"
  title="Network usage by individual apps"
  subtitle="Display data consumes by installed apps"
  icon={<i className="icons10-area-chart color-primary"></i>}
/>`;

const LinkInlineUsageCode =
`<LinkCompound
  to="#"
  title="User preferences and uploads"
  subtitle="Profile pictures and details"
  image={Img}
  imageAlt="Landscape"
/>`;

export {
    LinkImportCode,
    LinkUsageCode,
    LinkInlineUsageCode
}