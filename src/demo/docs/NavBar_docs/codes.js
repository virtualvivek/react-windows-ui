const NavBarImportCode =
`import { NavBar } from 'react-windows-ui'`;

const NavBarLinkImportCode =
`import { NavBarLink } from 'react-windows-ui'`;

const NavBarUsageCode =
`<NavBar 
  title="NavBar"
  titleShort={<i className="icons10-windows"></i>}
  shadowOnScroll={true}>

  <h1>Title</h1>
  <div className="app-hr"></div>

  <NavBarLink
    to="/"
    exact={true}
    text="Page1"
    icon={<i className="icons10-home"></i>}
    showBadge={7}
  />
  <NavBarLink
    to="/page2"
    text="Page2"
    icon={<i className="icons10-list"></i>}
/>

</NavBar>`;

const NavBarLinkUsageCode =
`<NavBarLink
  to="/"
  exact={true}
  text="Page1"
  icon={<i className="icons10-home"></i>}
  showBadge={7}
/>`;

const NavBarLinkImgUsageCode =
`<NavBarLink
  to="/"
  exact={true}
  text="Page1"
  img={Img1}
  imgAlt="Img alt text"
  imgBorderRadius={4}
/>`;


export {
    NavBarImportCode,
    NavBarUsageCode,
    NavBarLinkUsageCode,
    NavBarLinkImportCode,
    NavBarLinkImgUsageCode
}