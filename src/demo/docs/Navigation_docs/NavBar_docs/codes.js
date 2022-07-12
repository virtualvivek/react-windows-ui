const NavBarImportCode =
`import { NavBar } from 'react-windows-ui'`;

const NavBarUsageCode =
`<NavBar 
  title="NavBar"
  shadowOnScroll={true}
  titleBarMobile={<>{/* render a layout for small devices */}</>}>
  ....
  <NavBarLink to="/somelink" />
  ....
</NavBar>`;

const NavBarExampleUsageCode =
`<NavBar 
  title="NavBar"
  shadowOnScroll={true}
  titleBarMobile={
    <div>
      <span className="app-navbar-name">React-windows-ui</span>
    </div>
  }>
  ....
</NavBar>`;


export {
  NavBarImportCode,
  NavBarUsageCode,
  NavBarExampleUsageCode
}