const ProgressBarCode =
`<ProgressBar
 title="Some Title text"
 subtitle="subtitle text"
 setProgress={50}
 //setStatus="danger"
 //setStatus="success"
 //height={15}
 //showIcon={true}
 //icon={<i className="icons10-hdd"></i>}
 //tooltip="tooltip title"
/>`;

const ProgressBarIndeterminateCode =
`<ProgressBarIndeterminate
 isLoading={true}
/>`;

const LoaderBarCode =
`<LoaderBar
 isLoading={true}
/>`;

const LoaderBusyCode =
`<LoaderBusy
 isLoading={true}
 //size="medium"
 //size="small"
/>`;

const LoaderBusyFullscreenCode =
`<LoaderBusy
 isVisible={true}
 onBackdropPress={this.toggleLoaderBusy}
 display="fullscreen"
 setTheme="light"
 title="some title text"
 //backgroundColor="#777"
/>`;

export {
    ProgressBarCode,
    ProgressBarIndeterminateCode,
    LoaderBarCode,
    LoaderBusyCode,
    LoaderBusyFullscreenCode
}