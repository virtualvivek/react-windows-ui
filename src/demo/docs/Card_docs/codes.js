const CardImportCode =
`import { Card } from 'react-windows-ui'`;

const CardUsageCode =
`<Card>
  <div> children components here </div>
</Card>`;

const CardUsageDefaultCode =
`<Card display="flow-root">
  <div className="app-link-compound">
    <div className="app-link-compound-container">
      <img src={Img1} alt="Img" />
      <div className="app-link-compound-subcontainer">
        <span>User preferences and uploads</span>
        <p>Profile pictures and details</p>
      </div>
      <Switch />
    </div>
  </div>
</Card>`;

const CardUsageHoverCode =
`<Card
  hoverable
  display="flow-root"
  maxWidth={400}
  padding={10}>
  <ListItem
    title="News"
    subtitle="12.4 MB"
    info="installed"
    borderBottom={false}
  />
  <div style={{float:'right', display:'flex'}}>
    <Button value="Options"/>
    <div className="app-space-15"></div>
    <Button value="Remove"/> 
  </div>
</Card>`;

const CardUsageFocusedCode =
`<Card
  focused
  display="flow-root"
  maxWidth={400}
  padding={10}>
  <LinkCompound
    to="#"
    title="Notification settings and DND"
    subtitle="Control which app sends you push notification, adjusts timing according to clock"
    icon={<i className="icons10-notification color-primary"></i>}
  />
  <Button
    style={{float:'right', margin:5}}
    value="Edit" />
</Card>`;

export {
    CardImportCode,
    CardUsageCode,
    CardUsageDefaultCode,
    CardUsageHoverCode,
    CardUsageFocusedCode
}