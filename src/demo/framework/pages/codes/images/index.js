const AvatarViewCode =
`<AvatarView
 src={Image}
 showDropShadow={true}
 isLoading={false}
 size="large"
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
 //tooltip="tooltip title"
/>`;

export {
    AvatarViewCode,
    ImageViewCode
}