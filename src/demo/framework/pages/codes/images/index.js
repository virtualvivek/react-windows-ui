const AvatarViewCode =
`<AvatarView
 src={Image}
 showDropShadow={true}
 isLoading={false}
 size="large"
 //onLoad={() => {}}
 //onError={() => {}}
 //size="medium"
 //size="small"
 //tooltip="tooltip title"
/>`;

const ImageViewCode =
`<ImageView
 src={Image}
 width={'280px'}
 height={'280px'}
 insetShadow={false}
 borderRadius={18}
 title="Image Title"
 subtitle="Image Subtitle"
 isLoading={false}
 //onLoad={() => {}}
 //onError={() => {}} 
 //tooltip="tooltip title"
/>`;

export {
    AvatarViewCode,
    ImageViewCode
}