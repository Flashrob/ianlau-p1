import React from "react";
import "./pop-up.css";

export default class PopUp extends React.Component {
  handleClick = () => {
    this.props.handleConfirmMessage();
  };

  render() {
    let bullet = `You have been hit by a ${this.props.popUpMessage[0].color}${this.props.popUpMessage[0].name} bullet .`;
    return (
      <div className="bullet-hit">
        {bullet}
        <button onClick={this.handleClick}>OKay</button>
      </div>
    );
  }
}
