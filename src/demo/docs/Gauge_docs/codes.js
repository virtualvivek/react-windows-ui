const GaugeImportCode =
`import { Gauge } from 'react-windows-ui'`;

const GaugeUsageCode =
`<Gauge
  setProgress={50}
  scale={2}
  value={50+"%"}
  info="of something"
/>>`;

const GaugeCustom1UsageCode =
`<Gauge
  setProgress={50}
  scale={1.5}
  value={50+"%"}
  info="of total"
  strokeColor="#e01944"
  valueColor="#e01944"
/>`;

const GaugeCustom2UsageCode =
`<Gauge
  setProgress={50}
  scale={1.2}
  value={50+"%"}
  strokeColor="#eb8613"
  valueColor="#eb8613"
  type="fill"
/>`;

const GaugeCustom3UsageCode =
`<Gauge
  setProgress={44}
  scale={1.2}
  value={44+"%"}
  info="of total"
  strokeColor="#198ae0"
  strokeWidth={8}
  valueColor="#198ae0"
  backgroundColor="#198ae044"
/>`;

const GaugeCustom4UsageCode =
`<Gauge
  setProgress={15}
  scale={1.2}
  value={15+"%"}
  info="of Speed"
  strokeColor="#0ac94e"
  strokeWidth={10}
  backgroundColor="#0ac94e44"
/>`;



export {
    GaugeImportCode,
    GaugeUsageCode,
    GaugeCustom1UsageCode,
    GaugeCustom2UsageCode,
    GaugeCustom3UsageCode,
    GaugeCustom4UsageCode
}