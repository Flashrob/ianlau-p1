import React from "react";

export default class ActionBoard extends React.Component {
  handleClick = (e) => {
    const { handleSelect, selected } = this.props;
    if (selected !== "") {
      handleSelect("");
      return;
    }
    let select = e.target.value;
    handleSelect(select);
  };

  render() {
    const { selected } = this.props;
    console.log(selected);
    return (
      <div className="action-board">
        Action:
        <button
          className={selected === "1" ? "selected-icon" : "action-icon"}
          value="1"
          onClick={
            selected === "1" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action1.jpg")} alt="Action1" />
          Move
        </button>
        <button
          className={selected === "2" ? "selected-icon" : "action-icon"}
          value="2"
          onClick={
            selected === "2" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action2.jpg")} alt="Action2" />
          Draw
        </button>
        <button
          className={selected === "3" ? "selected-icon" : "action-icon"}
          value="3"
          onClick={
            selected === "3" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action3.jpg")} alt="Action3" />
          Move
        </button>
        <button
          className={selected === "4" ? "selected-icon" : "action-icon"}
          value="4"
          onClick={
            selected === "4" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action4.jpg")} alt="Action4" />
          Move
        </button>
        <div className="energy-icon">
          Energy:
          <br />7
        </div>
      </div>
    );
  }
}
