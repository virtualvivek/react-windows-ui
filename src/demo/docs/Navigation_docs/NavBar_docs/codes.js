const NavBarImportCode =
`import { NavBar } from 'react-windows-ui'`;

const NavBarLinkImportCode =
`import { NavBarLink } from 'react-windows-ui'`;

const NavBarUsageCode =
`<NavBar 
  title="NavBar"
  shadowOnScroll={true}>
  ....
  <NavBarLink
    to="/"
    text="Page1"
    icon={<i className="icons10-home"></i>}
  />
  ....
</NavBar>`;

const NavBarLinkUsageCode =
`<NavBarLink
  to="/"
  exact={true}
  text="Page1"
  icon={<i className="icons10-home"></i>}
/>`;

const NavBarLinkImgUsageCode =
`<NavBarLink
  to="/"
  text="Page1"
  img={Img1}
  imgAlt="Img alt text"
  imgBorderRadius={4}
/>`;

const NavBarLinkBadgeUsageCode =
`<NavBarLink
  showBadge={7}
  text="Page1"
  img={Img1}
  to="/"
/>`;


export {
  NavBarImportCode,
  NavBarUsageCode,
  NavBarLinkUsageCode,
  NavBarLinkImportCode,
  NavBarLinkImgUsageCode,
  NavBarLinkBadgeUsageCode
}