const SliderBarImportCode =
`import { SliderBar } from 'react-windows-ui'`;

const SliderBarUsageCode =
`<SliderBar
  defaultValue={this.state.SliderVal}
  showValue={false}
  onChange={(e) => {this.onChangeSlider(e)}}
  tooltip="SliderBar tooltip title"
/>`;

const SliderBarRoundUsageCode =
`<SliderBar
  defaultValue={this.state.Slider}
  thumbStyle="round"
  step={4}
  onChange={(e) => {this.onChangeSlider(e)}}
/>`;

const SliderBarRoundBorderUsageCode =
`<SliderBar
  defaultValue={this.state.Slider}
  thumbStyle="round-border"
  onChange={(e) => {this.onChangeSlider(e)}}
/>`;



export {
  SliderBarImportCode,
  SliderBarUsageCode,
  SliderBarRoundUsageCode,
  SliderBarRoundBorderUsageCode
}