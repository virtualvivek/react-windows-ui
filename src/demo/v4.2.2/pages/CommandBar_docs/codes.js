const CommandBarImportCode =
`import { CommandBar } from "react-windows-ui";`;

const CommandBarUsageCode =
`<CommandBar>
  <CommandBar.Button value="New" icon={<i className="icons10-plus color-primary"></i>}/>

  <CommandBar.SplitDivider/>

  <CommandBar.Menu menuDirection="leftJustify">
    <CommandBar.MenuItem label="File" icon={<i className="icons10-file"></i>} />
    <CommandBar.MenuItem label="Folder" onClick={() => alert("Hi")} />
    <CommandBar.MenuItem label="Image" />
    <CommandBar.MenuItem label="Document" />
  </CommandBar.Menu>

</CommandBar>`;

const CommandBarButtonUsageCode =
`<CommandBar.Button
  value="Upload"
  icon={<i className="icons10-upload color-primary"></i>}
/>`;

const CommandBarDropdownUsageCode =
`<CommandBar.Menu>
  <CommandBar.MenuTrigger>
    <CommandBar.Button
      value="Share"
      icon={<i className="icons10-angle-down color-primary"></i>}
    />
  </CommandBar.MenuTrigger>
  <CommandBar.MenuItem label="Whatsapp">
    <CommandBar.MenuSubItem label="HyperLink"/>
    <CommandBar.MenuSubItem label="QR Code"/>
  </CommandBar.MenuItem>
  <CommandBar.MenuItem label="Facebook" />
</CommandBar.Menu>`;

const CommandBarSplitUsageCode =
`<CommandBar>
  <CommandBar.Button value="New" icon={<i className="icons10-plus color-primary"></i>}/>

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
  CommandBarUsageCode,
  CommandBarButtonUsageCode,
  CommandBarDropdownUsageCode,
  CommandBarSplitUsageCode
}