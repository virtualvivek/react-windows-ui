const ListItemImportCode =
`import { ListItem } from "react-windows-ui";`;

const ListItemUsageCode =
`<ListItem
  title="Contacts"
  subtitle="5.6 MB"
  ItemEndComponent={<p>installed</p>}
/>`;

const ListItemImageUsageCode =
`<ListItem
  imgSrc={Img}
  imgBorderRadius={8}
  imgAlt="avatar1"
  title="Magenta Riddim"
  subtitle="5.6 MB"
  ItemEndComponent={<button style={{width: "50px", height: "100%"}}>Button</button>}
/>`;

const ListItemImageRoundUsageCode =
`<ListItem
  imgSrc={Img}
  imgAlt="avatar1"
  title="User 1"
  subtitle="Web Developer"
/>`;


export {
   ListItemImportCode,
   ListItemUsageCode,
   ListItemImageUsageCode,
   ListItemImageRoundUsageCode
}