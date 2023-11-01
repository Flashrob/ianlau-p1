import React from "react";

export default class ActionBoard extends React.Component {
  handleClick = (e) => {
    const { handleSelect, selected } = this.props;
    if (selected !== "") {
      handleSelect("");
      return;
    }
    console.log(e.target.value);
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
          className={selected === "Action1" ? "selected-icon" : "action-icon"}
          value="Action1"
          onClick={
            selected === "Action1" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action1.jpg")} alt="Action1" />
          Move
        </button>
        <button
          className={selected === "Action2" ? "selected-icon" : "action-icon"}
          value="Action2"
          onClick={
            selected === "Action2" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action2.jpg")} alt="Action2" />
          Move
        </button>
        <button
          className={selected === "Action3" ? "selected-icon" : "action-icon"}
          value="Action3"
          onClick={
            selected === "Action3" || selected === "" ? this.handleClick : null
          }
        >
          <img src={require("./ActionIcon/Action3.jpg")} alt="Action3" />
          Move
        </button>
        <button className="action-icon">
          {/*Need to Add onClick drawCArdfunction with selected===""*/}
          <img src={require("./ActionIcon/Action4.jpg")} alt="Action4" />
          Draw
        </button>
        <div className="energy-icon">
          Energy:
          <br />7
        </div>
      </div>
    );
  }
}
