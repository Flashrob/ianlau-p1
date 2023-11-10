import React from "react";
import "./pop-up.css";
import TutorialPopup from "./tutorial-popup/TutorialPopup";

export default class PopUp extends React.Component {
  handleClick = () => {
    this.props.handleConfirmMessage();
  };

  render() {
    let display = "";
    if (this.props.tutorial > 0 && this.props.tutorial !== 15) {
      display = <TutorialPopup tutorial={this.props.tutorial} />;
    } else if (this.props.popUpMessage !== "") {
      display = (
        <div className="bullet-hit">
          {`You have been hit by a ${this.props.popUpMessage} bullet .`}
          <button onClick={this.handleClick}>Okay</button>
        </div>
      );
    }
    return display;
  }
}
