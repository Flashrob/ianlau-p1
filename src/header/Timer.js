import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 90 };
  }

  convertSecToMin = (second) => {
    let min = Math.floor(second / 60);
    second %= 60;
    return `${min}:${second < 10 ? "0" + second : second}`;
  };

  countdown = () => {
    if (this.state.timer === 0) {
      this.props.handleEndRound();
    } else this.setState({ timer: this.state.timer - 1 });
  };

  componentDidMount = () => {
    this.timerID = setInterval(() => this.countdown(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
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
