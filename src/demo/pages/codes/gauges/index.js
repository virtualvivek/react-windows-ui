const GaugeDefaultCode =
`<Gauge
 setProgress={this.state.gaugeValue}
 scale={2}
 value={this.state.gaugeValue+"%"}
 info="of something"
/>`;

const GaugeCustom1Code =
`<Gauge
 setProgress={this.state.gaugeValue}
 scale={1.2}
 value={this.state.gaugeValue+"%"}
 info="of something"
 strokeColor="#eb8613"
 valueColor="#eb8613"
 //type="fill"
/>`;

const GaugeCustom2Code =
`<Gauge
 setProgress={44}
 scale={1.2}
 value={"44%"}
 info="of total"
 strokeColor="#198ae0"
 strokeWidth={8}
 valueColor="#198ae0"
 backgroundColor="#198ae044"
 //type="fill"
/>`;

export {
    GaugeDefaultCode,
    GaugeCustom1Code,
    GaugeCustom2Code
}