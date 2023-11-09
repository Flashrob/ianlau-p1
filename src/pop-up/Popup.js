import React from "react";
import "./pop-up.css";
import TutorialPopup from "./tutorial-popup/TutorialPopup";

export default class PopUp extends React.Component {
  handleClick = () => {
    this.props.handleConfirmMessage();
  };

  render() {
    let display = "";
    if (this.props.popUpMessage.name) {
      display = (
        <div className="bullet-hit">
          {`You have been hit by a ${this.props.popUpMessage.color}${this.props.popUpMessage.name} bullet .`}
          <button onClick={this.handleClick}>Okay</button>
        </div>
      );
    } else if (this.props.tutorial > 0) {
      display = <TutorialPopup tutorial={this.props.tutorial} />;
    }
    return display;
  }
}
