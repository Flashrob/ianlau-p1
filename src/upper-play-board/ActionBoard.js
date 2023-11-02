import React from "react";

export default class ActionBoard extends React.Component {
  handleClick = (e) => {
    const { handleSelectAction, chosenAction, energy } = this.props;
    let action = e.currentTarget.value;
    if (e.target.value === chosenAction || energy < Number(action.slice(-1))) {
      action = "";
    }
    handleSelectAction(action);
  };

  render() {
    const { chosenAction, energy } = this.props;
    return (
      <div className="action-board">
        Action:
        <button
          className={
            chosenAction === "Action1" ? "selected-icon" : "action-icon"
          }
          value="Action1"
          onClick={
            chosenAction === "Action1" || chosenAction === ""
              ? this.handleClick
              : null
          }
        >
          <img src={require("./ActionIcon/Action1.jpg")} alt="Action1" />
          Move
        </button>
        <button
          className={
            chosenAction === "Action2" ? "selected-icon" : "action-icon"
          }
          value="Action2"
          onClick={
            chosenAction === "Action2" || chosenAction === ""
              ? this.handleClick
              : null
          }
        >
          <img src={require("./ActionIcon/Action2.jpg")} alt="Action2" />
          Move
        </button>
        <button
          className={
            chosenAction === "Action3" ? "selected-icon" : "action-icon"
          }
          value="Action3"
          onClick={
            chosenAction === "Action3" || chosenAction === ""
              ? this.handleClick
              : null
          }
        >
          <img src={require("./ActionIcon/Action3.jpg")} alt="Action3" />
          Move
        </button>
        <button className="action-icon">
          {/*Need to Add onClick drawCArdfunction with chosenAction===""*/}
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
