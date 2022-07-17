const NavBarLinkImportCode =
`import { NavBarLink } from "react-windows-ui";`;

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
  imgSrc={Img1}
  imgAlt="Img alt text"
  imgBorderRadius={4}
/>`;

const NavBarLinkBadgeUsageCode =
`<NavBarLink
  showBadge={7}
  text="Page1"
  imgSrc={Img1}
  to="/"
/>`;


export {
  NavBarLinkUsageCode,
  NavBarLinkImportCode,
  NavBarLinkImgUsageCode,
  NavBarLinkBadgeUsageCode
}