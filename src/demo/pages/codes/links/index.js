const LinkDefaultCode =
`import { Link } from 'react-router-dom'
<Link to="#" target="" className="app-link">Default App Link</Link>`;

const LinkCompoundCode =
`<LinkCompound
 to="#"
 title="Title text display here"
 subtitle="Subtitle text"
 icon={<i className="icons10-home color-primary"></i>}
/>`;

const LinkCompoundBorderCode =
`<LinkCompound
    target=""
 to="#"
 linkStyle="border"
 title="Title text display here"
 subtitle="Subtitle text"
 icon={<i className="icons10-home"></i>}
/>`;

const LinkCompoundFluentCode =
``;

const LinkCompoundImageCode =
`<LinkCompound
 to="#"
 title="Title text display here"
 subtitle="Subtitle text"
 image={Img}
 imageAlt="Image alt"
/>`;

const LinkCompoundIconBGPrimary =
`<LinkCompound
 to="#"
 title="Title text display here"
 subtitle="Subtitle text"
 icon={<i className="icons10-home bg-primary"></i>}
/>`;

const LinkCompoundIconBGGrey =
`<LinkCompound
 to="#"
 title="Title text display here"
 subtitle="Subtitle text"
 icon={<i className="icons10-home bg-grey"></i>}
/>`;

export {
    LinkDefaultCode,
    LinkCompoundCode,
    LinkCompoundBorderCode,
    LinkCompoundFluentCode,
    LinkCompoundImageCode,
    LinkCompoundIconBGPrimary,
    LinkCompoundIconBGGrey
}