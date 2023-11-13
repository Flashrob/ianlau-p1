import React from "react";
import "./pop-up.css";
import { Button } from "primereact/button";

export default class PopUp extends React.Component {
  handleClick = () => {
    this.props.handleConfirmMessage();
  };

  render() {
    return (
      <div className="bullet-hit">
        {`You have been hit by a ${this.props.popUpMessage.color}${this.props.popUpMessage.name} bullet.`}
        <Button onClick={this.handleClick} label="Okay" />
      </div>
    );
  }
}
