const CardImportCode =
`import { Card } from 'react-windows-ui'`;

const CardUsageCode =
`<Card>
  <div> children components here </div>
</Card>`;

const CardUsageDefaultCode =
`<Card
  display="flow-root">
  <div className="app-link-compound">
    <img src={Img1} alt="Img" />
    <span>System Settings and preferences</span>
    <p>Customize system controls and more</p>
  </div>
  <Switch />
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
  <div style={{float:'right',display:'flex'}}>
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
    style={{float:'right',margin:5}}
    value="Edit" />
</Card>`;

export {
    CardImportCode,
    CardUsageCode,
    CardUsageDefaultCode,
    CardUsageHoverCode,
    CardUsageFocusedCode
}