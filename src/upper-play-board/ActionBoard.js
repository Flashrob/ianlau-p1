import React from "react";

export default class ActionBoard extends React.Component {
  handleClick = (e) => {
    const { handleSelectAction, selectedElement, energy } = this.props;
    let action = e.currentTarget.value;
    const notEnoughEnergy =
      (action === "Action1" && energy < 1) ||
      ((action === "Action2" || action === "Action3" || action === "Action4") &&
        energy < 2);
    if (action === selectedElement || notEnoughEnergy) {
      action = "";
    }
    handleSelectAction(action);
  };

  render() {
    const { selectedElement, energy } = this.props;
    return (
      <div className="action-board">
        Action:
        <button
          className={
            selectedElement === "Action1" ? "selected-icon" : "action-icon"
          }
          value="Action1"
          onClick={
            selectedElement === "Action1" || selectedElement === ""
              ? this.handleClick
              : null
          }
        >
          <img src={require("./ActionIcon/Action1.jpg")} alt="Action1" />
          Move
        </button>
        <button
          className={
            selectedElement === "Action2" ? "selected-icon" : "action-icon"
          }
          value="Action2"
          onClick={
            selectedElement === "Action2" || selectedElement === ""
              ? this.handleClick
              : null
          }
        >
          <img src={require("./ActionIcon/Action2.jpg")} alt="Action2" />
          Move
        </button>
        <button
          className={
            selectedElement === "Action3" ? "selected-icon" : "action-icon"
          }
          value="Action3"
          onClick={
            selectedElement === "Action3" || selectedElement === ""
              ? this.handleClick
              : null
          }
        >
          <img src={require("./ActionIcon/Action3.jpg")} alt="Action3" />
          Move
        </button>
        <button
          className="action-icon"
          value="Action4"
          onClick={selectedElement === "" ? this.handleClick : null}
        >
          <img src={require("./ActionIcon/Action4.jpg")} alt="Action4" />
          Draw
        </button>
        <div className="energy-icon">
          Energy:
          <br />
          {energy}
        </div>
      </div>
    );
  }
}
