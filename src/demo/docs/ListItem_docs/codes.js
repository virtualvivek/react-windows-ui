const ListItemImportCode =
`import { ListItem } from "react-windows-ui";`;

const ListItemUsageCode =
`<ListItem
  title="Contacts"
  subtitle="5.6 MB"
  ItemEndComponent={<p className="app-list-info">installed</p>}
/>`;

const ListItemImageUsageCode =
`<ListItem
  imgSrc={Img}
  imgBorderRadius={8}
  imgAlt="avatar1"
  title="Magenta Riddim"
  subtitle="5.6 MB"
  ItemEndComponent={<Button type='danger-outline' value="Delete"/>}
/>`;

const ListItemImageRoundUsageCode =
`<ListItem
  imgSrc={Img}
  imgAlt="avatar1"
  title="User 1"
  subtitle="Web Developer"
  info="online"
/>`;


export {
   ListItemImportCode,
   ListItemUsageCode,
   ListItemImageUsageCode,
   ListItemImageRoundUsageCode
}