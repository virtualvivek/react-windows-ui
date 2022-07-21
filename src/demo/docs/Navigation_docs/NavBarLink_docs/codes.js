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
  to="/"
  text="Page1"
  showBadge={7}
  imgSrc={Img1}
/>`;


export {
  NavBarLinkUsageCode,
  NavBarLinkImportCode,
  NavBarLinkImgUsageCode,
  NavBarLinkBadgeUsageCode
}