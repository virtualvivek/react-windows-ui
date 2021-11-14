const GaugeImportCode =
`import { Gauge } from 'react-windows-ui'`;

const GaugeUsageCode =
`<Gauge
  setProgress={this.state.gaugeValue}
  value={"%"}
  info="of something"
/>`;

const GaugeCustom1UsageCode =
`<Gauge
  setProgress={this.state.gaugeValue}
  size={100}
  value={"%"}
  info="of total"
  strokeColor="#e01944"
  valueColor="#e01944"
/>`;

const GaugeCustom3UsageCode =
`<Gauge
  setProgress={44}
  size={120}
  value={"%"}
  valueFontSize={34}
  strokeColor="#198ae0"
  valueColor="#198ae0"
  backgroundColor="#198ae044"
/>`;

const GaugeCustom4UsageCode =
`<Gauge
  setProgress={15}
  value={" KM/s"}
  valueFontSize={20}
  info="of Speed"
  infoFontSize={16}
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