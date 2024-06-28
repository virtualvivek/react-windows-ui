const CommandBarImportCode =
`import { CommandBar } from "react-windows-ui";`;

const CommandBarButtonUsageCode =
`<CommandBar.Button
  value="Upload"
  icon={<i className="icons10-upload ui-color-primary"></i>}
/>`;

const CommandBarDropdownUsageCode =
`<CommandBar.Menu>
  <CommandBar.MenuTrigger> // You can use any Custom Element as Trigger
    <CommandBar.Button
      value="Share"
      icon={<i className="icons10-angle-down ui-color-primary"></i>}
    />
  </CommandBar.MenuTrigger>
  <CommandBar.MenuItem label="Instagram"/>
  <CommandBar.MenuItemDivider/>
  <CommandBar.MenuItem label="Facebook" />
  <CommandBar.MenuItem label="Whatsapp">
    <CommandBar.MenuItem label="HyperLink"/> // Nesting MenuItem
  </CommandBar.MenuItem>
</CommandBar.Menu>`;

const CommandBarSplitUsageCode =
`<CommandBar>
  <CommandBar.Button value="New" icon={<i className="icons10-plus ui-color-primary"></i>}/>

  <CommandBar.SplitDivider/>

  <CommandBar.Menu menuDirection="leftJustify">
    <CommandBar.MenuItem label="File" icon={<i className="icons10-file"></i>} />
    <CommandBar.MenuItem label="Folder" onClick={() => {}} />
    <CommandBar.MenuItem label="Image" />
    <CommandBar.MenuItem label="Document" />
  </CommandBar.Menu>
</CommandBar>`;


export {
  CommandBarImportCode,
  CommandBarButtonUsageCode,
  CommandBarDropdownUsageCode,
  CommandBarSplitUsageCode
}