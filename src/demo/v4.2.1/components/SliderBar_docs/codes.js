const SliderBarImportCode =
`import { SliderBar } from "react-windows-ui";`;

const SliderBarUsageCode =
`<SliderBar
  showValue={false}
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

const SliderBarRoundBorderUsageCode =
`<SliderBar
  thumbStyle="round-border"
  showPopupValue={false}
  defaultValue={this.state.Slider}
  onChange={(e) => {this.onChangeSlider(e)}}
/>`;



export {
  SliderBarImportCode,
  SliderBarUsageCode,
  SliderBarRoundUsageCode,
  SliderBarRoundBorderUsageCode
}