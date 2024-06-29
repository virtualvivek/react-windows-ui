const CommandBarImportCode =
`import { CommandBar } from "react-windows-ui";`;

const CommandBarButtonUsageCode =
`<CommandBar.Button
  value="Upload"
  icon={<i className="icons10-upload ui-color-primary"></i>}
/>`;

const CommandBarDropdownUsageCode =
`<CommandBar.Menu>
  <CommandBar.Menu.Trigger> // You can use any Custom Element as Trigger
    <CommandBar.Button
      value="Share"
      icon={<i className="icons10-angle-down ui-color-primary"></i>}
    />
  </CommandBar.Menu.Trigger>
  <CommandBar.Menu.Item label="Instagram"/>
  <CommandBar.Menu.Item.Divider/>
  <CommandBar.Menu.Item label="Facebook" />
  <CommandBar.Menu.Item label="Whatsapp">
    <CommandBar.Menu.Item label="HyperLink"/> // Nesting MenuItem
  </CommandBar.Menu.Item>
</CommandBar.Menu>`;

const CommandBarSplitUsageCode =
`<CommandBar>
  <CommandBar.Button value="New" icon={<i className="icons10-plus ui-color-primary"></i>}/>

  <CommandBar.SplitDivider/>

  <CommandBar.Menu menuDirection="leftJustify">
    <CommandBar.Menu.Item label="File" icon={<i className="icons10-file"></i>} />
    <CommandBar.Menu.Item label="Folder" onClick={() => {}} />
    <CommandBar.Menu.Item label="Image" />
    <CommandBar.Menu.Item label="Document" />
  </CommandBar.Menu>
</CommandBar>`;


export {
  CommandBarImportCode,
  CommandBarButtonUsageCode,
  CommandBarDropdownUsageCode,
  CommandBarSplitUsageCode
}