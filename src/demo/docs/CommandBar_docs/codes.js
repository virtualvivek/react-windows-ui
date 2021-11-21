const CommandBarImportCode =
`import { CommandBar, CommandBarButton  } from 'react-windows-ui'`;

const CommandBarUsageCode =
`<CommandBar>
  ......
  <CommandBarButton
    value="Upload"
    onClick={()=>{}}
    icon={<i className="icons10-plus color-primary"></i>}
    data={[
      {label: 'file', link: '#', icon: <i className="icons10-file"></i>},
      {label: 'folder', onClick: this.funName},
      {label: 'image', onClick: this.funName},
      {label: 'document', onClick: this.funName},
    ]}
  />
  ......
</CommandBar>`;

const CommandBarButtonUsageCode =
`<CommandBarButton
  value="Upload"
  icon={<i className="icons10-upload color-primary"></i>}
  onClick={()=>{}}
/>`;

const CommandBarDropdownUsageCode =
`<CommandBarButton
  value="Share"
  icon={<i className="icons10-share color-primary"></i>}
  data={[
    {label: 'Whatsapp', link: '#', icon: <i className="icons10-share"></i>},
    {label: 'Facebook', onClick: this.funName},
    {label: 'Instagram', link: '#'},
    {label: 'Telegram', onClick: this.funName},
  ]}
/>`;

const CommandBarSplitUsageCode =
`<CommandBarButton
  value="New"
  onClick={()=>{}}
  icon={<i className="icons10-plus color-primary"></i>}
  data={[
    {label: 'file', link: '#', icon: <i className="icons10-file"></i>},
    {label: 'folder', onClick: this.funName},
    {label: 'image', link: '#'},
    {label: 'document', onClick: this.funName},
  ]}
/>`;


export {
    CommandBarImportCode,
    CommandBarUsageCode,
    CommandBarButtonUsageCode,
    CommandBarDropdownUsageCode,
    CommandBarSplitUsageCode
}