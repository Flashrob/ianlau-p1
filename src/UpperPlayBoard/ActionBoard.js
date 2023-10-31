import React from "react";

export default class ActionBoard extends React.Component {
  render() {
    return (
      <div className="action-board">
        Action:
        <div className="action-icon"></div>
        <div className="action-icon"></div>
        <div className="action-icon"></div>
        <div className="energy-icon">
          Energy:
          <br />7
        </div>
      </div>
    );
  }
}
