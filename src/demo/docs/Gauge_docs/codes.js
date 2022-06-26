const GaugeImportCode =
`import { Gauge } from 'react-windows-ui'`;

const GaugeUsageCode =
`<Gauge
  value={"%"}
  info="of something"
  setProgress={this.state.gaugeValue}
/>`;

const GaugeCustom1UsageCode =
`<Gauge
  size={100}
  value={"%"}
  info="of total"
  valueColor="#e01944"
  strokeColor="#e01944"
  setProgress={this.state.gaugeValue}
/>`;

const GaugeCustom3UsageCode =
`<Gauge
  size={120}
  value={"%"}
  setProgress={44}
  valueFontSize={34}
  strokeColor="#198ae0"
  valueColor="#198ae0"
  backgroundColor="#198ae044"
/>`;

const GaugeCustom4UsageCode =
`<Gauge
  value={" KM/s"}
  info="of Speed"
  setProgress={15}
  infoFontSize={16}
  valueFontSize={20}
  strokeColor="#0ac94e"
  backgroundColor="#0ac94e44"
/>`;



export {
  GaugeImportCode,
  GaugeUsageCode,
  GaugeCustom1UsageCode,
  GaugeCustom3UsageCode,
  GaugeCustom4UsageCode
}