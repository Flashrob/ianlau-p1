import React from "react";
import "./pop-up.css";
import TutorialMessageList from "./tutorial-message/TutorialMessageList";

export default class PopUp extends React.Component {
  handleClick = () => {
    this.props.handleConfirmMessage();
  };

  render() {
    let display;
    if (this.props.popUpMessage.name) {
      display = (
        <div className="bullet-hit">
          {`You have been hit by a ${this.props.popUpMessage.color}${this.props.popUpMessage.name} bullet .`}
          <button onClick={this.handleClick}>Okay</button>{" "}
        </div>
      );
    } else if (this.props.popUpMessage === "tutorial") {
      display = <TutorialMessageList tutorial={this.props.tutorial} />;
    }
    return display;
  }
}
