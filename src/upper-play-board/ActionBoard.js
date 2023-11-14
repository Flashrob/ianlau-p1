import React from "react";
import { Button } from "primereact/button";
export default class ActionBoard extends React.Component {
  handleClick = (e) => {
    const { handleSelectAction, selectedElement, energy } = this.props;
    let action = e.currentTarget.value;
    const notEnoughEnergy =
      (action === "Action1" && !energy) ||
      ((action === "Action2" || action === "Action3" || action === "Action4") &&
        energy < 2);
    if (action === selectedElement || notEnoughEnergy) {
      action = "";
    }
    handleSelectAction(action);
  };

  detButtonDisable = (action) => {
    const { selectedElement, popUpMessage, tutorial } = this.props;
    return !(
      ((selectedElement === action || !selectedElement.length) &&
        !popUpMessage &&
        !tutorial) ||
      (action === "Action1" && (tutorial === 16 || tutorial === 23))
    );
  };

  render() {
    const { selectedElement, energy } = this.props;
    return (
      <div className="action-board">
        Action:
        <Button
          className={
            selectedElement === "Action1" ? "selected-icon" : "action-icon"
          }
          value="Action1"
          onClick={this.handleClick}
          disabled={this.detButtonDisable("Action1")}
          label={
            <img src={require("./ActionIcon/Action1.jpg")} alt="Action1" />
          }
          severity="secondary"
        />
        <Button
          className={
            selectedElement === "Action2" ? "selected-icon" : "action-icon"
          }
          value="Action2"
          onClick={this.handleClick}
          disabled={this.detButtonDisable("Action2")}
          label={
            <img src={require("./ActionIcon/Action2.jpg")} alt="Action2" />
          }
          severity="secondary"
        />
        <Button
          className={
            selectedElement === "Action3" ? "selected-icon" : "action-icon"
          }
          value="Action3"
          onClick={this.handleClick}
          disabled={this.detButtonDisable("Action3")}
          label={
            <img src={require("./ActionIcon/Action3.jpg")} alt="Action3" />
          }
          severity="secondary"
        />
        <Button
          className="action-icon"
          value="Action4"
          onClick={this.handleClick}
          disabled={this.detButtonDisable("Action4")}
          label={
            <img src={require("./ActionIcon/Action4.jpg")} alt="Action4" />
          }
          severity="secondary"
        />
        <div className="energy-icon">
          <h5>Energy:</h5>
          <h5>{energy}</h5>
        </div>
      </div>
    );
  }
}
