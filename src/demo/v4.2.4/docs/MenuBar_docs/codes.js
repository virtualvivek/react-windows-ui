const MenuBarImportCode =
`import { MenuBar } from "react-windows-ui";`;

const MenuBarUsageCode =
`const anchorRef = useRef(null);
const dialogRef = useRef();

const handleButtonClick = () => {
  dialogRef.current.openDialog();
};

return (
  <>
  <Button
    ref={anchorRef}
    value="Open Menu"
    onClick={handleButtonClick}
    icon={<i className="icons10-plus ui-color-primary"></i>}
  />

  <MenuBar
    ref={dialogRef}
    anchorRef={anchorRef}>
    <MenuBar.Item label="Instagram" onClick={() => {}}/>
    <MenuBar.Item.Divider/>
    <MenuBar.Item label="Facebook"/>
    <MenuBar.Item.SubMenu label="Whatsapp">
      <MenuBar.Item label="Hyperlink"/>
    </MenuBar.Item.SubMenu>
    <MenuBar.Item label="Telegram"/>
  </MenuBar>
  </>
)`;

const MenuBarOnClickUsageCode =
`const anchorRef2 = useRef(null);
const dialogRef2 = useRef();

const handleButton2Click = () => {
  dialogRef2.current.openDialog();
};

return (
  <>
  <ButtonGroup>
    <Button
      value="New"
      type="subtle"
      icon={<i className="icons10-plus ui-color-primary"></i>}
    />
    <Button
      ref={anchorRef2}
      type="subtle"
      icon={<i className="icons10-angle-down"></i>}
    />
  </ButtonGroup>
  <Button
    type="subtle"
    value="Upload"
    icon={<i className="icons10-upload ui-color-primary"></i>}
  />
  <Button
    type="subtle"
    value="Share"
    icon={<i className="icons10-share ui-color-primary"></i>}
  />

  <MenuBar
    ref={dialogRef2}
    anchorRef={anchorRef2}>
    <MenuBar.Item label="Instagram" onClick={() => {}}/>
    <MenuBar.Item.Divider/>
    <MenuBar.Item label="Facebook"/>
    <MenuBar.Item.SubMenu label="Whatsapp">
      <MenuBar.Item label="Hyperlink"/>
    </MenuBar.Item.SubMenu>
    <MenuBar.Item label="Telegram"/>
  </MenuBar>
  </>
)`;


export {
  MenuBarImportCode,
  MenuBarUsageCode,
  MenuBarOnClickUsageCode
}