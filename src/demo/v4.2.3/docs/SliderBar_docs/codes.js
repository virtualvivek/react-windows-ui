const SliderBarImportCode =
`import { SliderBar } from "react-windows-ui";`;

const SliderBarUsageCode =
`<SliderBar
  tooltip="SliderBar tooltip title"
  defaultValue={this.state.SliderVal}
  onChange={(e) => {this.onChangeSlider(e)}}
/>`;

const SliderBarRoundUsageCode =
`<SliderBar
  step={4}
  thumbStyle="round"
  defaultValue={this.state.Slider}
  onChange={(e) => {this.onChangeSlider(e)}}
/>`;


export {
  SliderBarImportCode,
  SliderBarUsageCode,
  SliderBarRoundUsageCode
}