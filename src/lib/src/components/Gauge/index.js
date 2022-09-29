import React from 'react'

class Gauge extends React.Component {

  state={
    isProgress: this.props.setProgress
  }

  componentDidUpdate(prevProps) {
    let limit = this.props.setProgress;
    let num = this.state.isProgress;

    if (prevProps.setProgress !== this.props.setProgress) {

      if(prevProps.setProgress < this.props.setProgress) {
        var interval = setInterval(()=> {
          num += 1;
          this.setState({ isProgress: num });

          if (num >= limit) { clearInterval(interval); }
        }, 10);
      }

      if(prevProps.setProgress > this.props.setProgress) {
        var interval_ = setInterval(()=> {
          num -= 1;
          this.setState({ isProgress: num });

          if (num <= limit) { clearInterval(interval_); }
        }, 10);
      }
    }
  }

  render() {
    return (
      <div
        className="app-gauge"
        style={{
          background:
            `conic-gradient(${this.props.strokeColor} 0% ${this.state.isProgress}%,
            ${this.props.backgroundColor} ${this.state.isProgress}% 100%)`,
          width: this.props.size,
          height: this.props.size
        }}>
        <div
          className="app-gauge-inner"
          style={{
            width: this.props.size-20,
            height: this.props.size-20
          }}>
          {this.props.showValue && (
            <span
              className="app-gauge-value"
              style={{
                color: this.props.valueColor,
                fontSize: this.props.valueFontSize
              }}>
              {this.state.isProgress+""+this.props.valueUnit}
            </span>
          )}
          <span
            className="app-gauge-info"
            style={{
              fontSize: this.props.infoFontSize
            }}>
            {this.props.info}
          </span>
        </div>
      </div>
    );
  }
}

Gauge.defaultProps = {
  size: 140,
  setProgress: 0,
  showValue: true,
  valueUnit: "",
  valueColor: "var(--color_text_dark)",
  valueFontSize: 25,
  infoFontSize: 14,
  strokeColor: "var(--PrimaryColor)",
  backgroundColor: "var(--color_grey_light)"
}

export default Gauge