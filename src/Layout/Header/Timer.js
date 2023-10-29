import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 2400, counting: false };
  }

  convertSecToMin = (second) => {
    let min = Math.floor(second / 600);
    second %= 60;
    return `${min}:${second < 10 ? "0" + second : second}`;
  };

  countdown = () => {
    if (this.state.counting === true) {
      this.setState({ timer: this.state.timer - 1 });
    }
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => this.countdown(), 1000);
  };

  testing = () => {
    this.setState({ counting: !this.state.counting });
    if (this.state.counting) {
      this.componentDidMount();
    } else clearInterval(this.timerID);
  };

  render() {
    return (
      <div className="timer">
        Timer
        <br />
        {this.convertSecToMin(this.state.timer)}
      </div>
    );
  }
}
